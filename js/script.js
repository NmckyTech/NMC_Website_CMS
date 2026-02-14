// Navigation menu data
const navMenus = {
    about: [
        { group: [{ text: "Mission & Vision", href: "mission-and-vision.html" }] },
        { group: [{ text: "Our Beliefs", href: "beliefs.html" }] },
        { group: [{ text: "Staff", href: "staff.html" }] },
    ],
    ministries: [
        { group: [{ text: "Kids", href: "kids.html" }] },
        { group: [{ text: "Youth", href: "youth.html" }] },
        { group: [{ text: "Adults", href: "adults.html" }] },
        { group: [{ text: "Care", href: "care.html" }] },
        { group: [{ text: "Connections", href: "connections.html" }] }
    ],
    serve: [
        { group: [{ text: "Volunteer", href: "volunteer.html" }] },
        { group: [{ text: "Local Missions", href: "local-missions.html" }] },
        { group: [{ text: "Global Missions", href: "global-missions.html" }] }
    ],
    giving: [
        { group: [{ text: "Give Online", href: "https://secure.myvanco.com/YNM1/home" }] },
        { group: [{ text: "Ways to Give", href: "giving.html" }] }
    ],
    events: [
        { group: [{ text: "Upcoming Events", href: "upcoming-events.html" }] },
        { group: [{ text: "Calendar", href: "calendar.html" }] }
    ]
};

// Main initialization when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing website features...');

    // Initialize all features
    initNavigation();
    initCarousel();
    initSmoothScrolling();
    initSectionAnimations();
    initButtonEffects();
    setupForms();
    setupLazyLoading();
});

// Navigation functionality
function initNavigation() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    // Smooth scrolling navigation behavior (background and shadow now controlled by CSS only)

    // Enhanced nav menu logic with smooth animations
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active state from all links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const menu = this.getAttribute('data-menu');
            const overlay = document.getElementById('navMenuOverlay');
            const content = document.getElementById('navMenuContent');

            // Build menu content
            content.innerHTML = '';
            if (navMenus[menu]) {
                navMenus[menu].forEach(item => {
                    const groupDiv = document.createElement('div');
                    groupDiv.className = 'nav-menu-group';

                    if (item.group && item.group.length) {
                        item.group.forEach(entry => {
                            let el;
                            if (typeof entry === 'string') {
                                el = document.createElement('div');
                                el.textContent = entry;
                            } else {
                                el = document.createElement('a');
                                el.textContent = entry.text;
                                el.href = entry.href || '#';
                                el.style.textDecoration = 'none';
                                el.style.color = '#333';
                                // Always open in same tab
                                el.target = '_self';
                                el.addEventListener('mouseenter', () => {
                                    el.style.color = '#007bff';
                                });
                                el.addEventListener('mouseleave', () => {
                                    el.style.color = '#333';
                                });
                            }
                            el.style.cursor = 'pointer';
                            el.style.transition = 'color 0.2s ease';
                            groupDiv.appendChild(el);
                        });
                    }

                    if (item.button) {
                        const btn = document.createElement('button');
                        btn.className = 'nav-menu-btn';
                        btn.textContent = item.button.text;
                        btn.onclick = () => window.location.href = item.button.href;
                        groupDiv.appendChild(btn);
                    }

                    content.appendChild(groupDiv);
                });
            }

            // Show overlay with animation
            overlay.classList.add('active');
        });
    });

    // Enhanced click outside handler
    document.addEventListener('click', function(e) {
        const overlay = document.getElementById('navMenuOverlay');
        const navLinks = document.querySelector('.nav-links');

        if (overlay && overlay.classList.contains('active') &&
            !overlay.contains(e.target) &&
            (!navLinks || !navLinks.contains(e.target))) {
            overlay.classList.remove('active');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        }
    });
}

// Fixed carousel functionality
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

    console.log('📍 Carousel elements:', {
        wrapper: !!wrapper,
        slides: slides.length,
        prevButton: !!prevButton,
        nextButton: !!nextButton,
        pagination: !!pagination
    });

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
            bullet.textContent = '';
            bullet.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(`🎯 Pagination clicked: ${i}`);
                if (!isTransitioning) {
                    goToSlide(i);
                }
            });
            pagination.appendChild(bullet);
        }
        console.log('✅ Pagination created');
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

        console.log(`🎠 Going to slide ${index}`);
        isTransitioning = true;
        currentIndex = index;
        const translateX = -currentIndex * 100;

        wrapper.style.transform = `translateX(${translateX}%)`;
        updatePagination();

        // Update accessibility
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
        console.log(`➡️ Next: ${currentIndex} → ${newIndex}`);
        goToSlide(newIndex);
    }

    function prevSlide() {
        if (isTransitioning) return;
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        console.log(`⬅️ Previous: ${currentIndex} → ${newIndex}`);
        goToSlide(newIndex);
    }

    // Setup navigation buttons with forced styling
    if (nextButton) {
        // Clear existing listeners
        nextButton.replaceWith(nextButton.cloneNode(true));
        const newNextButton = carousel.querySelector('.swiper-button-next');

        newNextButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🖱️ Next button clicked');
            nextSlide();
        });

        // Force button styling
        newNextButton.style.cssText = `
            position: absolute !important;
            top: 30% !important;
            right: 10px !important;
            transform: translateY(-50%) !important;
            width: 50px !important;
            height: 50px !important;
            background: rgba(0, 123, 255, 0.9) !important;
            color: white !important;
            border: none !important;
            border-radius: 50% !important;
            font-size: 20px !important;
            cursor: pointer !important;
            z-index: 1000 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        `;
        newNextButton.innerHTML = '›';
        console.log('✅ Next button setup');
    }

    if (prevButton) {
        // Clear existing listeners
        prevButton.replaceWith(prevButton.cloneNode(true));
        const newPrevButton = carousel.querySelector('.swiper-button-prev');

        newPrevButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🖱️ Previous button clicked');
            prevSlide();
        });

        // Force button styling
        newPrevButton.style.cssText = `
            position: absolute !important;
            top: 30% !important;
            left: 10px !important;
            transform: translateY(-50%) !important;
            width: 50px !important;
            height: 50px !important;
            background: rgba(0, 123, 255, 0.9) !important;
            color: white !important;
            border: none !important;
            border-radius: 50% !important;
            font-size: 20px !important;
            cursor: pointer !important;
            z-index: 1000 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        `;
        newPrevButton.innerHTML = '‹';
        console.log('✅ Previous button setup');
    }

    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' && !isTransitioning) nextSlide();
        if (e.key === 'ArrowLeft' && !isTransitioning) prevSlide();
    });

    // Enhanced touch/swipe support
    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;

    wrapper.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });

    wrapper.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;

        const diffX = startX - endX;
        const diffY = startY - endY;

        // Only trigger if horizontal swipe is dominant
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
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
        autoplayInterval = setInterval(nextSlide, 6000); // 6 seconds
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // Pause autoplay on user interaction
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('touchstart', stopAutoplay);

    // Intersection Observer for autoplay control
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoplay();
            } else {
                stopAutoplay();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(carousel);

    // Initialize
    createPagination();
    goToSlide(0);

    // Start autoplay after brief delay
    setTimeout(startAutoplay, 1000);

    // Handle window resize
    window.addEventListener('resize', function() {
        setTimeout(() => goToSlide(currentIndex), 100);
    });

    console.log('🎉 Carousel initialized successfully!');
}

// Smooth scroll for anchor links
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

// Section reveal animations
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

// Button ripple effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('button, .btn, .feature-link, .content-block-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
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

    // Add ripple animation CSS
    const style = document.createElement('style');
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

// Form handling
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

// Lazy loading for images
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

// Performance optimization - reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.banner-carousel');
        if (carousel) {
            const stopAutoplayEvent = new CustomEvent('stopAutoplay');
            carousel.dispatchEvent(stopAutoplayEvent);
        }
    });
}