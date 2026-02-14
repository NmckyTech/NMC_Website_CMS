// Staff info data for inline expansion
const staffData = {
    tim: {
        name: "Tim Thompson",
        title: "Senior Pastor",
        photo: "images/staff_tim_thompson.jpg",
        resp: "Leads the church, preaches, and provides spiritual guidance.",
        testimony: "Tim felt called to ministry at a young age and has served faithfully for over 20 years."
    },
    matt: {
        name: "Matt Deitrich",
        title: "Youth Pastor",
        photo: "images/staff_matt_deitrich.png",
        resp: "Oversees youth programs and discipleship for teens.",
        testimony: "Matt's passion is helping young people grow in faith and leadership."
    },
    pamela: {
        name: "Pamela Rosenthal",
        title: "Children's Minister",
        photo: "images/staff_pamela_rosenthal.png",
        resp: "Directs children's ministry and family outreach.",
        testimony: "Pamela loves seeing children discover God's love in creative ways."
    },
    jeremiah: {
        name: "Jeremiah Gutierrez",
        title: "Pastor, Monte de Sion",
        photo: "images/staff_jeremiah_gutierrez.png",
        resp: "Leads the Monte de Sion congregation and Spanish-language outreach.",
        testimony: "Jeremiah's testimony is one of transformation and service to the community."
    },
    debbie: {
        name: "Debbie Mallory",
        title: "Choir Director",
        photo: "images/staff_debbie_mallory.png",
        resp: "Directs the choir and coordinates music for worship.",
        testimony: "Debbie has a heart for worship and loves leading others in song."
    },
    julie: {
        name: "Julie Pattie",
        title: "Organist/Pianist",
        photo: "images/staff_julie_pattie.png",
        resp: "Plays piano and organ for services and special events.",
        testimony: "Julie has played music in churches for decades and finds joy in every note."
    },
    jenna: {
        name: "Jenna Sparks",
        title: "Administrative Assistant",
        photo: "images/staff_jenna_sparks.jpg",
        resp: "Manages church office and supports ministry teams.",
        testimony: "Jenna is grateful to serve and help the church run smoothly."
    }
};

// Render staff cards
const staffOrder = ["tim","matt","pamela","jeremiah","debbie","julie","jenna"];
const staffGrid = document.getElementById('staffGrid');
function renderStaffCards(expandedKey = null) {
    staffGrid.innerHTML = '';
    staffOrder.forEach(key => {
        const info = staffData[key];
        const card = document.createElement('div');
        card.className = 'staff-card' + (expandedKey === key ? ' expanded' : '');
        card.setAttribute('data-staff', key);
        card.innerHTML = `
            <img src="${info.photo}" alt="${info.name}" class="staff-photo">
            <div class="staff-info">
                <div class="staff-name">${info.name}</div>
                <div class="staff-title">${info.title}</div>
            </div>
        `;
        if (expandedKey === key) {
            const details = document.createElement('div');
            details.className = 'staff-details';
            details.innerHTML = `
                <button class="staff-details-close" aria-label="Close">&times;</button>
                <div><span class="staff-details-label">Responsibilities:</span> ${info.resp}</div>
                <div><span class="staff-details-label">Testimony:</span> ${info.testimony}</div>
            `;
            card.appendChild(details);
        }
        staffGrid.appendChild(card);
    });
}

// Initial render
renderStaffCards();

// Handle card click/expand/close
staffGrid.addEventListener('click', function(e) {
    const card = e.target.closest('.staff-card');
    if (!card) return;
    const key = card.getAttribute('data-staff');
    if (!key || !staffData[key]) return;
    // If already expanded and close button clicked, collapse
    if (card.classList.contains('expanded')) {
        if (e.target.classList.contains('staff-details-close')) {
            renderStaffCards();
        }
        return;
    }
    // Expand this card
    renderStaffCards(key);
});
