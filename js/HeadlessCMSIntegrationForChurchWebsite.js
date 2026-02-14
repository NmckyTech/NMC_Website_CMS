// HEADLESS CMS INTEGRATION FOR CHURCH WEBSITE
// This approach keeps your beautiful design while adding easy content management

// ==============================================
// OPTION 1A: STRAPI (Self-Hosted) - RECOMMENDED
// ==============================================

// Strapi CMS Integration
class ChurchCMS {
    constructor(baseURL) {
        this.baseURL = baseURL || 'http://localhost:1337/api';
        this.token = localStorage.getItem('cms_token');
    }

    // Authentication for church staff
    async login(email, password) {
        try {
            const response = await fetch(`${this.baseURL}/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: email,
                    password: password
                })
            });

            const data = await response.json();
            if (data.jwt) {
                this.token = data.jwt;
                localStorage.setItem('cms_token', this.token);
                return { success: true, user: data.user };
            }
            return { success: false, error: data.error };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Fetch dynamic content
    async getContent(contentType, populate = '') {
        try {
            const url = populate
                ? `${this.baseURL}/${contentType}?populate=${populate}`
                : `${this.baseURL}/${contentType}`;

            const response = await fetch(url, {
                headers: this.token ? {
                    'Authorization': `Bearer ${this.token}`
                } : {}
            });

            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error(`Error fetching ${contentType}:`, error);
            return null;
        }
    }

    // Update content (admin only)
    async updateContent(contentType, id, data) {
        try {
            const response = await fetch(`${this.baseURL}/${contentType}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({ data })
            });

            return await response.json();
        } catch (error) {
            console.error(`Error updating ${contentType}:`, error);
            return null;
        }
    }
}

// Initialize CMS
const churchCMS = new ChurchCMS('https://your-church-cms.com/api');

// ==============================================
// CONTENT STRUCTURE FOR CHURCH WEBSITE
// ==============================================

// Define content types that volunteers can edit
const contentTypes = {
    // Hero section content
    hero: {
        title: 'Hero Section',
        fields: ['title', 'subtitle', 'background_image', 'cta_buttons']
    },

    // Service times
    services: {
        title: 'Service Times',
        fields: ['service_name', 'time', 'description', 'location']
    },

    // Staff information
    staff: {
        title: 'Staff Directory',
        fields: ['name', 'title', 'email', 'phone', 'bio', 'photo']
    },

    // Events
    events: {
        title: 'Church Events',
        fields: ['title', 'date', 'time', 'location', 'description', 'image', 'registration_link']
    },

    // Sermons
    sermons: {
        title: 'Sermons',
        fields: ['title', 'date', 'pastor', 'scripture', 'audio_link', 'video_link', 'notes']
    },

    // Ministries
    ministries: {
        title: 'Ministry Information',
        fields: ['name', 'description', 'leader', 'meeting_time', 'contact_info', 'image']
    },

    // News/Announcements
    announcements: {
        title: 'Church News',
        fields: ['title', 'content', 'date', 'priority', 'expiration_date']
    },

    // General pages
    pages: {
        title: 'Website Pages',
        fields: ['title', 'slug', 'content', 'meta_description']
    }
};

// ==============================================
// DYNAMIC CONTENT LOADING
// ==============================================

// Load and display dynamic content
async function loadDynamicContent() {
    console.log('🔄 Loading dynamic content from CMS...');

    try {
        // Load hero content
        const heroContent = await churchCMS.getContent('heroes');
        if (heroContent && heroContent.length > 0) {
            updateHeroSection(heroContent[0]);
        }

        // Load service times
        const services = await churchCMS.getContent('services');
        if (services) {
            updateServiceTimes(services);
        }

        // Load latest sermon
        const sermons = await churchCMS.getContent('sermons', 'pastor');
        if (sermons && sermons.length > 0) {
            updateLatestSermon(sermons[0]);
        }

        // Load staff information
        const staff = await churchCMS.getContent('staff-members');
        if (staff) {
            updateStaffDirectory(staff);
        }

        // Load upcoming events
        const events = await churchCMS.getContent('events');
        if (events) {
            updateEventsSection(events);
        }

        // Load ministry information
        const ministries = await churchCMS.getContent('ministries');
        if (ministries) {
            updateMinistriesMenu(ministries);
        }

        // Load announcements
        const announcements = await churchCMS.getContent('announcements');
        if (announcements) {
            updateAnnouncements(announcements);
        }

        console.log('✅ Dynamic content loaded successfully');
    } catch (error) {
        console.error('❌ Error loading dynamic content:', error);
        // Fallback to static content
        console.log('🔄 Using static fallback content');
    }
}

// ==============================================
// CONTENT UPDATE FUNCTIONS
// ==============================================

function updateHeroSection(heroData) {
    const heroTitle = document.querySelector('.hero-title');
    const heroImage = document.querySelector('.hero-bg');

    if (heroTitle && heroData.attributes.title) {
        heroTitle.innerHTML = heroData.attributes.title;
    }

    if (heroImage && heroData.attributes.background_image?.data?.attributes?.url) {
        heroImage.style.backgroundImage = `url(${heroData.attributes.background_image.data.attributes.url})`;
    }
}

function updateServiceTimes(servicesData) {
    // Update service times in navigation dropdowns and footer
    serviceInfo.times = servicesData.map(service => ({
        service: service.attributes.service_name,
        time: service.attributes.time,
        description: service.attributes.description
    }));

    // Refresh any displayed service times
    const serviceElements = document.querySelectorAll('.service-time');
    serviceElements.forEach((element, index) => {
        if (serviceInfo.times[index]) {
            element.innerHTML = `
                <strong>${serviceInfo.times[index].service}</strong><br>
                ${serviceInfo.times[index].time}<br>
                <small>${serviceInfo.times[index].description}</small>
            `;
        }
    });
}

function updateLatestSermon(sermonData) {
    const sermonTitle = document.querySelector('.sermon-title');
    const sermonQuote = document.querySelector('.sermon-quote-text');
    const sermonRef = document.querySelector('.sermon-quote-ref');
    const sermonImage = document.querySelector('.sermon-image');

    if (sermonTitle) {
        sermonTitle.textContent = sermonData.attributes.title;
    }

    if (sermonQuote && sermonData.attributes.quote) {
        sermonQuote.textContent = sermonData.attributes.quote;
    }

    if (sermonRef && sermonData.attributes.scripture) {
        sermonRef.textContent = sermonData.attributes.scripture;
    }

    if (sermonImage && sermonData.attributes.image?.data?.attributes?.url) {
        sermonImage.src = sermonData.attributes.image.data.attributes.url;
    }
}

function updateStaffDirectory(staffData) {
    // Update staff information in modals and pages
    const staffContainer = document.querySelector('.staff-directory');
    if (staffContainer && staffData.length > 0) {
        staffContainer.innerHTML = staffData.map(member => `
            <div class="staff-member">
                <img src="${member.attributes.photo?.data?.attributes?.url || '/images/default-avatar.png'}"
                     alt="${member.attributes.name}" class="staff-photo">
                <h4>${member.attributes.name}</h4>
                <p class="staff-title">${member.attributes.title}</p>
                <p class="staff-contact">${member.attributes.email}</p>
                <div class="staff-bio">${member.attributes.bio || ''}</div>
            </div>
        `).join('');
    }
}

function updateEventsSection(eventsData) {
    // Filter upcoming events
    const now = new Date();
    const upcomingEvents = eventsData
        .filter(event => new Date(event.attributes.date) >= now)
        .sort((a, b) => new Date(a.attributes.date) - new Date(b.attributes.date))
        .slice(0, 5);

    const eventsContainer = document.querySelector('.events-list');
    if (eventsContainer && upcomingEvents.length > 0) {
        eventsContainer.innerHTML = upcomingEvents.map(event => `
            <div class="event-item">
                <div class="event-date">${formatDate(event.attributes.date)}</div>
                <div class="event-details">
                    <h4 class="event-title">${event.attributes.title}</h4>
                    <p class="event-time">${event.attributes.time}</p>
                    <p class="event-location">${event.attributes.location}</p>
                    <p class="event-description">${event.attributes.description}</p>
                </div>
            </div>
        `).join('');
    }
}

function updateMinistriesMenu(ministriesData) {
    // Update navigation menus with current ministry information
    if (ministriesData.length > 0) {
        // Group ministries by category
        const ministryGroups = {};
        ministriesData.forEach(ministry => {
            const category = ministry.attributes.category || 'General';
            if (!ministryGroups[category]) {
                ministryGroups[category] = [];
            }
            ministryGroups[category].push(ministry.attributes.name);
        });

        // Update navMenus with current ministry data
        Object.keys(ministryGroups).forEach(category => {
            const menuKey = category.toLowerCase().replace(/\s+/g, '');
            if (navMenus.ministries) {
                // Find existing group or create new one
                let existingGroup = navMenus.ministries.find(group =>
                    group.title && group.title.toLowerCase() === category.toLowerCase());

                if (existingGroup) {
                    existingGroup.group = ministryGroups[category];
                }
            }
        });
    }
}

function updateAnnouncements(announcementsData) {
    // Filter active announcements
    const now = new Date();
    const activeAnnouncements = announcementsData
        .filter(announcement => {
            const expiry = announcement.attributes.expiration_date;
            return !expiry || new Date(expiry) >= now;
        })
        .sort((a, b) => (b.attributes.priority || 0) - (a.attributes.priority || 0))
        .slice(0, 3);

    const announcementsContainer = document.querySelector('.announcements');
    if (announcementsContainer && activeAnnouncements.length > 0) {
        announcementsContainer.innerHTML = activeAnnouncements.map(announcement => `
            <div class="announcement-item priority-${announcement.attributes.priority || 1}">
                <h4 class="announcement-title">${announcement.attributes.title}</h4>
                <div class="announcement-content">${announcement.attributes.content}</div>
                <div class="announcement-date">${formatDate(announcement.attributes.date)}</div>
            </div>
        `).join('');
    }
}

// ==============================================
// UTILITY FUNCTIONS
// ==============================================

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ==============================================
// ADMIN INTERFACE (FOR VOLUNTEERS)
// ==============================================

function createAdminInterface() {
    // Only show admin interface to logged-in users
    if (!churchCMS.token) return;

    const adminButton = document.createElement('button');
    adminButton.textContent = '⚙️ Edit Content';
    adminButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 50px;
        padding: 15px 20px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,123,255,0.3);
        z-index: 1000;
        transition: all 0.3s ease;
    `;

    adminButton.addEventListener('click', showAdminPanel);
    document.body.appendChild(adminButton);
}

function showAdminPanel() {
    const adminPanel = document.createElement('div');
    adminPanel.className = 'admin-panel-overlay';
    adminPanel.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    adminPanel.innerHTML = `
        <div style="background: white; border-radius: 15px; padding: 30px; max-width: 600px; width: 100%; max-height: 80vh; overflow-y: auto;">
            <h2 style="color: #0A1E40; margin-bottom: 20px;">Content Management</h2>
            <div class="admin-sections">
                ${Object.keys(contentTypes).map(type => `
                    <div class="admin-section" style="margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px; cursor: pointer;" data-type="${type}">
                        <h4 style="margin: 0; color: #007bff;">${contentTypes[type].title}</h4>
                        <p style="margin: 5px 0 0 0; color: #666; font-size: 0.9rem;">Edit ${contentTypes[type].title.toLowerCase()}</p>
                    </div>
                `).join('')}
            </div>
            <button onclick="this.closest('.admin-panel-overlay').remove()" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 25px; margin-top: 20px; cursor: pointer;">Close</button>
        </div>
    `;

    document.body.appendChild(adminPanel);

    // Add click handlers for admin sections
    adminPanel.querySelectorAll('.admin-section').forEach(section => {
        section.addEventListener('click', () => {
            const contentType = section.dataset.type;
            openContentEditor(contentType);
        });
    });
}

function openContentEditor(contentType) {
    // This would open a specific editor for each content type
    // For now, redirect to Strapi admin
    window.open(`${churchCMS.baseURL.replace('/api', '')}/admin`, '_blank');
}

// ==============================================
// INITIALIZATION
// ==============================================

// Initialize CMS integration
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing CMS integration...');

    // Load dynamic content
    loadDynamicContent();

    // Create admin interface if user is logged in
    createAdminInterface();

    // Set up periodic content refresh (every 5 minutes)
    setInterval(loadDynamicContent, 5 * 60 * 1000);
});

// Export for use in other files
window.ChurchCMS = ChurchCMS;
window.churchCMS = churchCMS;