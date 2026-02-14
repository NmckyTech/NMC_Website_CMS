// COMPLETE FOOTER NAVIGATION SYSTEM
// Handles all footer columns: nav, info, ministries, and contact

// Footer navigation configuration for all columns
const footerNavigation = {
    // Main footer nav column (Events, Serve, Give, etc.)
    mainNav: {
        'events': {
            type: 'menu',
            action: 'dropdown',
            menu: 'events'
        },
        'serve': {
            type: 'menu', 
            action: 'dropdown',
            menu: 'serve'
        },
        'give': {
            type: 'external',
            action: 'link',
            target: '#give-online'
        },
        'español': {
            type: 'language',
            action: 'modal',
            content: 'spanish'
        },
        'my profile': {
            type: 'modal',
            action: 'modal',
            content: 'login'
        },
        'contact us': {
            type: 'modal',
            action: 'modal', 
            content: 'contact'
        }
    },

    // Church info column
    churchInfo: {
        'new here': {
            type: 'menu',
            action: 'dropdown',
            menu: 'newhere'
        },
        'mission & vision': {
            type: 'page',
            action: 'scroll',
            target: '#mission-section'
        },
        'resources': {
            type: 'modal',
            action: 'modal',
            content: 'resources'
        },
        'staff': {
            type: 'modal',
            action: 'modal',
            content: 'staff'
        },
        'jobs & residencies': {
            type: 'modal',
            action: 'modal',
            content: 'jobs'
        },
        'weddings & funerals': {
            type: 'modal',
            action: 'modal',
            content: 'ceremonies'
        }
    },

    // Ministries column
    ministries: {
        'care': {
            type: 'menu',
            action: 'dropdown',
            menu: 'care'
        },
        'connections': {
            type: 'menu',
            action: 'dropdown', 
            menu: 'connections'
        },
        'kids': {
            type: 'menu',
            action: 'dropdown',
            menu: 'kids'
        },
        'students': {
            type: 'menu',
            action: 'dropdown',
            menu: 'students'
        },
        'young adults': {
            type: 'menu',
            action: 'dropdown',
            menu: 'youngadults'
        },
        'adults': {
            type: 'menu',
            action: 'dropdown',
            menu: 'adults'
        },
        'español': {
            type: 'language',
            action: 'modal',
            content: 'spanish'
        },
        'local missions': {
            type: 'menu',
            action: 'dropdown',
            menu: 'localmissions'
        },
        'global missions': {
            type: 'menu',
            action: 'dropdown',
            menu: 'globalmissions'
        },
        'manna': {
            type: 'page',
            action: 'scroll',
            target: '#manna-section'
        },
        'new beginnings': {
            type: 'page',
            action: 'scroll',
            target: '#new-beginnings-section'
        }
    }
};

// Detailed content for footer menu dropdowns
const footerMenuContent = {
    newhere: [
        {
            title: "First Time Visitor",
            group: ["What to Expect", "Service Times", "Directions", "Parking Info", "Children's Check-in"],
            button: { text: "Plan Your Visit", href: "#plan-visit" }
        }
    ],

    care: [
        {
            title: "Care Ministries",
            group: ["Prayer Chain", "Grief Support", "Hospital Visits", "Meal Ministry", "Stephen Ministry"],
            button: { text: "Request Care", href: "#care-request" }
        }
    ],

    connections: [
        {
            title: "Get Connected",
            group: ["New Member Class", "Small Groups", "Coffee & Fellowship", "Volunteer Opportunities"],
            button: { text: "Join a Group", href: "#connect" }
        }
    ],

    kids: [
        {
            title: "Children's Ministry",
            group: ["Sunday School", "Children's Church", "VBS", "Kids Club", "Youth Choir"],
            button: { text: "Register Child", href: "#kids-registration" }
        }
    ],

    students: [
        {
            title: "Student Ministry", 
            group: ["Youth Group", "Teen Bible Study", "Mission Trips", "Youth Events", "Confirmation"],
            button: { text: "Join Youth Group", href: "#youth" }
        }
    ],

    youngadults: [
        {
            title: "Young Adults (18-35)",
            group: ["Young Adult Bible Study", "Social Events", "Service Projects", "Career Support"],
            button: { text: "Connect with Us", href: "#young-adults" }
        }
    ],

    adults: [
        {
            title: "Adult Ministry",
            group: ["Adult Sunday School", "Bible Studies", "Men's Group", "Women's Group", "Couples Ministry"],
            button: { text: "Find Your Class", href: "#adult-classes" }
        }
    ],

    localmissions: [
        {
            title: "Local Outreach",
            group: ["Food Pantry", "Community Garden", "Homeless Ministry", "School Partnerships"],
            button: { text: "Volunteer Locally", href: "#local-volunteer" }
        }
    ],

    globalmissions: [
        {
            title: "Global Missions",
            group: ["Mission Trips", "Missionary Support", "UMCOR", "Global Partners", "Disaster Relief"],
            button: { text: "Support Missions", href: "#global-missions" }
        }
    ]
};

// Modal content for footer items
const footerModalContent = {
    resources: {
        title: "Church Resources",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
                <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <h4 style="color: #007bff; margin-bottom: 10px;">Weekly Resources</h4>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">This Week's Bulletin</a></li>
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">Monthly Newsletter</a></li>
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">Weekly Devotional</a></li>
                    </ul>
                </div>
                <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <h4 style="color: #007bff; margin-bottom: 10px;">Forms & Documents</h4>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">Membership Form</a></li>
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">Room Reservation</a></li>
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">Event Planning Guide</a></li>
                    </ul>
                </div>
                <div style="padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <h4 style="color: #007bff; margin-bottom: 10px;">Study Materials</h4>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">Bible Study Guides</a></li>
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">Sermon Notes</a></li>
                        <li style="margin-bottom: 8px;"><a href="#" style="color: #666; text-decoration: none;">Small Group Materials</a></li>
                    </ul>
                </div>
            </div>
        `
    },

    staff: {
        title: "Our Staff & Leadership",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
                <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <div style="width: 80px; height: 80px; background: #007bff; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px;">RT</div>
                    <h4 style="margin-bottom: 5px; color: #333;">Rev. Tim Johnson</h4>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">Senior Pastor</p>
                    <a href="mailto:pastor@nmcky.org" style="color: #007bff; text-decoration: none; font-size: 0.9rem;">pastor@nmcky.org</a>
                </div>
                <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <div style="width: 80px; height: 80px; background: #007bff; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px;">AD</div>
                    <h4 style="margin-bottom: 5px; color: #333;">Administrative Director</h4>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">Church Administration</p>
                    <a href="mailto:nmckyoffice@gmail.com" style="color: #007bff; text-decoration: none; font-size: 0.9rem;">nmckyoffice@gmail.com</a>
                </div>
                <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <div style="width: 80px; height: 80px; background: #007bff; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px;">MD</div>
                    <h4 style="margin-bottom: 5px; color: #333;">Music Director</h4>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">Worship & Music</p>
                    <a href="mailto:music@nmcky.org" style="color: #007bff; text-decoration: none; font-size: 0.9rem;">music@nmcky.org</a>
                </div>
            </div>
            <div style="margin-top: 20px; padding: 20px; background: #f0f8ff; border-radius: 10px; border-left: 4px solid #007bff;">
                <h4 style="color: #0A1E40; margin-bottom: 10px;">Church Leadership</h4>
                <p style="color: #666; margin-bottom: 15px;">Our church is led by a dedicated team of volunteers and staff members.</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                    <div><strong>Board of Trustees</strong><br><span style="color: #666; font-size: 0.9rem;">Property & Finance</span></div>
                    <div><strong>Church Council</strong><br><span style="color: #666; font-size: 0.9rem;">Ministry Oversight</span></div>
                    <div><strong>SPRC Committee</strong><br><span style="color: #666; font-size: 0.9rem;">Staff Relations</span></div>
                </div>
            </div>
        `
    },

    jobs: {
        title: "Employment & Residencies",
        content: `
            <div style="margin: 20px 0;">
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h4 style="color: #007bff; margin-bottom: 15px;">Current Opportunities</h4>
                    <p style="color: #666; margin-bottom: 15px;">We're always looking for passionate individuals to join our team and serve our community.</p>
                    <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background: white; margin-bottom: 15px;">
                        <h5 style="color: #333; margin-bottom: 8px;">Part-Time Youth Director</h5>
                        <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">Lead our student ministry program for ages 12-18. Requirements: Bachelor's degree preferred, experience in youth ministry.</p>
                        <span style="background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem;">Part-Time</span>
                    </div>
                    <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background: white;">
                        <h5 style="color: #333; margin-bottom: 8px;">Administrative Assistant</h5>
                        <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">Support church operations with office management, communications, and event coordination.</p>
                        <span style="background: #e8f5e8; color: #2e7d32; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem;">Full-Time</span>
                    </div>
                </div>
                <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; border-left: 4px solid #007bff;">
                    <h4 style="color: #0A1E40; margin-bottom: 15px;">Pastoral Residency Program</h4>
                    <p style="color: #666; margin-bottom: 15px;">A one-year program for seminary graduates seeking hands-on ministry experience.</p>
                    <ul style="color: #666; padding-left: 20px;">
                        <li>Mentorship with Senior Pastor</li>
                        <li>Hands-on ministry experience</li>
                        <li>Housing allowance provided</li>
                        <li>Continuing education support</li>
                    </ul>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="mailto:nmckyoffice@gmail.com?subject=Employment Inquiry" style="background: #007bff; color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600;">Apply Today</a>
                </div>
            </div>
        `
    },

    ceremonies: {
        title: "Weddings & Funerals",
        content: `
            <div style="margin: 20px 0;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <h4 style="color: #007bff; margin-bottom: 15px;">💒 Weddings</h4>
                        <p style="color: #666; margin-bottom: 15px;">Celebrate your special day in our beautiful sanctuary.</p>
                        <ul style="color: #666; font-size: 0.9rem; padding-left: 20px; margin-bottom: 15px;">
                            <li>Pre-marital counseling required</li>
                            <li>Wedding coordinator available</li>
                            <li>Reception hall rental available</li>
                            <li>Floral arrangements permitted</li>
                        </ul>
                        <div style="background: white; padding: 10px; border-radius: 5px; font-size: 0.9rem;">
                            <strong>Wedding Fee:</strong> $500 (members) / $800 (non-members)
                        </div>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <h4 style="color: #007bff; margin-bottom: 15px;">🕊️ Funerals & Memorials</h4>
                        <p style="color: #666; margin-bottom: 15px;">Honoring life with dignity and compassion.</p>
                        <ul style="color: #666; font-size: 0.9rem; padding-left: 20px; margin-bottom: 15px;">
                            <li>Funeral & memorial services</li>
                            <li>Graveside services</li>
                            <li>Reception facility available</li>
                            <li>Grief support resources</li>
                        </ul>
                        <div style="background: white; padding: 10px; border-radius: 5px; font-size: 0.9rem;">
                            <strong>Service Fee:</strong> $300 (members) / $500 (non-members)
                        </div>
                    </div>
                </div>
                <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; border-left: 4px solid #007bff;">
                    <h4 style="color: #0A1E40; margin-bottom: 15px;">Planning Your Event</h4>
                    <p style="color: #666; margin-bottom: 15px;">Our pastoral staff will work with you to create a meaningful ceremony that reflects your faith and values.</p>
                    <div style="text-align: center;">
                        <a href="mailto:nmckyoffice@gmail.com?subject=Wedding/Funeral Inquiry" style="background: #007bff; color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; margin-right: 10px;">Schedule Consultation</a>
                        <a href="#" style="color: #007bff; text-decoration: none; font-weight: 600;">Download Planning Guide</a>
                    </div>
                </div>
            </div>
        `
    },

    spanish: {
        title: "Ministerio en Español",
        content: `
            <div style="margin: 20px 0;">
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h4 style="color: #007bff; margin-bottom: 15px;">Bienvenidos a Nuestra Iglesia</h4>
                    <p style="color: #666; margin-bottom: 15px;">Nos complace ofrecer servicios y ministerios en español para nuestra comunidad hispana.</p>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
                        <h5 style="color: #333; margin-bottom: 10px;">Servicios Dominicales</h5>
                        <p style="color: #666; font-size: 0.9rem;">Domingos a las 2:00 PM</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
                        <h5 style="color: #333; margin-bottom: 10px;">Estudio Bíblico</h5>
                        <p style="color: #666; font-size: 0.9rem;">Miércoles a las 7:00 PM</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
                        <h5 style="color: #333; margin-bottom: 10px;">Ministerio Infantil</h5>
                        <p style="color: #666; font-size: 0.9rem;">Domingos durante el servicio</p>
                    </div>
                </div>
                <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; border-left: 4px solid #007bff;">
                    <h4 style="color: #0A1E40; margin-bottom: 15px;">Contacto</h4>
                    <p style="color: #666; margin-bottom: 10px;">Para más información sobre nuestros servicios en español:</p>
                    <p style="color: #666;"><strong>Teléfono:</strong> 859-885-4481<br>
                    <strong>Email:</strong> nmckyoffice@gmail.com</p>
                </div>
            </div>
        `
    },

    contact: {
        title: "Contact Nicholasville Methodist Church",
        content: `
            <div style="margin: 20px 0;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <h4 style="color: #007bff; margin-bottom: 15px;">Church Information</h4>
                        <div style="color: #666; line-height: 1.6;">
                            <p><strong>Address:</strong><br>303 West Maple Street<br>Nicholasville, KY 40356</p>
                            <p><strong>Phone:</strong><br>859-885-4481</p>
                            <p><strong>Email:</strong><br>nmckyoffice@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h4 style="color: #007bff; margin-bottom: 15px;">Service Times</h4>
                        <div style="color: #666; line-height: 1.6;">
                            <p><strong>Sunday Worship:</strong><br>8:30 AM & 10:30 AM</p>
                            <p><strong>Sunday School:</strong><br>9:30 AM</p>
                            <p><strong>Spanish Service:</strong><br>2:00 PM</p>
                        </div>
                    </div>
                </div>
                <form style="display: flex; flex-direction: column; gap: 15px; background: #f8f9fa; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #0A1E40; margin-bottom: 10px;">Send us a Message</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <input type="text" placeholder="First Name" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                        <input type="text" placeholder="Last Name" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    </div>
                    <input type="email" placeholder="Email Address" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    <input type="tel" placeholder="Phone Number" style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    <select style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                        <option>General Inquiry</option>
                        <option>Prayer Request</option>
                        <option>Join a Ministry</option>
                        <option>Wedding/Funeral</option>
                        <option>Other</option>
                    </select>
                    <textarea placeholder="Your Message" rows="4" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px; resize: vertical;"></textarea>
                    <button type="submit" style="background: #007bff; color: white; border: none; padding: 15px; border-radius: 25px; font-weight: 600; cursor: pointer;">Send Message</button>
                </form>
            </div>
        `
    },

    login: {
        title: "Member Portal Login",
        content: `
            <div style="margin: 20px 0; text-align: center;">
                <div style="background: #f8f9fa; padding: 30px; border-radius: 15px; margin-bottom: 20px;">
                    <div style="width: 60px; height: 60px; background: #007bff; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">👤</div>
                    <h4 style="color: #0A1E40; margin-bottom: 10px;">Member Portal</h4>
                    <p style="color: #666; margin-bottom: 20px;">Access your member directory, giving history, and church resources.</p>
                </div>
                <form style="display: flex; flex-direction: column; gap: 15px; max-width: 300px; margin: 0 auto;">
                    <input type="email" placeholder="Email Address" required style="padding: 15px; border: 2px solid #ddd; border-radius: 25px; text-align: center;">
                    <input type="password" placeholder="Password" required style="padding: 15px; border: 2px solid #ddd; border-radius: 25px; text-align: center;">
                    <button type="submit" style="background: #007bff; color: white; border: none; padding: 15px; border-radius: 25px; font-weight: 600; cursor: pointer;">Sign In</button>
                    <div style="margin-top: 15px;">
                        <a href="#" style="color: #007bff; text-decoration: none; font-size: 0.9rem;">Forgot Password?</a>
                        <span style="margin: 0 15px; color: #ddd;">|</span>
                        <a href="#" style="color: #007bff; text-decoration: none; font-size: 0.9rem;">Request Access</a>
                    </div>
                </form>
                <div style="background: #f0f8ff; padding: 15px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #007bff;">
                    <p style="color: #666; font-size: 0.9rem; margin: 0;"><strong>Need access?</strong> Contact the church office at nmckyoffice@gmail.com to set up your member portal account.</p>
                </div>
            </div>
        `
    }
};

// Initialize complete footer navigation
function initCompleteFooterNavigation() {
    // Handle main footer nav column
    const mainNavItems = document.querySelectorAll('.footer-col-nav .footer-list li');
    mainNavItems.forEach(item => {
        const text = item.textContent.toLowerCase().trim();
        if (footerNavigation.mainNav[text]) {
            setupFooterItem(item, footerNavigation.mainNav[text], text);
        }
    });

    // Handle church info column
    const infoItems = document.querySelectorAll('.footer-list-info li');
    infoItems.forEach(item => {
        const text = item.textContent.toLowerCase().trim();
        if (footerNavigation.churchInfo[text]) {
            setupFooterItem(item, footerNavigation.churchInfo[text], text);
        }
    });

    // Handle ministries column
    const ministryItems = document.querySelectorAll('.footer-list-ministry li');
    ministryItems.forEach(item => {
        const text = item.textContent.toLowerCase().trim();
        if (footerNavigation.ministries[text]) {
            setupFooterItem(item, footerNavigation.ministries[text], text);
        }
    });
}

function setupFooterItem(element, config, key) {
    element.style.cursor = 'pointer';
    element.style.transition = 'all 0.3s ease';
    element.style.padding = '5px 0';
    
    element.addEventListener('click', function(e) {
        e.preventDefault();
        handleFooterAction(element, config, key);
    });
    
    element.addEventListener('mouseenter', function() {
        this.style.color = '#007bff';
        this.style.paddingLeft = '5px';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.color = '';
        this.style.paddingLeft = '0px';
    });
}

function handleFooterAction(element, config, key) {
    switch(config.action) {
        case 'dropdown':
            showFooterDropdown(element, config.menu || key);
            break;
        case 'scroll':
            scrollToSection(config.target);
            break;
        case 'link':
            if (config.target.startsWith('http') || config.target.startsWith('/')) {
                window.open(config.target, '_blank');
            } else {
                scrollToSection(config.target);
            }
            break;
        case 'modal':
            showFooterModal(config.content);
            break;
    }
}

function showFooterDropdown(element, menuKey) {
    // Remove existing dropdown
    const existingDropdown = document.querySelector('.footer-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
    }
    
    const dropdown = document.createElement('div');
    dropdown.className = 'footer-dropdown';
    
    // Get element position
    const rect = element.getBoundingClientRect();
    const footerRect = document.querySelector('.footer').getBoundingClientRect();
    
    dropdown.style.cssText = `
        position: fixed;
        bottom: ${window.innerHeight - footerRect.top + 20}px;
        left: ${Math.max(20, rect.left)}px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        padding: 25px;
        z-index: 2000;
        max-width: 400px;
        min-width: 300px;
        animation: slideUpFade 0.3s ease;
    `;
    
    // Add menu content
    let menuContent;
    if (footerMenuContent[menuKey]) {
        menuContent = createFooterMenuContent(footerMenuContent[menuKey]);
    } else if (navMenus[menuKey]) {
        menuContent = createFooterMenuContent(navMenus[menuKey]);
    } else {
        menuContent = createSimpleContent(menuKey);
    }
    
    dropdown.appendChild(menuContent);
    document.body.appendChild(dropdown);
    
    // Auto-close after delay or on click outside
    let closeTimeout = setTimeout(() => {
        dropdown.remove();
    }, 8000);
    
    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(closeTimeout);
    });
    
    dropdown.addEventListener('mouseleave', () => {
        closeTimeout = setTimeout(() => {
            dropdown.remove();
        }, 2000);
    });
    
    // Close on click outside
    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target) && !element.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
            }
        });
    }, 100);
}

function createFooterMenuContent(menuData) {
    const container = document.createElement('div');
    
    menuData.forEach(section => {
        if (section.title) {
            const title = document.createElement('h4');
            title.textContent = section.title;
            title.style.cssText = `
                color: #0A1E40;
                font-size: 1.1rem;
                margin-bottom: 12px;
                font-weight: 600;
                border-bottom: 2px solid #007bff;
                padding-bottom: 5px;
            `;
            container.appendChild(title);
        }
        
        if (section.group && section.group.length) {
            const list = document.createElement('ul');
            list.style.cssText = `
                list-style: none;
                padding: 0;
                margin: 0 0 15px 0;
            `;
            
            section.group.forEach(item => {
                const listItem = document.createElement('li');
                listItem.style.cssText = `
                    padding: 6px 0;
                    color: #666;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border-radius: 4px;
                    padding-left: 8px;
                `;
                listItem.textContent = item;
                
                listItem.addEventListener('mouseenter', () => {
                    listItem.style.color = '#007bff';
                    listItem.style.backgroundColor = '#f8f9fa';
                    listItem.style.paddingLeft = '12px';
                });
                listItem.addEventListener('mouseleave', () => {
                    listItem.style.color = '#666';
                    listItem.style.backgroundColor = 'transparent';
                    listItem.style.paddingLeft = '8px';
                });
                
                list.appendChild(listItem);
            });
            
            container.appendChild(list);
        }
        
        if (section.button) {
            const button = document.createElement('a');
            button.href = section.button.href;
            button.textContent = section.button.text;
            button.style.cssText = `
                display: inline-block;
                background: #007bff;
                color: white;
                padding: 10px 20px;
                border-radius: 25px;
                text-decoration: none;
                font-size: 0.9rem;
                font-weight: 600;
                margin-top: 10px;
                transition: all 0.3s ease;
            `;
            
            button.addEventListener('mouseenter', () => {
                button.style.background = '#0056b3';
                button.style.transform = 'translateY(-2px)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.background = '#007bff';
                button.style.transform = 'translateY(0)';
            });
            
            container.appendChild(button);
        }
    });
    
    return container;
}

function createSimpleContent(key) {
    const container = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    title.style.cssText = `
        color: #0A1E40;
        font-size: 1.1rem;
        margin-bottom: 12px;
        font-weight: 600;
    `;
    
    const content = document.createElement('p');
    content.textContent = `Learn more about our ${key} ministry and how you can get involved.`;
    content.style.cssText = `
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 15px;
    `;
    
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = 'Learn More';
    button.style.cssText = `
        display: inline-block;
        background: #007bff;
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        text-decoration: none;
        font-size: 0.85rem;
        font-weight: 600;
    `;
    
    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(button);
    
    return container;
}

function showFooterModal(contentType) {
    const existingModal = document.querySelector('.footer-modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'footer-modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
        padding: 20px;
        box-sizing: border-box;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 0;
        width: 100%;
        max-width: 800px;
        max-height: 90vh;
        overflow: hidden;
        position: relative;
        animation: slideInScale 0.3s ease;
        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
    `;
    
    // Modal header
    const header = document.createElement('div');
    header.style.cssText = `
        background: linear-gradient(135deg, #0A1E40, #007bff);
        color: white;
        padding: 25px 30px;
        position: relative;
    `;
    
    const title = document.createElement('h2');
    title.textContent = footerModalContent[contentType]?.title || 'Information';
    title.style.cssText = `
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 20px;
        background: rgba(255,255,255,0.2);
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    `;
    closeBtn.addEventListener('click', () => modalOverlay.remove());
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = 'rgba(255,255,255,0.3)';
        closeBtn.style.transform = 'scale(1.1)';
    });
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(255,255,255,0.2)';
        closeBtn.style.transform = 'scale(1)';
    });
    
    header.appendChild(title);
    header.appendChild(closeBtn);
    
    // Modal content
    const content = document.createElement('div');
    content.style.cssText = `
        padding: 30px;
        overflow-y: auto;
        max-height: calc(90vh - 100px);
    `;
    content.innerHTML = footerModalContent[contentType]?.content || '<p>Content coming soon...</p>';
    
    modal.appendChild(header);
    modal.appendChild(content);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    
    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.remove();
        }
    });
    
    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            modalOverlay.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

function scrollToSection(target) {
    const element = document.querySelector(target);
    if (element) {
        const navHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
        const targetPosition = element.offsetTop - navHeight - 20;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Add enhanced CSS animations
const footerAnimationStyles = document.createElement('style');
footerAnimationStyles.textContent = `
    @keyframes slideUpFade {
        from { 
            transform: translateY(20px); 
            opacity: 0; 
        }
        to { 
            transform: translateY(0); 
            opacity: 1; 
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInScale {
        from { 
            transform: scale(0.9) translateY(-20px); 
            opacity: 0; 
        }
        to { 
            transform: scale(1) translateY(0); 
            opacity: 1; 
        }
    }
    
    .footer-dropdown:hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    
    .footer-modal-overlay {
        backdrop-filter: blur(5px);
    }
`;
document.head.appendChild(footerAnimationStyles);

// Update your main initialization to include complete footer navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing enhanced website features...');

    // Initialize all features
    initEnhancedNavigation();
    initCompleteFooterNavigation(); // Add this line
    initCarousel();
    initSmoothScrolling();
    initSectionAnimations();
    initButtonEffects();
    setupForms();
    setupLazyLoading();
    initMobileNavigation();
    initSearchFunctionality();
});

// CUSTOMIZATION GUIDE FOR COMPLETE FOOTER:

/*
EASY CUSTOMIZATION EXAMPLES:

1. TO ADD NEW FOOTER CONTENT:
   - Add new items to footerModalContent object
   - Add corresponding entries to footerNavigation object

2. TO MODIFY EXISTING CONTENT:
   - Edit the HTML content in footerModalContent
   - Change menu items in footerMenuContent

3. TO CHANGE BEHAVIOR:
   - Update action types in footerNavigation:
     * 'dropdown' - shows menu dropdown
     * 'modal' - shows modal popup  
     * 'scroll' - scrolls to page section
     * 'link' - opens URL or scrolls to anchor

4. TO ADD SPANISH CONTENT:
   - Expand the spanish section in footerModalContent
   - Add Spanish menu items to footerMenuContent

5. TO CUSTOMIZE STAFF INFO:
   - Edit the staff section in footerModalContent
   - Add real staff photos and contact info

EXAMPLE CUSTOMIZATIONS:

// Make "Manna" show a dropdown instead of scrolling:
'manna': {
    type: 'menu',
    action: 'dropdown', 
    menu: 'manna'
}

// Add Manna menu content:
manna: [
    {
        title: "Manna Food Pantry",
        group: ["Food Distribution", "Volunteer Opportunities", "Donation Guidelines"],
        button: { text: "Help with Manna", href: "#manna-volunteer" }
    }
]

// Make "Jobs & Residencies" link to external site:
'jobs & residencies': {
    type: 'external',
    action: 'link',
    target: 'https://your-jobs-site.com'
}
*/