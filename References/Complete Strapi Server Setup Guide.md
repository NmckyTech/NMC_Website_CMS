# Complete Strapi Server Setup Guide

## 🌐 Server Hosting Options

### **Option 1: DigitalOcean (Recommended)**
- **Cost:** $12/month for 2GB RAM droplet
- **Pros:** Simple, reliable, great documentation
- **Setup:** One-click Ubuntu installation

### **Option 2: Linode**
- **Cost:** $12/month for 2GB RAM instance
- **Pros:** Excellent performance, good support

### **Option 3: AWS EC2**
- **Cost:** ~$15/month (t3.small instance)
- **Pros:** Highly scalable, many services
- **Cons:** More complex setup

### **Option 4: Self-Hosted (Advanced)**
- **Cost:** Hardware + electricity
- **Pros:** Complete control, one-time cost
- **Cons:** Requires technical expertise

## 🚀 Step-by-Step Server Setup

### **Step 1: Create Your Server**

#### For DigitalOcean:
1. Go to [DigitalOcean](https://digitalocean.com)
2. Create account and add payment method
3. Click "Create Droplet"
4. Choose:
   - **Image:** Ubuntu 22.04 LTS
   - **Plan:** Basic ($12/month, 2GB RAM)
   - **Region:** Closest to your location
   - **Authentication:** SSH Key (recommended) or Password
5. Click "Create Droplet"
6. Note your server's IP address

### **Step 2: Connect to Your Server**

#### On Windows (using PuTTY):
```bash
# Download PuTTY from putty.org
# Enter your server IP address
# Port: 22
# Connection type: SSH
# Click "Open" and login as root
```

#### On Mac/Linux:
```bash
# Open Terminal
ssh root@YOUR_SERVER_IP
# Enter your password when prompted
```

### **Step 3: Update Your Server**
```bash
# Update package list
apt update

# Upgrade all packages
apt upgrade -y

# Install essential packages
apt install -y curl wget git unzip software-properties-common
```

### **Step 4: Install Node.js**
```bash
# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -

# Install Node.js
apt install -y nodejs

# Verify installation
node --version  # Should show v18.x.x
npm --version   # Should show 9.x.x or higher
```

### **Step 5: Install PostgreSQL Database**
```bash
# Install PostgreSQL
apt install -y postgresql postgresql-contrib

# Start PostgreSQL service
systemctl start postgresql
systemctl enable postgresql

# Create database and user for Strapi
sudo -u postgres psql

# In PostgreSQL prompt:
CREATE DATABASE church_cms;
CREATE USER strapiuser WITH ENCRYPTED PASSWORD 'your_strong_password_here';
GRANT ALL PRIVILEGES ON DATABASE church_cms TO strapiuser;
\q
```

### **Step 6: Install Strapi**
```bash
# Create directory for your CMS
mkdir /var/www
cd /var/www

# Install Strapi (this takes 5-10 minutes)
npx create-strapi-app@latest church-cms --quickstart --no-run

# Navigate to project directory
cd church-cms
```

### **Step 7: Configure Database Connection**
```bash
# Create production database config
nano config/database.js
```

Add this content:
```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'church_cms'),
      user: env('DATABASE_USERNAME', 'strapiuser'),
      password: env('DATABASE_PASSWORD', 'your_strong_password_here'),
      ssl: false,
    },
  },
});
```

### **Step 8: Configure Environment Variables**
```bash
# Create environment file
nano .env
```

Add this content:
```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-key-here,another-key-here
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=church_cms
DATABASE_USERNAME=strapiuser
DATABASE_PASSWORD=your_strong_password_here

NODE_ENV=production
```

**Generate secure keys:**
```bash
# Generate random keys (run this 5 times for 5 different keys)
openssl rand -base64 32
```

### **Step 9: Install PM2 (Process Manager)**
```bash
# Install PM2 globally
npm install -g pm2

# Install dependencies
npm install

# Build Strapi for production
npm run build

# Start Strapi with PM2
pm2 start npm --name "church-cms" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot
pm2 startup
# Follow the command it gives you (usually starts with 'sudo env...')
```

### **Step 10: Install and Configure Nginx**
```bash
# Install Nginx
apt install -y nginx

# Create Nginx configuration
nano /etc/nginx/sites-available/church-cms
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

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
```

```bash
# Enable the site
ln -s /etc/nginx/sites-available/church-cms /etc/nginx/sites-enabled/

# Remove default site
rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
systemctl enable nginx
```

### **Step 11: Install SSL Certificate (Free with Let's Encrypt)**
```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate (replace with your domain)
certbot --nginx -d your-domain.com -d www.your-domain.com

# Test auto-renewal
certbot renew --dry-run
```

### **Step 12: Configure Firewall**
```bash
# Install UFW firewall
apt install -y ufw

# Set default policies
ufw default deny incoming
ufw default allow outgoing

# Allow SSH (important - don't get locked out!)
ufw allow ssh

# Allow HTTP and HTTPS
ufw allow 'Nginx Full'

# Enable firewall
ufw enable

# Check status
ufw status
```

## 🎯 Access Your Strapi Admin

1. Open your browser and go to `https://your-domain.com/admin`
2. Create your super admin account (this will be the Pastor's account)
3. You should see the Strapi admin dashboard!

## 📝 Create Content Types

Now let's set up the content structure for your church:

### **Content Type: Heroes (Homepage Banner)**
1. Click "Content-Type Builder" in the left menu
2. Click "Create new collection type"
3. Name: `hero` (singular), `heroes` (plural)
4. Add these fields:
   - `title` - Long text (required)
   - `subtitle` - Text
   - `background_image` - Media (Single media)
   - `cta_primary_text` - Text
   - `cta_primary_link` - Text
   - `cta_secondary_text` - Text
   - `cta_secondary_link` - Text
5. Click "Save" and "Restart" when prompted

### **Content Type: Services (Service Times)**
1. Create new collection type: `service`/`services`
2. Add fields:
   - `service_name` - Text (required) - e.g., "Traditional Worship"
   - `time` - Text (required) - e.g., "8:30 AM"
   - `description` - Text - e.g., "Classic hymns and liturgy"
   - `location` - Text - e.g., "Main Sanctuary"
   - `is_active` - Boolean (default: true)
   - `order` - Number - for sorting services
3. Save and restart

### **Content Type: Staff Members**
1. Create: `staff-member`/`staff-members`
2. Add fields:
   - `name` - Text (required)
   - `title` - Text (required) - e.g., "Senior Pastor"
   - `email` - Email
   - `phone` - Text
   - `bio` - Rich text
   - `photo` - Media (Single media)
   - `order` - Number - for display order
   - `is_visible` - Boolean (default: true)
3. Save and restart

### **Content Type: Events**
1. Create: `event`/`events`
2. Add fields:
   - `title` - Text (required)
   - `description` - Rich text (required)
   - `date` - Date (required)
   - `time` - Text
   - `location` - Text
   - `image` - Media (Single media)
   - `registration_link` - Text
   - `is_featured` - Boolean
   - `contact_person` - Text
   - `contact_email` - Email
3. Save and restart

### **Content Type: Sermons**
1. Create: `sermon`/`sermons`
2. Add fields:
   - `title` - Text (required)
   - `date` - Date (required)
   - `pastor` - Text
   - `scripture` - Text
   - `description` - Rich text
   - `audio_link` - Text
   - `video_link` - Text
   - `sermon_notes` - Rich text
   - `image` - Media (Single media)
   - `is_featured` - Boolean
3. Save and restart

### **Content Type: Ministries**
1. Create: `ministry`/`ministries`
2. Add fields:
   - `name` - Text (required)
   - `description` - Rich text (required)
   - `leader` - Text
   - `meeting_time` - Text
   - `contact_email` - Email
   - `contact_phone` - Text
   - `image` - Media (Single media)
   - `category` - Enumeration with values:
     - Kids
     - Students
     - Young Adults
     - Adults
     - Special Groups
     - Local Missions
     - Global Missions
   - `is_active` - Boolean (default: true)
3. Save and restart

### **Content Type: Announcements**
1. Create: `announcement`/`announcements`
2. Add fields:
   - `title` - Text (required)
   - `content` - Rich text (required)
   - `date` - DateTime (required)
   - `expiration_date` - DateTime
   - `priority` - Number (1-5, 5 being highest)
   - `show_on_homepage` - Boolean
   - `category` - Enumeration:
     - General
     - Urgent
     - Event
     - Ministry
3. Save and restart

## 👥 Set Up User Roles

### **Role: Pastor (Super Admin)**
- Already created when you first accessed admin
- Has access to everything

### **Role: Church Admin**
1. Go to Settings → Administration Panel → Roles
2. Click "Create new role"
3. Name: "Church Admin"
4. Permissions:
   - All content types: Create, Read, Update, Delete, Publish
   - Media Library: Full access
   - Cannot manage users or settings
5. Save

### **Role: Volunteer Editor**
1. Create new role: "Volunteer Editor"
2. Permissions:
   - Events: Create, Read, Update (no delete/publish)
   - Announcements: Create, Read, Update
   - Services: Read, Update
   - Staff Members: Read, Update
   - Media Library: Upload, Read
3. Save

### **Create User Accounts**
1. Go to Settings → Administration Panel → Users
2. Click "Invite user"
3. Enter email and select role
4. User will receive email to set password

## 🔐 Configure API Permissions

1. Go to Settings → Users & Permissions Plugin → Roles
2. Click "Public" role
3. Enable these permissions for your website to access:
   - Heroes: find, findOne
   - Services: find, findOne
   - Staff Members: find, findOne
   - Events: find, findOne
   - Sermons: find, findOne
   - Ministries: find, findOne
   - Announcements: find, findOne
4. Save

## 📊 Test Your Setup

1. **Create Test Content:**
   - Add a hero entry
   - Add a few services
   - Add staff members
   - Add an event

2. **Test API Endpoints:**
   ```bash
   # Test in browser or with curl
   https://your-domain.com/api/heroes
   https://your-domain.com/api/services
   https://your-domain.com/api/staff-members
   ```

3. **Should return JSON data like:**
   ```json
   {
     "data": [
       {
         "id": 1,
         "attributes": {
           "title": "Your Hero Title",
           "createdAt": "2024-01-01T00:00:00.000Z"
         }
       }
     ]
   }
   ```

## 🔄 Connect to Your Website

Now update your website's JavaScript to use the CMS data:

```javascript
// Update the base URL in your website's JavaScript
const churchCMS = new ChurchCMS('https://your-domain.com/api');

// The rest of the integration code I provided earlier will work!
```

## 🚨 Important Security Notes

1. **Regular Backups:**
   ```bash
   # Create backup script
   nano /root/backup-church-cms.sh
   ```

   Add:
   ```bash
   #!/bin/bash
   DATE=$(date +%Y%m%d_%H%M%S)

   # Backup database
   sudo -u postgres pg_dump church_cms > /backups/db_$DATE.sql

   # Backup uploads folder
   tar -czf /backups/uploads_$DATE.tar.gz /var/www/church-cms/public/uploads

   # Keep only last 30 days of backups
   find /backups -name "*.sql" -mtime +30 -delete
   find /backups -name "*.tar.gz" -mtime +30 -delete
   ```

   ```bash
   # Make executable
   chmod +x /root/backup-church-cms.sh

   # Add to crontab (daily backup at 2 AM)
   crontab -e
   # Add: 0 2 * * * /root/backup-church-cms.sh
   ```

2. **Regular Updates:**
   ```bash
   # Update system monthly
   apt update && apt upgrade -y

   # Update Strapi (be careful, test first!)
   cd /var/www/church-cms
   npm update
   npm run build
   pm2 restart church-cms
   ```

## 💰 Total Monthly Cost Breakdown

- **DigitalOcean Droplet:** $12/month
- **Domain Name:** ~$1/month ($12/year)
- **SSL Certificate:** FREE (Let's Encrypt)
- **Total:** ~$13/month

## 🎉 You're Done!

Your church now has:
- ✅ Professional CMS for volunteers to edit content
- ✅ Secure user management with roles
- ✅ SSL-encrypted website
- ✅ Automatic backups
- ✅ Content that updates your beautiful website automatically

**Next Steps:**
1. Train your volunteers using the admin interface
2. Start adding your real church content
3. Update your main website to pull from the CMS
4. Set up regular backups and monitoring

Need help with any of these steps? I can provide more detailed guidance for any part of this process!

🎯 Quick Start Summary
Total Setup Time: ~3-4 hours
Monthly Cost: ~$13 (DigitalOcean + domain)
Technical Level: Intermediate (I can help with any step!)
🔧 What You Need Right Now:

Choose a domain name for your CMS (e.g., cms.nmcky.org or admin.nmcky.org)
Sign up for DigitalOcean (or preferred hosting)
Follow the step-by-step guide above

🚀 Alternative: Quick Start with DigitalOcean App Platform
If the server setup seems overwhelming, DigitalOcean also offers a simpler "App Platform" option:
Pros:

No server management required
Automatic SSL and domains
Easy deployment from GitHub
Built-in monitoring

Cons:

Slightly more expensive (~$25/month)
Less control over server

