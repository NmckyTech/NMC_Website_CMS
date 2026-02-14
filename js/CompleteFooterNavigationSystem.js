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
    const existingDropdown = document.