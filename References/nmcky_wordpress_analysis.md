# NMCKY WordPress Setup Analysis & Migration Plan

## 🎯 Current WordPress Stack Analysis

### **Theme: Astra (Excellent Choice!)**
```bash
# Astra benefits for migration:
✅ Clean, semantic HTML structure
✅ Performance-optimized (good for content export)
✅ Standard WordPress practices (easier migration)
✅ Minimal custom post types (cleaner export)
✅ Well-documented customizations

# What this means for migration:
- Content structure will be clean and well-organized
- Custom CSS likely minimal and transferable
- Page layouts should export cleanly
- Minimal theme-specific dependencies
```

### **Critical Plugins Analysis:**

#### **1. Spectra (Gutenberg Blocks)**
```bash
Purpose: Advanced Gutenberg blocks and page building
Migration Impact: HIGH
Current Usage: Likely page layouts and design elements

Migration Strategy:
□ Document which pages use Spectra blocks
□ Screenshot Spectra-designed layouts
□ Identify custom block configurations
□ Plan recreation in new CMS (manual rebuild)
□ Priority: Recreate layouts in pure HTML/CSS

Strapi Equivalent: Custom HTML components + Rich text editor
Timeline: October Week 2 (layout recreation)
```

#### **2. Pretty Google Calendar**
```bash
Purpose: Embed Google Calendar on website
Migration Impact: MEDIUM
Current Usage: Likely displays church events calendar

Migration Strategy:
□ Document current calendar embed settings
□ Note which Google Calendar is connected
□ Plan iframe or API integration for new site
□ Consider enhanced event management in Strapi

Strapi Equivalent: Google Calendar iframe + Strapi Events
Enhancement: Native event management + Google Calendar sync
Timeline: October Week 3 (after basic content migration)
```

#### **3. Bold Grid Easy SEO**
```bash
Purpose: SEO optimization and meta tags
Migration Impact: HIGH (SEO preservation critical)
Current Usage: Meta titles, descriptions, SEO settings

Migration Strategy:
□ Export all SEO settings and meta data
□ Document current Google Analytics setup
□ Note XML sitemap configuration
□ Plan SEO maintenance during migration

Strapi Equivalent: Custom SEO fields + Nginx meta tags
Timeline: October Week 1 (preserve SEO during launch)
```

### **Utility Plugins Assessment:**

#### **4. NGInx Helper**
```bash
Purpose: Nginx caching optimization
Migration Impact: NONE (server-level, not content)
New Setup: Direct Nginx configuration on Mac Mini
Action: Document any custom cache rules for recreation
```

#### **5. Ottokit**
```bash
Purpose: Unknown - needs investigation
Action Required: 
□ Check plugin usage in WordPress admin
□ Document any active configurations
□ Determine if critical for operation
```

#### **6. Simple iFrame**
```bash
Purpose: Embed external content via iframes
Migration Impact: LOW to MEDIUM
Action Required:
□ Identify all iframe embeds on site
□ Document iframe sources and settings
□ Plan iframe recreation in new HTML structure
```

#### **7. Starter Templates**
```bash
Purpose: Astra theme starter templates
Migration Impact: NONE (design-time only)
Action: No migration needed - used during initial setup
```

#### **8. WP Mail SMTP**
```bash
Purpose: Reliable email sending configuration
Migration Impact: HIGH (forms and notifications)
Current Usage: Contact forms, notifications

Migration Strategy:
□ Document current SMTP settings (host, port, auth)
□ Export email configuration
□ Plan recreation on Mac Mini server
□ Consider enhanced email system

New Setup: Mac Mini SMTP + SendGrid/Mailgun for reliability
Timeline: August Week 3 (during server setup)
```

#### **9. WPForms Lite**
```bash
Purpose: Contact and prayer request forms
Migration Impact: HIGH (critical functionality)
Current Usage: Contact form, prayer requests

Migration Strategy:
□ Export all form configurations
□ Document form fields and validation
□ Screenshot current form layouts
□ Plan enhanced forms in new system

Strapi Equivalent: Custom form API + enhanced frontend forms
Enhancement: Better spam protection, email integration
Timeline: October Week 1 (critical functionality)
```

## 📹 Sermon Management Analysis

### **Current Sermon Workflow:**
```bash
# Current Process:
1. Live stream to YouTube during service
2. Extract/edit audio for PodBean podcast
3. Create thumbnail links on Messages page
4. Link to full YouTube service

# Content Structure:
- YouTube: Full service videos
- PodBean: Audio-only sermon extracts
- Website: Thumbnail gallery with links
- Personal tools: Audio editing workflow

# Migration Advantages:
□ Keep existing YouTube/PodBean hosting (cost-effective)
□ Enhance website presentation with CMS
□ Add sermon series organization
□ Improve search and discovery
□ Add scripture references and notes
```

### **Enhanced Sermon Management in Strapi:**
```javascript
// Proposed Strapi Sermon Content Type:
{
  title: "Sermon Title",
  date: "2024-07-28",
  pastor: "Rev. Tim Johnson",
  scripture: "1 Timothy 2:1-6",
  series: "Faith and Works", 
  description: "Rich text sermon summary",
  youtube_url: "https://youtube.com/watch?v=...",
  podcast_url: "https://podbean.com/...",
  thumbnail: "Auto-generated from YouTube API",
  notes: "Downloadable PDF sermon notes",
  tags: ["Faith", "Prayer", "Community"],
  is_featured: true
}

// Benefits:
✅ Automatic thumbnail extraction from YouTube
✅ Sermon series organization
✅ Advanced search by scripture/topic
✅ Featured sermon rotation
✅ RSS feed generation for podcasts
✅ Mobile-optimized sermon browser
```

## 📝 Forms & Communication Strategy

### **Current Forms Analysis:**
```bash
# Existing Forms (WPForms Lite):
1. Contact Form:
   - Name, Email, Subject, Message
   - Current destination: nmckyoffice@gmail.com
   - Spam protection: Basic

2. Prayer Request Form:
   - Name, Email, Prayer Request
   - Privacy options needed
   - Pastoral notification system

# Missing Forms (Opportunities):
3. Volunteer Signup:
   - Ministry area selection
   - Skills/availability
   - Background check coordination
   - Training scheduling

4. Event Registration:
   - Event-specific sign-ups
   - Capacity management
   - Automated confirmations
```

### **Enhanced Forms in New System:**
```javascript
// Strapi Form Management:
{
  // Contact Form Enhancement:
  contact: {
    fields: ["name", "email", "phone", "subject", "message", "preferred_contact"],
    notifications: ["office", "pastor", "ministry_leader"],
    auto_response: true,
    spam_protection: "advanced",
    follow_up_tracking: true
  },

  // Prayer Request System:
  prayer: {
    fields: ["name", "email", "request", "privacy_level", "follow_up"],
    privacy: ["public", "pastoral_only", "anonymous"],
    notifications: ["prayer_team", "pastor"],
    care_tracking: true
  },

  // Volunteer Management:
  volunteer: {
    fields: ["personal_info", "skills", "availability", "interests"],
    ministry_matching: true,
    background_check: "integration_ready",
    training_coordination: true,
    scheduling_integration: true
  }
}
```

## 👥 Staff Directory Enhancement

### **Current Staff Setup:**
```bash
# Single Staff Page Structure:
- Combined bios on one page
- Email links for contact
- Basic layout with photos

# Enhancement Opportunities:
□ Individual staff profile pages
□ Department/ministry organization
□ Contact form integration
□ Calendar availability
□ Bio + ministry focus
□ Office hours and contact preferences
```

### **Proposed Staff Directory in Strapi:**
```javascript
// Staff Member Content Type:
{
  name: "Rev. Tim Johnson",
  title: "Senior Pastor", 
  department: "Pastoral",
  email: "pastor@nmcky.org",
  phone: "859-885-4481 x101",
  bio: "Rich text biography",
  photo: "Professional headshot",
  ministry_focus: ["Preaching", "Counseling", "Leadership"],
  education: "Seminary information",
  years_at_church: 15,
  office_location: "Main Office",
  office_hours: "Mon-Thu 9-5, Fri 9-12",
  availability_calendar: "Google Calendar integration",
  is_visible: true,
  display_order: 1
}

// Benefits:
✅ Individual profile pages with SEO
✅ Department organization
✅ Contact form integration
✅ Mobile-optimized directory
✅ Easy volunteer updates
✅ Advanced search and filtering
```

## 🔄 Migration Priority & Timeline

### **Content Migration Phases:**

#### **Phase 1: Critical Structure (October Week 1)**
```bash
□ Homepage content and layout recreation
□ Navigation menu structure
□ Contact information and forms
□ Service times and location
□ Staff directory (basic version)
□ SEO settings preservation
□ SSL and security setup
```

#### **Phase 2: Core Content (October Week 2)**
```bash
□ All current page content
□ Recent sermon links (last 6 months)
□ Current events and announcements
□ Ministry descriptions
□ Enhanced contact forms
□ Basic prayer request system
```

#### **Phase 3: Enhanced Features (October Week 3)**
```bash
□ Full sermon archive organization
□ Google Calendar integration
□ Volunteer signup system
□ Enhanced staff profiles
□ Photo gallery organization
□ Advanced form features
```

#### **Phase 4: Optimization (October Week 4)**
```bash
□ Performance optimization
□ SEO enhancement
□ Analytics integration
□ User testing and feedback
□ Volunteer training completion
```

## 📊 WordPress Export Strategy

### **Critical Data to Export:**
```bash
# WordPress Admin Export Tasks:
□ Full content export (Tools → Export → All content)
□ WPForms export (WPForms → Tools → Export)
□ Astra theme customizer settings export
□ SEO plugin settings backup
□ Media library complete download
□ User accounts and roles documentation

# Manual Documentation Tasks:
□ Screenshot all pages (especially Spectra layouts)
□ Document Google Calendar integration details
□ Note all external iframe embeds
□ Export SMTP configuration settings
□ Document any custom CSS/code
□ List all external service integrations
```

### **Content Mapping Strategy:**
```bash
# WordPress → Strapi Content Mapping:

WordPress Pages → Strapi Pages:
- About → About (enhanced with rich content)
- Contact → Contact (with enhanced forms)
- Ministries → Ministry Directory (with categories)
- Messages → Sermon Archive (with series organization)

WordPress Posts → Strapi Announcements:
- News/Updates → Church Announcements
- Events → Event Management System

Custom Content → New Strapi Types:
- Staff bios → Staff Members collection
- Prayer requests → Prayer Management system
- Volunteer info → Volunteer Directory
```

## 🚀 Quick Win Opportunities

### **Immediate Improvements After Migration:**
```bash
# Volunteer Experience:
✅ Intuitive content editing (vs WordPress complexity)
✅ No risk of breaking site design
✅ Faster admin interface
✅ Mobile-friendly content management
✅ Real-time collaboration capabilities

# Congregation Experience:
✅ Faster page loading (Mac Mini vs shared hosting)
✅ Better mobile optimization
✅ Enhanced sermon discovery
✅ Improved event management
✅ Better contact/communication tools

# Technical Improvements:
✅ No plugin conflicts or updates
✅ Enhanced security (self-hosted)
✅ Complete backup control
✅ Advanced analytics capabilities
✅ Future expansion possibilities
```

## 📋 This Week's Action Items

### **WordPress Documentation (Priority Order):**
```bash
1. URGENT - Complete WordPress export:
   - Tools → Export → All content
   - Save as: nmcky_wordpress_[date].xml

2. URGENT - Download media library:
   - FTP/cPanel access to wp-content/uploads/
   - Create local backup of all images/files

3. HIGH - Screenshot documentation:
   - Every page on current site
   - Focus on Spectra-designed layouts
   - Note any special styling/formatting

4. HIGH - Forms documentation:
   - Export WPForms configurations
   - Test and document all form functionality
   - Note current email notification setup

5. MEDIUM - Plugin audit:
   - Deactivate plugins one by one to determine usage
   - Document settings for active/critical plugins
   - Note any custom configurations

6. MEDIUM - SEO documentation:
   - Export SEO plugin settings
   - Document current Google Analytics setup
   - Note any custom meta tags or configurations
```

### **Preparation for Mac Mini Setup (Wednesday):**
```bash
□ Complete WordPress documentation above
□ Prepare network rack space
□ Ensure static IP information is ready
□ Plan Wednesday setup schedule
□ Gather any additional network cables needed
```

This analysis shows you have a **clean, well-organized WordPress setup** that will migrate beautifully to Strapi. The Astra theme and minimal plugin usage actually makes this easier than most WordPress migrations!

**Your setup is ideal for migration because:**
- ✅ Clean theme with standard practices
- ✅ Minimal plugin dependencies
- ✅ Simple content structure
- ✅ No complex e-commerce or membership systems
- ✅ External sermon hosting (YouTube/PodBean) stays the same

**Ready to start the WordPress export this week?** 🚀