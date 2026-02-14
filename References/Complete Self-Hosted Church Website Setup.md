# Complete Self-Hosted Church Website Setup

## 🏠 Network Infrastructure Requirements

### **Internet Connection Requirements:**
- **Upload Speed:** Minimum 25 Mbps (50+ Mbps recommended)
- **Download Speed:** Any modern connection works
- **Static IP:** Required ($5-15/month from ISP)
- **Business Internet:** Recommended (better uptime, support)

### **Network Equipment Needed:**
1. **Business Router/Firewall**
   - **Recommendation:** Ubiquiti Dream Machine ($379)
   - **Alternative:** ASUS AX6000 ($300)
   - **Budget Option:** Netgear Nighthawk Pro Gaming ($200)

2. **Uninterruptible Power Supply (UPS)**
   - **Recommendation:** CyberPower CP1500PFCLCD ($200)
   - **Powers:** Mac Mini + Router + Modem for 30+ minutes
   - **Features:** Automatic shutdown, surge protection

3. **Network Switch** (if needed)
   - **8-port Gigabit Switch:** $30-50
   - Only needed if you need more ethernet ports

## 🖥️ Mac Mini Server Setup Guide

### **Step 1: Mac Mini Hardware Setup**
```bash
# What to buy:
- Mac Mini M2 (16GB RAM, 512GB SSD) - $999
- External 4TB Drive for backups - $100
- UPS (CyberPower CP1500PFCLCD) - $200
- Ethernet cable (Cat6) - $15
- Total Hardware Cost: ~$1,314
```

### **Step 2: macOS Server Configuration**

#### **Initial Setup:**
1. **Set up Mac Mini with macOS Sonoma**
2. **Enable automatic login** (System Settings → Users & Groups)
3. **Disable sleep mode** (System Settings → Displays → Advanced → Prevent automatic sleeping)
4. **Enable SSH** (System Settings → General → Sharing → Remote Login)
5. **Enable Screen Sharing** for remote management

#### **Install Development Tools:**
```bash
# Install Xcode Command Line Tools
xcode-select --install

# Install Homebrew (package manager)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js via Homebrew
brew install node@18

# Install PostgreSQL
brew install postgresql@14
brew services start postgresql@14

# Install PM2 (process manager)
npm install -g pm2

# Install Nginx
brew install nginx
```

### **Step 3: Network Configuration**

#### **Router Setup (Port Forwarding):**
```bash
# Forward these ports to your Mac Mini's internal IP:
Port 80 (HTTP) → Mac Mini IP:80
Port 443 (HTTPS) → Mac Mini IP:443
Port 22 (SSH) → Mac Mini IP:22 (for remote management)

# Example: If Mac Mini IP is 192.168.1.100
80 → 192.168.1.100:80
443 → 192.168.1.100:443
22 → 192.168.1.100:22
```

#### **Static IP Setup:**
1. **Get static IP from your ISP** ($5-15/month)
2. **Configure your router** to use the static IP
3. **Update DNS records** (see Step 4)

### **Step 4: Domain Configuration**

Since you own `nmcky.org`, you need to:

#### **Update DNS Records:**
```bash
# At your domain registrar (where you bought nmcky.org):
A Record: nmcky.org → YOUR_STATIC_IP
A Record: www.nmcky.org → YOUR_STATIC_IP
A Record: cms.nmcky.org → YOUR_STATIC_IP

# Example if your static IP is 123.45.67.89:
nmcky.org → 123.45.67.89
www.nmcky.org → 123.45.67.89
cms.nmcky.org → 123.45.67.89
```

#### **Transfer Domain from Dreamhost:**
1. **Unlock domain** at Dreamhost
2. **Get authorization code** from Dreamhost
3. **Transfer to registrar** like Namecheap, Google Domains, or keep at Dreamhost but change DNS

### **Step 5: Install and Configure Strapi**

```bash
# Create project directory
sudo mkdir -p /usr/local/var/www
sudo chown $(whoami) /usr/local/var/www
cd /usr/local/var/www

# Install Strapi
npx create-strapi-app@latest church-cms --quickstart --no-run
cd church-cms

# Configure for production
cp .env.example .env
```

#### **Configure Database:**
```bash
# Create PostgreSQL database
createdb church_cms

# Update config/database.js
cat > config/database.js << 'EOF'
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'church_cms'),
      user: env('DATABASE_USERNAME', process.env.USER),
      password: env('DATABASE_PASSWORD', ''),
      ssl: false,
    },
  },
});
EOF
```

#### **Update Environment Variables:**
```bash
# Edit .env file
nano .env

# Add these variables:
HOST=0.0.0.0
PORT=1337
APP_KEYS=generate-random-key-here
API_TOKEN_SALT=generate-random-salt-here
ADMIN_JWT_SECRET=generate-jwt-secret-here
TRANSFER_TOKEN_SALT=generate-transfer-salt-here
JWT_SECRET=generate-jwt-secret-here

DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=church_cms
DATABASE_USERNAME=your-username
DATABASE_PASSWORD=

NODE_ENV=production
```

#### **Generate Random Keys:**
```bash
# Generate secure random keys (run 5 times for different keys)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### **Step 6: Configure Nginx**

```bash
# Create Nginx configuration
sudo nano /opt/homebrew/etc/nginx/nginx.conf
```

Add this configuration:
```nginx
events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    # Your main website
    server {
        listen 80;
        server_name nmcky.org www.nmcky.org;
        root /usr/local/var/www/church-website;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }

        # Serve your static website files
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Strapi CMS
    server {
        listen 80;
        server_name cms.nmcky.org;

        location / {
            proxy_pass http://127.0.0.1:1337;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
```

### **Step 7: SSL Certificate Setup**

```bash
# Install Certbot
brew install certbot

# Get SSL certificates
sudo certbot certonly --standalone -d nmcky.org -d www.nmcky.org -d cms.nmcky.org

# Update Nginx config for HTTPS
sudo nano /opt/homebrew/etc/nginx/nginx.conf
```

Add HTTPS configuration:
```nginx
# Add to your nginx.conf (replace the server blocks)

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name nmcky.org www.nmcky.org cms.nmcky.org;
    return 301 https://$server_name$request_uri;
}

# Main website HTTPS
server {
    listen 443 ssl;
    server_name nmcky.org www.nmcky.org;

    ssl_certificate /etc/letsencrypt/live/nmcky.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nmcky.org/privkey.pem;

    root /usr/local/var/www/church-website;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

# CMS HTTPS
server {
    listen 443 ssl;
    server_name cms.nmcky.org;

    ssl_certificate /etc/letsencrypt/live/nmcky.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nmcky.org/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:1337;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### **Step 8: Start Services**

```bash
# Start PostgreSQL
brew services start postgresql@14

# Build and start Strapi
cd /usr/local/var/www/church-cms
npm install
npm run build

# Start with PM2
pm2 start npm --name "church-cms" -- start
pm2 save

# Start Nginx
sudo brew services start nginx

# Make services start on boot
# Create LaunchDaemon for PM2
sudo nano /Library/LaunchDaemons/pm2.plist
```

Add PM2 LaunchDaemon:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>pm2</string>
    <key>ProgramArguments</key>
    <array>
        <string>/opt/homebrew/bin/pm2</string>
        <string>resurrect</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>UserName</key>
    <string>your-username</string>
</dict>
</plist>
```

## 🔄 Migration from Dreamhost WordPress

### **Step 1: Export WordPress Content**
1. **Login to WordPress admin** on current site
2. **Go to Tools → Export**
3. **Download All Content** as XML file
4. **Download Media Files** (wp-content/uploads folder)

### **Step 2: Content Migration Strategy**

#### **Option A: Manual Migration (Recommended)**
```bash
# Create content in Strapi based on your WordPress posts/pages
# Benefits: Clean slate, better organization, CMS designed for volunteers
# Time: 2-3 hours for typical church site
```

#### **Option B: Automated Migration**
```bash
# Use WordPress to Strapi migration tools
npm install @strapi/migration-tool
# More complex but faster for large sites
```

### **Step 3: Update Your Beautiful Website**
```bash
# Copy your current website files to:
/usr/local/var/www/church-website/

# Update JavaScript to use local CMS:
const churchCMS = new ChurchCMS('https://cms.nmcky.org/api');
```

## 📊 Cost Comparison

### **Current Dreamhost Costs (Annual):**
- Hosting: ~$120/year
- Domain: ~$15/year
- **Total: ~$135/year**

### **Self-Hosted Setup:**
#### **One-time Hardware:**
- Mac Mini M2 (16GB/512GB): $999
- External backup drive: $100
- UPS: $200
- **Total Hardware: $1,299**

#### **Ongoing Costs (Annual):**
- Static IP: $60-180/year
- Domain: $15/year
- Electricity: ~$50/year (Mac Mini is very efficient)
- **Total Annual: $125-245/year**

### **Break-even Analysis:**
- **Year 1:** $1,299 + $185 = $1,484 (higher due to hardware)
- **Year 2+:** $185/year (much cheaper than hosting)
- **Break-even:** ~10-12 months

## 🛡️ Security & Backup Strategy

### **Automated Backups:**
```bash
# Create backup script
nano ~/backup-church.sh
```

Add backup script:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/Volumes/Backup/ChurchBackups"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Backup database
pg_dump church_cms > "$BACKUP_DIR/database_$DATE.sql"

# Backup website files
tar -czf "$BACKUP_DIR/website_$DATE.tar.gz" /usr/local/var/www/church-website

# Backup CMS uploads
tar -czf "$BACKUP_DIR/cms_uploads_$DATE.tar.gz" /usr/local/var/www/church-cms/public/uploads

# Keep only last 30 days
find "$BACKUP_DIR" -name "*.sql" -mtime +30 -delete
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: $DATE"
```

```bash
# Make executable
chmod +x ~/backup-church.sh

# Add to crontab (daily backup at 2 AM)
crontab -e
# Add: 0 2 * * * /Users/yourusername/backup-church.sh
```

### **Security Measures:**
1. **Firewall:** macOS built-in firewall enabled
2. **Regular Updates:** Auto-update macOS and applications
3. **SSH Key Authentication:** Disable password authentication
4. **Fail2Ban equivalent:** Use built-in security features
5. **Regular Security Audits:** Monthly security checks

## 🔧 Remote Management Setup

### **VPN Access (Recommended):**
```bash
# Set up Tailscale (easy VPN solution)
brew install --cask tailscale

# Or use macOS built-in VPN server
# System Settings → General → Sharing → Content Caching
```

### **Remote Monitoring:**
- **Uptime Monitoring:** Use UptimeRobot (free)
- **Performance Monitoring:** Use built-in Activity Monitor
- **Log Monitoring:** Console app for system logs

## 🚀 Performance Optimization

### **Mac Mini Performance Tips:**
```bash
# Optimize for server use
sudo pmset -c sleep 0
sudo pmset -c disksleep 0
sudo pmset -c displaysleep 10

# Increase file limits
echo 'kern.maxfiles=65536' | sudo tee -a /etc/sysctl.conf
echo 'kern.maxfilesperproc=32768' | sudo tee -a /etc/sysctl.conf
```

### **Nginx Optimization:**
```nginx
# Add to nginx.conf http block
gzip on;
gzip_types text/css application/javascript image/svg+xml;
gzip_min_length 1000;

# Enable caching
proxy_cache_path /tmp/nginx_cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m;
```

## 📱 Volunteer Training

### **Simple Access for Volunteers:**
1. **Give them:** `https://cms.nmcky.org/admin`
2. **Their login:** Email + password you create
3. **Simple guide:** "Click the content type, edit, save, publish"

### **Volunteer Capabilities:**
- ✅ Update service times
- ✅ Add/edit events
- ✅ Update staff information
- ✅ Post announcements
- ✅ Upload photos
- ✅ Edit ministry descriptions
- ❌ Cannot break the website design
- ❌ Cannot access server settings

## 🎯 Migration Timeline

### **Week 1: Hardware Setup**
- Order Mac Mini and accessories
- Set up hardware and basic macOS

### **Week 2: Software Installation**
- Install all software components
- Configure network and security

### **Week 3: Content Migration**
- Set up Strapi with content types
- Migrate content from WordPress
- Test CMS functionality

### **Week 4: Go Live**
- Update DNS records
- Test everything thoroughly
- Train volunteers
- Celebrate your independence from hosting fees!

## 🆚 Mac Mini vs Windows Server

### **Mac Mini Advantages:**
- ✅ You develop on Mac (familiar environment)
- ✅ Lower power consumption
- ✅ Silent operation
- ✅ Better for church office environment
- ✅ Excellent Unix/Linux compatibility
- ✅ Built-in backup solution (Time Machine)
- ✅ Remote Screen Sharing built-in

### **Windows Server Advantages:**
- ✅ You already own it (no hardware cost)
- ✅ Potentially more powerful hardware
- ✅ Familiar Windows environment
- ✅ IIS web server option
- ✅ Active Directory integration (if needed)

### **My Recommendation: Mac Mini**

**Why?**
1. **Perfect for your workflow** - you develop on Mac
2. **Lower maintenance** - macOS is more stable for web servers
3. **Better volunteer experience** - web-based CMS works great
4. **Future-proof** - M2 chip will last 5+ years
5. **Professional setup** - looks good in church office

**Total Investment:** ~$1,300 one-time + $15/month ongoing
**Payback Period:** 12 months
**Long-term savings:** $100+ per year vs hosting