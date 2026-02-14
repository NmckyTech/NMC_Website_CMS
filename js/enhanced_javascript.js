// Enhanced Navigation menu data with more comprehensive options
const navMenus = {
    about: [
        {
            group: ["New Here", "Mission & Vision", "Our Beliefs", "History"],
            title: "Learn About Us"
        },
        {
            group: ["Staff", "Elders & Deacons", "Leadership Development"],
            title: "Leadership"
        },
        {
            group: ["Resources", "Publications", "FAQ"],
            title: "Resources"
        },
        {
            group: [],
            button: { text: "Contact Us", href: "mailto:nmckyoffice@gmail.com" }
        }
    ],
    ministries: [
        {
            group: ["Children's Ministry", "Kids Sunday School", "VBS"],
            title: "Kids"
        },
        {
            group: ["Youth Group", "Teen Bible Study", "Youth Events"],
            title: "Students"
        },
        {
            group: ["Adult Sunday School", "Small Groups", "Bible Study"],
            title: "Adults"
        },
        {
            group: ["Senior Ministry", "Men's Ministry", "Women's Ministry"],
            title: "Special Groups"
        },
        {
            group: ["Care Teams", "Prayer Ministry", "Grief Support"],
            title: "Care & Support"
        },
        {
            group: ["Connections Class", "New Member Classes"],
            title: "Getting Connected"
        }
    ],
    serve: [
        {
            group: ["Volunteer Opportunities", "Ministry Teams", "Skills-Based Serving"],
            title: "Get Involved"
        },
        {
            group: ["Community Outreach", "Food Pantry", "Neighborhood Ministry"],
            title: "Local Missions"
        },
        {
            group: ["Mission Trips", "Global Partners", "Missionary Support"],
            title: "Global Missions"
        },
        {
            group: ["Special Events", "Seasonal Service", "One-Time Opportunities"],
            title: "Seasonal Serving"
        },
        {
            group: [],
            button: { text: "Find Your Ministry", href: "#" }
        }
    ],
    giving: [
        {
            group: ["Online Giving", "Text to Give", "Mobile App"],
            title: "Give Online"
        },
        {
            group: ["Tithing", "Special Offerings", "Mission Giving"],
            title: "Ways to Give"
        },
        {
            group: ["Planned Giving", "Legacy Gifts", "Memorial Gifts"],
            title: "Special Giving"
        },
        {
            group: ["Financial Peace", "Stewardship Classes"],
            title: "Financial Resources"
        },
        {
            group: [],
            button: { text: "Give Now", href: "#" }
        }
    ],
    events: [
        {
            group: ["Sunday Services", "Weekly Events", "Regular Programs"],
            title: "Weekly Events"
        },
        {
            group: ["Special Services", "Concerts", "Community Events"],
            title: "Special Events"
        },
        {
            group: ["Conferences", "Retreats", "Workshops"],
            title: "Growth Events"
        },
        {
            group: ["Holiday Services", "Easter", "Christmas"],
            title: "Seasonal Events"
        },
        {
            group: [],
            button: { text: "View Calendar", href: "#" }
        }
    ]
};

// Service times and location data
const serviceInfo = {
    times: [
        { service: "Traditional Service", time: "8:30 AM", description: "Classic hymns and liturgy" },
        { service: "Contemporary Service", time: "10:30 AM", description: "Modern worship and music" },
        { service: "Sunday School", time: "9:30 AM", description: "All ages welcome" }
    ],
    location: {
        address: "303 West Maple Street, Nicholasville, KY 40356",
        phone: "859-885-4481",
        directions: "#"
    }
};

// Main initialization when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing enhanced website features...');

    // Initialize all features
    initEnhancedNavigation();
    initCarousel();
    initSmoothScrolling();
    initSectionAnimations();
    initButtonEffects();
    setupForms();
    setupLazyLoading();
    initMobileNavigation();
    initSearchFunctionality();
});

// Enhanced Navigation functionality
function initEnhancedNavigation() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    // Enhanced scroll behavior with better performance
    let ticking = false;
    function updateNavOnScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove background opacity based on scroll
        if (scrollTop > 50) {
            nav.style.background = '#0A1E40';
            nav.style.boxShadow = '0 2px 20px rgba(10, 30, 64, 0.3)';
        } else {
            nav.style.background = '#0A1E40';
            nav.style.boxShadow = '0 2px 10px rgba(10, 30, 64, 0.2)';
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavOnScroll);
            ticking = true;
        }
    });

    // Enhanced nav menu logic with rich content
    document.querySelectorAll('.nav-link').forEach(link => {
        let hoverTimeout;

        // Mouse enter - show menu with delay
        link.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                showNavMenu(this);
            }, 150);
        });

        // Click handler for mobile/accessibility
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showNavMenu(this);
        });

        // Mouse leave - hide menu with delay
        link.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                const overlay = document.getElementById('navMenuOverlay');
                if (overlay && !overlay.matches(':hover')) {
                    hideNavMenu();
                }
            }, 300);
        });
    });

    // Enhanced menu overlay behavior
    const overlay = document.getElementById('navMenuOverlay');
    if (overlay) {
        overlay.addEventListener('mouseenter', function() {
            // Keep menu open when hovering over it
        });

        overlay.addEventListener('mouseleave', function() {
            hideNavMenu();
        });
    }

    // Enhanced click outside handler
    document.addEventListener('click', function(e) {
        const overlay = document.getElementById('navMenuOverlay');
        const navLinks = document.querySelector('.nav-links');

        if (overlay && overlay.classList.contains('active') &&
            !overlay.contains(e.target) &&
            (!navLinks || !navLinks.contains(e.target))) {
            hideNavMenu();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideNavMenu();
        }
    });
}

function showNavMenu(linkElement) {
    // Remove active state from all links
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    linkElement.classList.add('active');

    const menu = linkElement.getAttribute('data-menu');
    const overlay = document.getElementById('navMenuOverlay');
    const content = document.getElementById('navMenuContent');

    if (!overlay || !content || !navMenus[menu]) return;

    // Build enhanced menu content
    content.innerHTML = '';

    // Add a header for the menu
    const menuHeader = document.createElement('div');
    menuHeader.className = 'nav-menu-header';
    menuHeader.innerHTML = `
        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 2rem; color: #0A1E40; text-transform: capitalize;">
            ${menu}
        </h3>
    `;
    content.appendChild(menuHeader);

    // Create menu groups container
    const menuGrid = document.createElement('div');
    menuGrid.className = 'nav-menu-grid';
    menuGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
        width: 100%;
    `;

    navMenus[menu].forEach(item => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'nav-menu-group';

        // Add group title if it exists
        if (item.title) {
            const titleEl = document.createElement('h4');
            titleEl.className = 'nav-menu-group-title';
            titleEl.textContent = item.title;
            titleEl.style.cssText = `
                font-size: 1.1rem;
                font-weight: 600;
                margin-bottom: 1rem;
                color: #007bff;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-bottom: 2px solid #007bff;
                padding-bottom: 0.5rem;
            `;
            groupDiv.appendChild(titleEl);
        }

        // Add group items
        if (item.group && item.group.length) {
            const itemsList = document.createElement('ul');
            itemsList.style.cssText = `
                list-style: none;
                padding: 0;
                margin: 0;
            `;

            item.group.forEach(txt => {
                const listItem = document.createElement('li');
                listItem.style.cssText = `
                    margin-bottom: 0.8rem;
                `;

                const el = document.createElement('a');
                el.href = '#';
                el.textContent = txt;
                el.style.cssText = `
                    color: #666;
                    text-decoration: none;
                    font-size: 0.95rem;
                    font-weight: 400;
                    transition: all 0.2s ease;
                    display: block;
                    padding: 0.3rem 0;
                `;

                el.addEventListener('mouseenter', () => {
                    el.style.color = '#007bff';
                    el.style.paddingLeft = '0.5rem';
                });

                el.addEventListener('mouseleave', () => {
                    el.style.color = '#666';
                    el.style.paddingLeft = '0';
                });

                listItem.appendChild(el);
                itemsList.appendChild(listItem);
            });
            groupDiv.appendChild(itemsList);
        }

        // Add button if it exists
        if (item.button) {
            const btn = document.createElement('a');
            btn.className = 'nav-menu-btn';
            btn.href = item.button.href;
            btn.textContent = item.button.text;
            btn.style.cssText = `
                display: inline-block;
                background: #007bff;
                color: white;
                border: 2px solid #007bff;
                border-radius: 25px;
                padding: 12px 25px;
                font-size: 0.9rem;
                font-weight: 600;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s ease;
                margin-top: 1rem;
            `;

            btn.addEventListener('mouseenter', () => {
                btn.style.background = 'white';
                btn.style.color = '#007bff';
                btn.style.transform = 'translateY(-2px)';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.background = '#007bff';
                btn.style.color = 'white';
                btn.style.transform = 'translateY(0)';
            });

            groupDiv.appendChild(btn);
        }

        menuGrid.appendChild(groupDiv);
    });

    content.appendChild(menuGrid);

    // Add service times for certain menus
    if (menu === 'about' || menu === 'events') {
        addServiceTimesToMenu(content);
    }

    // Show overlay with animation
    overlay.classList.add('active');

    // Add fade-in animation
    content.style.opacity = '0';
    content.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        content.style.transition = 'all 0.3s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 10);
}

function hideNavMenu() {
    const overlay = document.getElementById('navMenuOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    }
}

function addServiceTimesToMenu(content) {
    const serviceDiv = document.createElement('div');
    serviceDiv.className = 'nav-menu-service-times';
    serviceDiv.style.cssText = `
        margin-top: 3rem;
        padding: 2rem;
        background: #f8f9fa;
        border-radius: 10px;
        border-left: 4px solid #007bff;
    `;

    const serviceTitle = document.createElement('h4');
    serviceTitle.textContent = 'Service Times';
    serviceTitle.style.cssText = `
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #0A1E40;
    `;
    serviceDiv.appendChild(serviceTitle);

    const serviceList = document.createElement('div');
    serviceList.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    `;

    serviceInfo.times.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.style.cssText = `
            padding: 1rem;
            background: white;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        `;
        serviceItem.innerHTML = `
            <div style="font-weight: 600; color: #007bff; margin-bottom: 0.5rem;">${service.service}</div>
            <div style="font-size: 1.1rem; font-weight: 500; color: #333; margin-bottom: 0.5rem;">${service.time}</div>
            <div style="font-size: 0.9rem; color: #666;">${service.description}</div>
        `;
        serviceList.appendChild(serviceItem);
    });

    serviceDiv.appendChild(serviceList);
    content.appendChild(serviceDiv);
}

// Mobile navigation enhancement
function initMobileNavigation() {
    // Create mobile menu toggle if screen is small
    if (window.innerWidth <= 768) {
        const navInner = document.querySelector('.nav-inner');
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-nav-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        `;

        // Insert mobile toggle
        navInner.appendChild(mobileToggle);

        mobileToggle.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('mobile-active');
        });
    }
}

// Search functionality
function initSearchFunctionality() {
    const searchButton = document.querySelector('.nav-search');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            // Create search overlay
            const searchOverlay = document.createElement('div');
            searchOverlay.className = 'search-overlay';
            searchOverlay.style.cssText = `
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
            `;

            const searchBox = document.createElement('div');
            searchBox.style.cssText = `
                background: white;
                padding: 2rem;
                border-radius: 10px;
                width: 90%;
                max-width: 500px;
            `;

            searchBox.innerHTML = `
                <h3 style="margin-bottom: 1rem;">Search our website</h3>
                <input type="text" placeholder="What are you looking for?" style="
                    width: 100%;
                    padding: 1rem;
                    border: 2px solid #ddd;
                    border-radius: 25px;
                    font-size: 1rem;
                    margin-bottom: 1rem;
                " />
                <button style="
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: 600;
                ">Search</button>
                <button class="close-search" style="
                    background: none;
                    border: none;
                    float: right;
                    font-size: 1.5rem;
                    cursor: pointer;
                    margin-top: -3rem;
                    margin-right: -1rem;
                ">×</button>
            `;

            searchOverlay.appendChild(searchBox);
            document.body.appendChild(searchOverlay);

            // Close search
            searchOverlay.querySelector('.close-search').addEventListener('click', () => {
                searchOverlay.remove();
            });

            // Close on overlay click
            searchOverlay.addEventListener('click', (e) => {
                if (e.target === searchOverlay) {
                    searchOverlay.remove();
                }
            });

            // Focus search input
            setTimeout(() => {
                searchOverlay.querySelector('input').focus();
            }, 100);
        });
    }
}

// Keep all your existing functions (carousel, smooth scrolling, etc.)
// ... [Previous carousel and other functions remain the same] ...

// Fixed carousel functionality (keeping your existing working code)
function initCarousel() {
    console.log('🎠 Initializing carousel...');

    const carousel = document.querySelector('.banner-carousel');
    if (!carousel) {
        console.log('❌ No carousel found');
        return;
    }

    const wrapper = carousel.querySelector('.swiper-wrapper');
    const slides = carousel.querySelectorAll('.swiper-slide');
    const prevButton = carousel.querySelector('.swiper-button-prev');
    const nextButton = carousel.querySelector('.swiper-button-next');
    const pagination = carousel.querySelector('.swiper-pagination');

    if (!wrapper || !slides.length) {
        console.error('❌ Missing carousel elements');
        return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoplayInterval;
    let isTransitioning = false;

    // Ensure proper CSS setup
    wrapper.style.display = 'flex';
    wrapper.style.width = '100%';
    wrapper.style.transition = 'transform 0.5s ease';

    slides.forEach((slide, index) => {
        slide.style.minWidth = '100%';
        slide.style.flexShrink = '0';
    });

    // Create pagination bullets
    function createPagination() {
        if (!pagination) return;

        pagination.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const bullet = document.createElement('button');
            bullet.classList.add('swiper-pagination-bullet');
            bullet.setAttribute('aria-label', `Go to slide ${i + 1}`);
            bullet.textContent = i + 1;

            bullet.style.cssText = `
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 2px solid #007bff;
                background: ${i === 0 ? '#007bff' : 'white'};
                color: ${i === 0 ? 'white' : '#007bff'};
                margin: 0 5px;
                cursor: pointer;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
            `;

            bullet.addEventListener('click', (e) => {
                e.preventDefault();
                if (!isTransitioning) {
                    goToSlide(i);
                }
            });
            pagination.appendChild(bullet);
        }
    }

    // Update pagination
    function updatePagination() {
        if (!pagination) return;

        const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach((bullet, index) => {
            const isActive = index === currentIndex;
            bullet.style.background = isActive ? '#007bff' : 'white';
            bullet.style.color = isActive ? 'white' : '#007bff';
        });
    }

    // Enhanced slide transition
    function goToSlide(index) {
        if (isTransitioning || index < 0 || index >= totalSlides) return;

        isTransitioning = true;
        currentIndex = index;
        const translateX = -currentIndex * 100;

        wrapper.style.transform = `translateX(${translateX}%)`;
        updatePagination();

        slides.forEach((slide, i) => {
            slide.setAttribute('aria-hidden', i !== currentIndex);
        });

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    // Navigation functions
    function nextSlide() {
        if (isTransitioning) return;
        const newIndex = (currentIndex + 1) % totalSlides;
        goToSlide(newIndex);
    }

    function prevSlide() {
        if (isTransitioning) return;
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(newIndex);
    }

    // Setup navigation buttons
    if (nextButton) {
        nextButton.replaceWith(nextButton.cloneNode(true));
        const newNextButton = carousel.querySelector('.swiper-button-next');
        newNextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
        prevButton.replaceWith(prevButton.cloneNode(true));
        const newPrevButton = carousel.querySelector('.swiper-button-prev');
        newPrevButton.addEventListener('click', prevSlide);
    }

    // Touch/swipe support
    let startX = 0;
    let endX = 0;

    wrapper.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    }, { passive: true });

    wrapper.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }, { passive: true });

    // Autoplay functionality
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, 6000);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Initialize
    createPagination();
    goToSlide(0);
    setTimeout(startAutoplay, 1000);

    console.log('🎉 Carousel initialized successfully!');
}

// Keep all other existing functions...
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initSectionAnimations() {
    const sections = document.querySelectorAll('.content-section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
}

function initButtonEffects() {
    const buttons = document.querySelectorAll('button, .btn, .feature-link, .content-block-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function setupForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 3000);
            }
        });
    });
}

function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}