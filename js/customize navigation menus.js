// EASILY CUSTOMIZABLE NAVIGATION MENU DATA
// Simply edit the text, add/remove items, or change links

const navMenus = {
    // ABOUT MENU - Customize these items for your church
    about: [
        {
            group: ["New Here", "Mission & Vision", "Our Story", "What We Believe"],
            title: "Learn About NMC"
        },
        {
            group: ["Pastor Tim", "Church Staff", "Board Members", "Leadership Team"],
            title: "Our Leadership"
        },
        {
            group: ["Weekly Bulletin", "Church Directory", "Forms & Documents"],
            title: "Resources"
        },
        {
            group: [],
            button: { text: "Contact Us", href: "mailto:nmckyoffice@gmail.com" }
        }
    ],

    // MINISTRIES MENU - Add/remove your actual ministries
    ministries: [
        {
            group: ["Children's Church", "Sunday School", "Vacation Bible School", "Kids Activities"],
            title: "Children's Ministry"
        },
        {
            group: ["Youth Group", "Teen Bible Study", "Mission Trips", "Youth Events"],
            title: "Student Ministry"
        },
        {
            group: ["Adult Bible Study", "Small Groups", "Sunday School Classes"],
            title: "Adult Ministry"
        },
        {
            group: ["United Methodist Women", "United Methodist Men", "Senior Adults"],
            title: "Special Interest Groups"
        },
        {
            group: ["Prayer Chain", "Care Team", "Grief Support", "Hospital Visits"],
            title: "Care Ministry"
        }
    ],

    // SERVE MENU - Your volunteer opportunities
    serve: [
        {
            group: ["Greeters", "Ushers", "Audio/Visual Team", "Worship Team"],
            title: "Sunday Morning Teams"
        },
        {
            group: ["Food Pantry", "Community Garden", "Homeless Ministry", "Local Outreach"],
            title: "Local Missions"
        },
        {
            group: ["Mission Trips", "Global Partners", "Missionary Support", "UMCOR"],
            title: "Global Missions"
        },
        {
            group: ["Special Events", "Holiday Services", "Community Events"],
            title: "Event Volunteers"
        },
        {
            group: [],
            button: { text: "Volunteer Today", href: "#volunteer-form" }
        }
    ],

    // GIVING MENU - Your giving options
    giving: [
        {
            group: ["Online Giving Portal", "Text to Give", "Mobile App Giving"],
            title: "Digital Giving"
        },
        {
            group: ["Weekly Tithes", "Building Fund", "Mission Offerings", "Special Collections"],
            title: "Ways to Give"
        },
        {
            group: ["Legacy Giving", "Memorial Gifts", "Honor Gifts", "Planned Giving"],
            title: "Special Gifts"
        },
        {
            group: ["Financial Peace University", "Stewardship Classes", "Giving Guide"],
            title: "Financial Resources"
        },
        {
            group: [],
            button: { text: "Give Online Now", href: "#give-online" }
        }
    ],

    // EVENTS MENU - Your church events
    events: [
        {
            group: ["Sunday Worship", "Wednesday Night", "Sunday School", "Prayer Meeting"],
            title: "Weekly Events"
        },
        {
            group: ["Church Dinners", "Concerts", "Guest Speakers", "Community Events"],
            title: "Special Events"
        },
        {
            group: ["Men's Retreat", "Women's Retreat", "Youth Retreat", "Church Camp"],
            title: "Retreats & Camps"
        },
        {
            group: ["Easter Services", "Christmas Eve", "Good Friday", "Advent"],
            title: "Holiday Services"
        },
        {
            group: [],
            button: { text: "View Full Calendar", href: "#calendar" }
        }
    ]
};

// HOW TO ADD A COMPLETELY NEW NAVIGATION ITEM:

// STEP 1: Add the link to your HTML
// <a href="#" class="nav-link" data-menu="worship">Worship</a>

// STEP 2: Add the menu data here
const exampleNewMenu = {
    worship: [
        {
            group: ["Traditional Service", "Contemporary Service", "Online Worship"],
            title: "Service Options"
        },
        {
            group: ["Choir", "Praise Team", "Musicians", "Audio/Visual"],
            title: "Worship Teams"
        },
        {
            group: ["Sermon Series", "Past Sermons", "Worship Resources"],
            title: "Resources"
        },
        {
            group: [],
            button: { text: "Join Worship Team", href: "#worship-volunteer" }
        }
    ]
};

// STEP 3: Add it to the main navMenus object
// Just add: worship: exampleNewMenu.worship,

// EASY CUSTOMIZATION EXAMPLES:

// TO CHANGE A MENU ITEM:
// Change "New Here" to "First Time Visitor"
// Change "Pastor Tim" to your actual pastor's name

// TO ADD A MENU ITEM:
// Add it to any group array: ["New Item", "Another Item"]

// TO REMOVE A MENU ITEM:
// Just delete it from the group array

// TO CHANGE A BUTTON:
// Update the button object: { text: "New Text", href: "new-link" }

// TO ADD A NEW SECTION:
// Add a new object to any menu array:
// { group: ["Item 1", "Item 2"], title: "New Section" }

// REAL EXAMPLE - Let's say you want to customize the About menu for your church:
const customizedAboutMenu = [
    {
        group: ["First Time Here?", "Our Mission", "Methodist Heritage", "Church History"],
        title: "About Nicholasville Methodist"
    },
    {
        group: ["Rev. Tim Johnson", "Administrative Staff", "Music Director", "Board of Trustees"],
        title: "Our Staff & Leadership"
    },
    {
        group: ["This Week's Bulletin", "Monthly Newsletter", "Contact Directory", "Room Reservations"],
        title: "Church Resources"
    },
    {
        group: [],
        button: { text: "Schedule a Visit", href: "mailto:nmckyoffice@gmail.com?subject=Schedule a Visit" }
    }
];

// Then replace the about section in navMenus:
// about: customizedAboutMenu,

// SERVICE TIMES - You can also customize these:
const serviceInfo = {
    times: [
        { service: "Traditional Worship", time: "8:30 AM", description: "Classic hymns and traditional liturgy" },
        { service: "Contemporary Worship", time: "10:30 AM", description: "Modern music and relaxed atmosphere" },
        { service: "Sunday School", time: "9:30 AM", description: "All ages - classes for everyone" },
        { service: "Wednesday Night", time: "6:30 PM", description: "Bible study and fellowship" }
    ],
    location: {
        address: "303 West Maple Street, Nicholasville, KY 40356",
        phone: "859-885-4481",
        directions: "https://maps.google.com/?q=303+West+Maple+Street+Nicholasville+KY"
    }
};

// SUMMARY:
// - I created comprehensive menus based on typical Methodist church needs
// - You can easily customize EVERY item to match your specific church
// - You can add entirely new navigation sections
// - Everything is clearly organized and labeled for easy editing
// - Just change the text to match your actual ministries, staff, events, etc.