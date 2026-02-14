// FOOTER NAVIGATION INTEGRATION
// Add this to your enhanced navigation JavaScript

// Footer navigation data - can link to same menus or have unique content
const footerNavigation = {
    events: {
        type: 'page', // or 'menu' to show dropdown
        action: 'scroll', // or 'link' for separate page
        target: '#events-section' // or URL for separate page
    },
    serve: {
        type: 'menu', // Show same dropdown as main nav
        action: 'dropdown',
        menu: 'serve' // References the main nav menu
    },
    give: {
        type: 'external',
        action: 'link',
        target: '#give-online' // or your giving platform URL
    },
    espanol: {
        type: 'page',
        action: 'link',
        target: '/spanish' // Spanish version of site
    },
    profile: {
        type: 'modal',
        action: 'modal',
        content: 'login' // Member login/profile modal
    },
    contact: {
        type: 'modal',
        action: 'modal',
        content: 'contact' // Contact form modal
    }
};

// Spanish/Español navigation content
const spanishNavMenus = {
    ministerios: [
        {
            group: ["Ministerio Infantil", "Escuela Dominical", "Escuela Bíblica de Vacaciones"],
            title: "Niños"
        },
        {
            group: ["Jóvenes", "Estudio Bíblico", "Eventos Juveniles"],
            title: "Estudiantes"
        },
        {
            group: ["Clase de Adultos", "Grupos Pequeños", "Estudio Bíblico"],
            title: "Adultos"
        }
    ],
    servir: [
        {
            group: ["Oportunidades de Voluntariado", "Equipos de Ministerio"],
            title: "Involúcrate"
        },
        {
            group: ["Alcance Comunitario", "Despensa de Alimentos"],
            title: "Misiones Locales"
        }
    ],
    dar: [
        {
            group: ["Dar en Línea", "Diezmos", "Ofrendas Especiales"],
            title: "Formas de Dar"
        }
    ]
};

// Initialize footer navigation
function initFooterNavigation() {
    const footerLinks = document.querySelectorAll('.footer-list li');

    footerLinks.forEach(link => {
        const text = link.textContent.toLowerCase().trim();
        const key = getFooterNavKey(text);

        if (footerNavigation[key]) {
            setupFooterLink(link, key, footerNavigation[key]);
        }
    });
}

function getFooterNavKey(text) {
    const keyMap = {
        'events': 'events',
        'serve': 'serve',
        'give': 'give',
        'español': 'espanol',
        'my profile': 'profile',
        'contact us': 'contact'
    };
    return keyMap[text] || text;
}

function setupFooterLink(linkElement, key, config) {
    linkElement.style.cursor = 'pointer';
    linkElement.style.transition = 'color 0.3s ease';

    linkElement.addEventListener('click', function(e) {
        e.preventDefault();

        switch(config.action) {
            case 'dropdown':
                showFooterDropdown(linkElement, config.menu);
                break;
            case 'scroll':
                scrollToSection(config.target);
                break;
            case 'link':
                if (config.target.startsWith('http') || config.target.startsWith('/')) {
                    window.location.href = config.target;
                } else {
                    scrollToSection(config.target);
                }
                break;
            case 'modal':
                showModal(config.content);
                break;
        }
    });

    // Hover effects
    linkElement.addEventListener('mouseenter', function() {
        this.style.color = '#007bff';
    });

    linkElement.addEventListener('mouseleave', function() {
        this.style.color = '';
    });
}

function showFooterDropdown(element, menuKey) {
    // Create or show a small dropdown near the footer item
    const existingDropdown = document.querySelector('.footer-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
    }

    const dropdown = document.createElement('div');
    dropdown.className = 'footer-dropdown';
    dropdown.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: ${element.offsetLeft}px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        padding: 20px;
        z-index: 1000;
        max-width: 300px;
        animation: slideUp 0.3s ease;
    `;

    // Add menu content (reuse main nav content)
    if (navMenus[menuKey]) {
        const menuContent = createSimplifiedMenuContent(navMenus[menuKey]);
        dropdown.appendChild(menuContent);
    }

    document.body.appendChild(dropdown);

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

function createSimplifiedMenuContent(menuData) {
    const container = document.createElement('div');

    menuData.forEach(section => {
        if (section.title) {
            const title = document.createElement('h4');
            title.textContent = section.title;
            title.style.cssText = `
                color: #007bff;
                font-size: 1rem;
                margin-bottom: 10px;
                font-weight: 600;
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
                    padding: 5px 0;
                    color: #666;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: color 0.2s ease;
                `;
                listItem.textContent = item;

                listItem.addEventListener('mouseenter', () => {
                    listItem.style.color = '#007bff';
                });
                listItem.addEventListener('mouseleave', () => {
                    listItem.style.color = '#666';
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
                padding: 8px 16px;
                border-radius: 20px;
                text-decoration: none;
                font-size: 0.85rem;
                font-weight: 600;
                margin-top: 10px;
            `;
            container.appendChild(button);
        }
    });

    return container;
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

function showModal(type) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
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
        animation: fadeIn 0.3s ease;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        border-radius: 15px;
        padding: 30px;
        width: 90%;
        max-width: 500px;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        animation: slideIn 0.3s ease;
    `;

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 20px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
    `;
    closeBtn.addEventListener('click', () => modalOverlay.remove());
    modal.appendChild(closeBtn);

    // Modal content based on type
    const content = createModalContent(type);
    modal.appendChild(content);

    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.remove();
        }
    });
}

function createModalContent(type) {
    const content = document.createElement('div');

    switch(type) {
        case 'contact':
            content.innerHTML = `
                <h2 style="color: #0A1E40; margin-bottom: 20px;">Contact Us</h2>
                <div style="margin-bottom: 20px;">
                    <strong>Phone:</strong> 859-885-4481<br>
                    <strong>Email:</strong> nmckyoffice@gmail.com<br>
                    <strong>Address:</strong> 303 West Maple Street<br>
                    Nicholasville, KY 40356
                </div>
                <form style="display: flex; flex-direction: column; gap: 15px;">
                    <input type="text" placeholder="Your Name" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    <input type="email" placeholder="Your Email" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    <input type="text" placeholder="Subject" style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    <textarea placeholder="Your Message" rows="4" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px; resize: vertical;"></textarea>
                    <button type="submit" style="background: #007bff; color: white; border: none; padding: 15px; border-radius: 25px; font-weight: 600; cursor: pointer;">Send Message</button>
                </form>
            `;
            break;

        case 'login':
            content.innerHTML = `
                <h2 style="color: #0A1E40; margin-bottom: 20px;">Member Login</h2>
                <p style="color: #666; margin-bottom: 20px;">Access your member profile and church resources.</p>
                <form style="display: flex; flex-direction: column; gap: 15px;">
                    <input type="email" placeholder="Email Address" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    <input type="password" placeholder="Password" required style="padding: 12px; border: 2px solid #ddd; border-radius: 5px;">
                    <button type="submit" style="background: #007bff; color: white; border: none; padding: 15px; border-radius: 25px; font-weight: 600; cursor: pointer;">Sign In</button>
                    <div style="text-align: center; margin-top: 10px;">
                        <a href="#" style="color: #007bff; text-decoration: none; font-size: 0.9rem;">Forgot Password?</a>
                        <span style="margin: 0 10px; color: #ddd;">|</span>
                        <a href="#" style="color: #007bff; text-decoration: none; font-size: 0.9rem;">Create Account</a>
                    </div>
                </form>
            `;
            break;
    }

    return content;
}

// Add CSS animations
const footerAnimationStyles = document.createElement('style');
footerAnimationStyles.textContent = `
    @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from { transform: scale(0.9) translateY(-20px); opacity: 0; }
        to { transform: scale(1) translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(footerAnimationStyles);

// Add this to your main initialization
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing initialization code ...
    initFooterNavigation(); // Add this line
});

// CUSTOMIZATION GUIDE FOR FOOTER:

// 1. TO CHANGE FOOTER BEHAVIOR:
//    Edit the footerNavigation object above

// 2. TO ADD SPANISH CONTENT:
//    Expand the spanishNavMenus object

// 3. TO MODIFY MODAL CONTENT:
//    Edit the createModalContent function

// 4. TO ADD NEW FOOTER ITEMS:
//    Add them to the footerNavigation object and HTML