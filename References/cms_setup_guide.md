# Complete CMS Setup Guide for Church Website

## 🎯 Recommended Solutions

### **Option 1: Strapi (Self-Hosted) - BEST FOR CHURCHES**
**Perfect for:** Full control, free hosting, technical volunteers available

**Pros:**
- ✅ Completely free and open source
- ✅ User-friendly admin interface
- ✅ Role-based permissions (Pastor, Admin, Volunteer)
- ✅ Self-hosted = full control
- ✅ Easy content editing for volunteers
- ✅ Built-in user management

**Cons:**
- ❌ Requires server setup
- ❌ Some technical knowledge needed initially

---

### **Option 2: Sanity.io (Cloud-Hosted) - EASIEST SETUP**
**Perfect for:** Quick setup, minimal technical requirements

**Pros:**
- ✅ Free tier (3 users, 10GB)
- ✅ Extremely user-friendly
- ✅ No server maintenance
- ✅ Real-time collaboration
- ✅ Excellent documentation

**Cons:**
- ❌ Monthly costs for more users ($20/month for unlimited)
- ❌ Less customization than self-hosted

---

### **Option 3: WordPress (Traditional CMS)**
**Perfect for:** Churches wanting a complete website rebuild

**Pros:**
- ✅ Many church-specific plugins
- ✅ Huge community support
- ✅ Themes designed for churches
- ✅ Familiar to many volunteers

**Cons:**
- ❌ Would require rebuilding your beautiful current design
- ❌ More complex than needed for your use case

---

## 🚀 Quick Setup: Strapi (Recommended)

### Step 1: Install Strapi
```bash
# On your server or local machine
npx create-strapi-app@latest church-cms --quickstart

# Navigate to the project
cd church-cms

# Start the development server
npm run develop
```

### Step 2: Access Admin Panel
1. Open `http://localhost:1337/admin`
2. Create your super admin account (Pastor)
3. Set up the content types (see below)

### Step 3: Create Content Types

#### **Content Type: Heroes**
```javascript
// Fields for hero section
{
  title: "Text (Long text)",
  subtitle: "Text", 
  background_image: "Media (Single media)",
  cta_primary_text: "Text",
  cta_primary_link: "Text",
  cta_secondary_text: "Text", 
  cta_secondary_link: "Text"
}
```

#### **Content Type: Services**
```javascript
// Fields for service times
{
  service_name: "Text (required)",
  time: "Text (required)",
  description: "Text",
  location: "Text",
  is_active: "Boolean (default: true)"
}
```

#### **Content Type: Staff Members**
```javascript
// Fields for staff directory
{
  name: "Text (required)",
  title: "Text (required)",
  email: "Email",
  phone: "Text",
  bio: "Rich text",
  photo: "Media (Single media)",
  order: "Number"
}
```

#### **Content Type: Events**
```javascript
// Fields for church events
{
  title: "Text (required)",
  description: "Rich text",
  date: "Date (required)",
  time: "Text",
  location: "Text",
  image: "Media (Single media)",
  registration_link: "Text",
  is_featured: "Boolean"
}
```

#### **Content Type: Sermons**
```javascript
// Fields for sermons
{
  title: "Text (required)",
  date: "Date (required)",
  pastor: "Text",
  scripture: "Text",
  description: "Rich text",
  audio_link: "Text",
  video_link: "Text",
  notes: "Rich text",
  image: "Media (Single media)"
}
```

#### **Content Type: Ministries**
```javascript
// Fields for ministry information
{
  name: "Text (required)",
  description: "Rich text (required)",
  leader: "Text",
  meeting_time: "Text",
  contact_email: "Email",
  contact_phone: "Text",
  image: "Media (Single media)",
  category: "Enumeration (Kids, Students, Adults, Special Groups, Missions)"
}
```

#### **Content Type: Announcements**
```javascript
// Fields for church announcements
{
  title: "Text (required)",
  content: "Rich text (required)",
  date: "Date (required)",
  expiration_date: "Date",
  priority: "Number (1-5, 5 being highest)",
  show_on_homepage: "Boolean"
}
```

### Step 4: Set Up User Roles

#### **Role: Pastor**
- Full access to all content
- Can manage users
- Can publish/unpublish content

#### **Role: Church Admin**
- Can edit most content
- Cannot manage users
- Can publish content

#### **Role: Volunteer Editor**
- Can edit assigned content areas
- Cannot publish (drafts only)
- Limited access

### Step 5: Configure API Permissions
1. Go to Settings → Roles → Public
2. Enable permissions for:
   - Heroes: find, findOne
   - Services: find, findOne
   - Staff Members: find, findOne
   - Events: find, findOne
   - Sermons: find, findOne
   - Ministries: find, findOne
   - Announcements: find, findOne

---

## 🔧 Integration with Your Website

### Method 1: Direct API Integration (Current Approach)
Use the JavaScript code provided above to fetch content directly from Strapi's REST API.

### Method 2: Static Site Generation
```bash
# Generate static files from CMS content
# Run this script to rebuild your site when content changes

#!/bin/bash
echo "Fetching latest content from CMS..."
node scripts/build-static-content.js
echo "Content updated successfully!"
```

### Method 3: Webhook-Based Updates
Set up Strapi webhooks to automatically update your website when content changes:

```javascript
// webhook-handler.js
const express = require('express');
const { exec } = require('child_process');
const app = express();

app.post('/webhook/content-updated', (req, res) => {
  console.log('Content updated, rebuilding site...');
  
  // Trigger your site rebuild process
  exec('node scripts/update-content.js', (error, stdout, stderr) => {
    if (error) {
      console.error('Error rebuilding site:', error);
      return res.status(500).send('Error');
    }
    
    console.log('Site rebuilt successfully');
    res.send('OK');
  });
});

app.listen(3001, () => {
  console.log('Webhook server running on port 3001');
});
```

---

## 👥 Training Volunteers

### Create a Simple Guide for Volunteers:

#### **"How to Update Church Website Content"**

1. **Login to CMS**
   - Go to `https://your-church-cms.com/admin`
   - Enter your email and password
   - Click "Sign In"

2. **Update Service Times**
   - Click "Services" in the left menu
   - Click on the service you want to edit
   - Change the time or description
   - Click "Save" then "Publish"

3. **Add New Event**
   - Click "Events" in the left menu
   - Click "Create new entry"
   - Fill in all the details
   - Upload an image if you have one
   - Click "Save" then "Publish"

4. **Update Staff Information**
   - Click "Staff Members" in the left menu
   - Find the person to update
   - Edit their information
   - Upload a new photo if needed
   - Click "Save" then "Publish"

5. **Add Announcement**
   - Click "Announcements" in the left menu
   - Click "Create new entry"
   - Write your announcement
   - Set priority (1-5, 5 being most important)
   - Choose expiration date
   - Click "Save" then "Publish"

---

## 💰 Cost Breakdown

### **Self-Hosted Strapi (Recommended)**
- **CMS Software:** FREE
- **Hosting:** $10-20/month (DigitalOcean, Linode)
- **Domain:** $12/year
- **Total:** ~$15/month

### **Sanity.io (Cloud)**
- **Free Tier:** 3 editors, 10GB storage
- **Paid Plan:** $20/month for unlimited editors
- **Total:** $0-20/month

### **WordPress**
- **Hosting:** $15-30/month
- **Premium Theme:** $50-100 one-time
- **Total:** $15-30/month + setup costs

---

## 🛡️ Security Best Practices

### For Strapi Setup:
1. **Change Default Ports**
2. **Use Strong Passwords**
3. **Enable SSL/HTTPS**
4. **Regular Backups**
5. **Update Regularly**
6. **Limit User Permissions**

### Sample nginx config:
```nginx
server {
    listen 80;
    server_name your-church-cms.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name your-church-cms.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://localhost:1337;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 📱 Mobile Admin App

Both Strapi and Sanity offer mobile-responsive admin interfaces, so volunteers can update content from their phones!

---

## 🚀 Next Steps

1. **Choose your preferred CMS option**
2. **Set up the CMS (I can help with specific steps)**
3. **Create content types based on your needs**
4. **Set up user accounts for volunteers**
5. **Integrate with your existing website**
6. **Train your volunteers**
7. **Set up regular backups**

Would you like me to help you with the specific setup process for any of these options?