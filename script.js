// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBLz7-sWUuMvIxvB0dQgrZkx13bsDEmafY",
    authDomain: "zimconnect-ddcfe.firebaseapp.com",
    projectId: "zimconnect-ddcfe",
    storageBucket: "zimconnect-ddcfe.firebasestorage.app",
    messagingSenderId: "964798095540",
    appId: "1:964798095540:web:ef1a98ed3b4af9903fb7e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

        title: 'Junior Digital Marketing Specialist',
        company: 'ZimTech Solutions',
        location: 'Harare',
        type: 'Full-time',
        salary: '$600 - $900 per month',
        description: 'We are looking for a passionate Junior Digital Marketing Specialist to join our growing team. You will assist in developing and executing digital marketing campaigns across various channels.',
        requirements: ['Bachelor\'s degree in Marketing or related field', 'Basic understanding of SEO/SEM', 'Excellent communication skills', 'Ability to work in a team'],
        datePosted: '2025-01-10',
        expirationDate: '2025-02-10'
    },
    {
        id: 'job2',
        title: 'Data Entry Clerk',
        company: 'QuickServe Logistics',
        location: 'Bulawayo',
        type: 'Part-time',
        salary: '$300 - $500 per month',
        description: 'Seeking a meticulous Data Entry Clerk to accurately input and maintain data in our systems. Attention to detail is crucial.',
        requirements: ['High school diploma', 'Proficient in Microsoft Office (Excel, Word)', 'Fast and accurate typing skills', 'Strong organizational abilities'],
        datePosted: '2025-01-08',
        expirationDate: '2025-02-08'
    },
    {
        id: 'job3',
        title: 'Mobile App Developer (Intern)',
        company: 'InnovateZim',
        location: 'Harare',
        type: 'Internship',
        salary: 'Stipend provided',
        description: 'An exciting opportunity for a keen intern to learn and contribute to mobile app development projects. Basic programming knowledge is a plus.',
        requirements: ['Currently studying Computer Science or related field', 'Basic understanding of programming (e.g., Java, Kotlin, Swift)', 'Eagerness to learn and adapt'],
        datePosted: '2025-01-05',
        expirationDate: '2025-02-05'
    },
    {
        id: 'job4',
        title: 'Agricultural Field Officer',
        company: 'GreenHarvest Co.',
        location: 'Mutare',
        type: 'Full-time',
        salary: '$700 - $1000 per month',
        description: 'Responsible for supporting farmers with best practices, crop management, and sustainable agriculture techniques in rural areas.',
        requirements: ['Diploma/Degree in Agriculture', 'Experience in field work', 'Good communication with rural communities', 'Valid driver\'s license'],
        datePosted: '2025-01-03',
        expirationDate: '2025-02-03'
    },
    {
        id: 'job5',
        title: 'Freelance Graphic Designer',
        company: 'Various Clients (via Zim Connect)',
        location: 'Remote',
        type: 'Gig',
        salary: 'Project-based',
        description: 'Seeking creative graphic designers for various short-term projects including logo design, social media graphics, and branding materials.',
        requirements: ['Proficiency in design software (e.g., Adobe Photoshop, Illustrator)', 'Strong portfolio of previous work', 'Ability to meet deadlines', 'Good communication skills'],
        datePosted: '2025-01-01',
        expirationDate: '2025-02-01'
    },
    {
        id: 'job6',
        title: 'Customer Service Representative',
        company: 'Connect Telecom',
        location: 'Harare',
        type: 'Full-time',
        salary: '$550 - $750 per month',
        description: 'Provide excellent customer support, resolve inquiries, and ensure customer satisfaction via phone and email.',
        requirements: ['High school diploma or equivalent', 'Strong verbal and written communication skills', 'Problem-solving abilities', 'Customer-oriented attitude'],
        datePosted: '2024-12-28',
        expirationDate: '2025-01-28'
    },
    {
        id: 'job7',
        title: 'Electrician Apprentice',
        company: 'PowerFix Services',
        location: 'Gweru',
        type: 'Apprenticeship',
        salary: 'Allowance provided',
        description: 'Learn the trade of electrical installation and repair under the guidance of experienced electricians.',
        requirements: ['Basic understanding of electrical concepts', 'Manual dexterity', 'Willingness to learn and follow instructions', 'Safety conscious'],
        datePosted: '2024-12-25',
        expirationDate: '2025-01-25'
    },
    {
        id: 'job8',
        title: 'Sales Assistant',
        company: 'Retail Hub',
        location: 'Kwekwe',
        type: 'Part-time',
        salary: '$250 - $400 per month',
        description: 'Assist customers with purchases, maintain store cleanliness, and manage inventory.',
        requirements: ['Good interpersonal skills', 'Friendly and approachable demeanor', 'Basic math skills', 'Reliable and punctual'],
        datePosted: '2024-12-20',
        expirationDate: '2025-01-20'
    }
];

// Mock Data for Learn & Grow Courses
const learnGrowCourses = [
    {
        icon: 'fas fa-laptop-code',
        title: 'Digital Literacy Basics',
        description: 'Master essential computer skills, internet navigation, and online safety.'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Introduction to Mobile App Dev',
        description: 'Learn the fundamentals of building simple mobile applications for Android.'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Personal Financial Management',
        description: 'Understand budgeting, saving, and basic investment principles.'
    },
    {
        icon: 'fas fa-store',
        title: 'Starting Your Small Business',
        description: 'A practical guide to developing a business idea and getting started.'
    },
    {
        icon: 'fas fa-comments',
        title: 'Effective Communication Skills',
        description: 'Improve your verbal and written communication for the workplace.'
    },
    {
        icon: 'fas fa-file-alt',
        title: 'CV & Interview Preparation',
        description: 'Craft a winning CV and ace your job interviews with confidence.'
    }
];

// Mock Data for Entrepreneurship Resources
const entrepreneurshipResources = [
    {
        icon: 'fas fa-file-invoice',
        title: 'Business Plan Template',
        description: 'Download a comprehensive template to structure your business idea.'
    },
    {
        icon: 'fas fa-handshake',
        title: 'Mentorship Program',
        description: 'Connect with experienced entrepreneurs for guidance and advice.'
    },
    {
        icon: 'fas fa-dollar-sign',
        title: 'Funding Opportunities',
        description: 'Discover grants, loans, and investment options for your startup.'
    },
    {
        icon: 'fas fa-chart-pie',
        title: 'Market Research Guide',
        description: 'Learn how to analyze your target market and competition effectively.'
    }
];

// Mock Data for Advertisements
const advertisements = [
    {
        id: 'ad1',
        title: 'Boost Your Business with ZimWeb Designs!',
        description: 'Professional website design and digital marketing services tailored for Zimbabwean businesses. Get your online presence today!',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        contact: 'info@zimwebdesigns.co.zw',
        link: '#'
    },
    {
        id: 'ad2',
        title: 'Fresh Produce Delivered to Your Door!',
        description: 'Get farm-fresh fruits and vegetables delivered straight from local Zimbabwean farms. Healthy eating made easy!',
        image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        contact: '+263 771 234 567',
        link: '#'
    },
    {
        id: 'ad3',
        title: 'Affordable Online Courses by EduZim',
        description: 'Upskill yourself with certified online courses in IT, business, and more. Flexible learning for a brighter future!',
        image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        contact: 'enroll@eduzim.org',
        link: '#'
    },
    {
        id: 'ad4',
        title: 'Handcrafted Zimbabwean Art & Crafts',
        description: 'Discover unique, authentic Zimbabwean art pieces and crafts. Support local artisans!',
        image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        contact: 'sales@zimartisans.com',
        link: '#'
    }
];

// Zimbabwean Public Holidays (2025)
const publicHolidays = [
    { date: 'January 1', name: 'New Year\'s Day' },
    { date: 'April 18', name: 'Independence Day' },
    { date: 'May 1', name: 'Workers\' Day' },
    { date: 'May 25', name: 'Africa Day' },
    { date: 'August 11', name: 'Heroes\' Day' },
    { date: 'August 12', name: 'Defence Forces National Day' },
    { date: 'December 22', name: 'Unity Day' },
    { date: 'December 25', name: 'Christmas Day' },
    { date: 'December 26', name: 'Boxing Day' }
];

// World Heritage Sites in Zimbabwe
const heritageSites = [
    {
        id: 'whs1',
        name: 'Great Zimbabwe National Monument',
        image: 'https://images.pexels.com/photos/12935073/pexels-photo-12935073.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'The ruins of Great Zimbabwe are a testament to a powerful and prosperous civilization that flourished between the 11th and 15th centuries. It was the capital of the Kingdom of Zimbabwe during the country\'s Late Iron Age. The site is spread over a large area and is divided into three main architectural zones: the Hill Complex, the Valley Complex, and the Great Enclosure. The Great Enclosure, with its impressive conical tower and massive dry-stone walls, is particularly notable. It is a symbol of national pride and a key archaeological site in Southern Africa.',
        location: 'Masvingo Province'
    },
    {
        id: 'whs2',
        name: 'Mana Pools National Park, Sapi and Chewore Safari Areas',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'Situated in the lower Zambezi River basin, Mana Pools is renowned for its wild beauty and rich wildlife. The area is characterized by the Zambezi River, its floodplains, and four large pools (Mana Pools) that are remnants of ox-bow lakes. It is a prime location for walking safaris and canoe trips, offering incredible close-up encounters with elephants, lions, buffalo, and a wide variety of birdlife. The pristine wilderness and diverse ecosystems make it a truly special natural heritage site.',
        location: 'Mashonaland West Province'
    },
    {
        id: 'whs3',
        name: 'Khami Ruins National Monument',
        image: 'https://images.pexels.com/photos/12935073/pexels-photo-12935073.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'The Khami Ruins, located west of Bulawayo, are the remains of a city that succeeded Great Zimbabwe as the capital of the Torwa dynasty (c. 1450–1650). The site features impressive stone walls, terraces, and platforms, showcasing a unique architectural style. It is an important archaeological site that provides insights into the post-Great Zimbabwe period and the development of the region\'s complex societies.',
        location: 'Matabeleland North Province'
    },
    {
        id: 'whs4',
        name: 'Matobo Hills',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'The Matobo Hills are an area of granite kopjes and wooded valleys, home to a rich array of flora and fauna, including a significant population of rhinos. The area is also culturally significant, with numerous rock art sites dating back to the Stone Age. It is a spiritual and historical landscape for the local Ndebele people, and the burial place of Cecil John Rhodes. The unique geological formations and cultural heritage make it a mixed natural and cultural World Heritage Site.',
        location: 'Matabeleland South Province'
    },
    {
        id: 'whs5',
        name: 'Mosi-oa-Tunya / Victoria Falls (shared with Zambia)',
        image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'One of the Seven Natural Wonders of the World, Victoria Falls is a spectacular waterfall on the Zambezi River, forming the border between Zimbabwe and Zambia. Known locally as "Mosi-oa-Tunya" (The Smoke that Thunders), the falls plunge into a basalt gorge, creating a mist that can be seen for miles. The surrounding rainforest, sustained by the spray, is home to unique plant and animal species. It offers a wide range of adventure activities and breathtaking views.',
        location: 'Matabeleland North Province'
    }
];

// Popular Tourist Attractions in Zimbabwe
const touristAttractions = [
    {
        id: 'ta1',
        name: 'Victoria Falls',
        image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'The world-renowned waterfall, offering activities like bungee jumping, white-water rafting, and scenic flights.',
        location: 'Victoria Falls'
    },
    {
        id: 'ta2',
        name: 'Hwange National Park',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'Zimbabwe\'s largest game reserve, famous for its large elephant herds and diverse wildlife, perfect for safaris.',
        location: 'Hwange'
    },
    {
        id: 'ta3',
        name: 'Great Zimbabwe National Monument',
        image: 'https://images.pexels.com/photos/12935073/pexels-photo-12935073.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'Explore the ancient stone city, a UNESCO World Heritage Site, and marvel at its historical significance.',
        location: 'Masvingo'
    },
    {
        id: 'ta4',
        name: 'Mana Pools National Park',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'A remote and pristine wilderness area, ideal for walking safaris and canoeing, with abundant wildlife.',
        location: 'Lower Zambezi Valley'
    },
    {
        id: 'ta5',
        name: 'Matobo Hills National Park',
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'Discover unique rock formations, ancient San rock art, and a sanctuary for rhinos.',
        location: 'Matobo'
    },
    {
        id: 'ta6',
        name: 'Eastern Highlands (Nyanga, Vumba, Chimanimani)',
        image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'A picturesque region with mountains, forests, waterfalls, and tea plantations, offering hiking and scenic drives.',
        location: 'Manicaland Province'
    },
    {
        id: 'ta7',
        name: 'Lake Kariba',
        image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'One of the world\'s largest man-made lakes, known for houseboating, fishing (especially tiger fish), and stunning sunsets.',
        location: 'Kariba'
    },
    {
        id: 'ta8',
        name: 'Chinhoyi Caves National Park',
        image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        description: 'Explore a series of limestone and dolomite caves, including the captivating "Sleeping Pool" with its deep blue waters.',
        location: 'Chinhoyi'
    }
];

// Tertiary Institutions in Zimbabwe
const tertiaryInstitutions = [
    { name: 'University of Zimbabwe', type: 'University', location: 'Harare' },
    { name: 'National University of Science and Technology (NUST)', type: 'University', location: 'Bulawayo' },
    { name: 'Midlands State University (MSU)', type: 'University', location: 'Gweru' },
    { name: 'Great Zimbabwe University (GZU)', type: 'University', location: 'Masvingo' },
    { name: 'Bindura University of Science Education (BUSE)', type: 'University', location: 'Bindura' },
    { name: 'Chinhoyi University of Technology (CUT)', type: 'University', location: 'Chinhoyi' },
    { name: 'Africa University', type: 'University', location: 'Mutare' },
    { name: 'Harare Institute of Technology (HIT)', type: 'University', location: 'Harare' },
    { name: 'Lupane State University (LSU)', type: 'University', location: 'Lupane' },
    { name: 'Zimbabwe Open University (ZOU)', type: 'University', location: 'National (Distance Learning)' },
    { name: 'Women\'s University in Africa (WUA)', type: 'University', location: 'Harare' },
    { name: 'Catholic University of Zimbabwe (CUZ)', type: 'University', location: 'Harare' },
    { name: 'Harare Polytechnic', type: 'Polytechnic', location: 'Harare' },
    { name: 'Bulawayo Polytechnic', type: 'Polytechnic', location: 'Bulawayo' },
    { name: 'Mutare Polytechnic', type: 'Polytechnic', location: 'Mutare' },
    { name: 'Gweru Polytechnic', type: 'Polytechnic', location: 'Gweru' },
    { name: 'Kwekwe Polytechnic', type: 'Polytechnic', location: 'Kwekwe' },
    { name: 'Masvingo Polytechnic', type: 'Polytechnic', location: 'Masvingo' },
    { name: 'United College of Education (UCE)', type: 'Teachers College', location: 'Bulawayo' },
    { name: 'Hillside Teachers College', type: 'Teachers College', location: 'Bulawayo' },
    { name: 'Mutare Teachers College', type: 'Teachers College', location: 'Mutare' },
    { name: 'Gweru Teachers College', type: 'Teachers College', location: 'Gweru' },
    { name: 'Morgan Zintec College', type: 'Teachers College', location: 'Harare' },
    { name: 'Belvedere Technical Teachers College', type: 'Teachers College', location: 'Harare' },
    { name: 'Speciss College', type: 'College', location: 'Harare/Bulawayo' },
    { name: 'Trust Academy', type: 'College', location: 'Harare/Bulawayo' },
    { name: 'Institute of Commercial Management (ICM) Centres', type: 'College', location: 'Various' }
];

// Mock Data for Latest News & Updates
const latestNews = [
    {
        id: 'news1',
        title: 'Zim Connect Launches New Skill Development Workshops',
        date: '2025-01-15',
        summary: 'We are excited to announce a series of new workshops focused on digital marketing and graphic design, starting next month. Register now to secure your spot!',
        link: '#'
    },
    {
        id: 'news2',
        title: 'Partnership with Local Tech Incubator Announced',
        date: '2025-01-10',
        summary: 'Zim Connect has partnered with "TechHub Harare" to provide mentorship and seed funding opportunities for promising youth startups.',
        link: '#'
    },
    {
        id: 'news3',
        title: 'Success Story: From Intern to Full-Time at ZimTech',
        date: '2025-01-05',
        summary: 'Read about Sarah\'s journey, who secured a full-time position at ZimTech Solutions after completing her internship found through Zim Connect.',
        link: '#'
    }
];

// Mock Data for Upcoming Events
const upcomingEvents = [
    {
        id: 'event1',
        title: 'Youth Career Fair 2025',
        date: '2025-02-15',
        location: 'Harare International Conference Centre',
        description: 'Connect with leading employers, attend career talks, and explore job opportunities across various sectors.',
        link: '#'
    },
    {
        id: 'event2',
        title: 'Entrepreneurship Bootcamp: Idea to Launch',
        date: '2025-02-20',
        location: 'Online (Zoom)',
        description: 'A 3-day intensive bootcamp designed to help aspiring entrepreneurs develop and launch their business ideas.',
        link: '#'
    },
    {
        id: 'event3',
        title: 'Digital Skills for the Future Webinar',
    }
]
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    console.log('🚀 Zim Connect initialized successfully!');
    
    // Load initial data
    loadNewsUpdates();
    loadUpcomingEvents();
    loadJobListings();
    loadAdvertisements();
    loadLearnGrowCards();
    loadEntrepreneurshipCards();
    loadPublicHolidays();
    loadHeritageSites();
    loadTouristAttractions();
    loadTertiaryInstitutions();
    
    // Set current date for job posting
    const today = new Date().toISOString().split('T')[0];
    const datePostedInput = document.getElementById('employer-date-posted');
    if (datePostedInput) {
        datePostedInput.value = today;
    }
    
    
    // Set up navigation
    setupNavigation();
    
    // Set up authentication
    setupAuthentication();
    
    // Load initial content
    loadInitialContent();
    
    // Set up forms
    setupForms();
    
    // Set up mobile navigation
    setupMobileNavigation();
    
    // Monitor authentication state
    monitorAuthState();
});

// Initialize the application
function initializeApp() {
    // Set current date for job posting form
    const today = new Date().toISOString().split('T')[0];
    const datePostedInput = document.getElementById('employer-date-posted');
    if (datePostedInput) {
        datePostedInput.value = today;
    }
    
    // Show home section by default
    showSection('home');
}

// Setup navigation functionality
function setupNavigation() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-target');
            
            if (targetSection) {
                // Check if section requires authentication
                if (isProtectedSection(targetSection)) {
                    if (!isLoggedIn) {
                        showAuthOverlay();
                        return;
                    }
                }
                
                // Hide auth overlay if it's visible
                hideAuthOverlay();
                
                // Show the target section
                showSection(targetSection);
                
                // Close mobile navigation if open
                closeMobileNavigation();
            }
        });
    });
    
    // Setup back to home buttons
    const backToHomeButtons = document.querySelectorAll('.back-to-home-btn');
    backToHomeButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection('home');
        });
    });
}

// Check if a section requires authentication
function isProtectedSection(sectionId) {
    const protectedSections = [
        'find-jobs', 'post-job', 'advertise-with-us', 'learn-grow', 
        'entrepreneurship-hub', 'my-profile', 'enhanced-profiles',
        'interactive-learning', 'community-networking', 
        'entrepreneurship-deep-dive', 'data-analytics'
    ];
    return protectedSections.includes(sectionId);
}

// Show authentication overlay
function showAuthOverlay() {
    const authOverlay = document.getElementById('auth-overlay');
    if (authOverlay) {
        authOverlay.style.display = 'flex';
    }
}

// Hide authentication overlay
function hideAuthOverlay() {
    const authOverlay = document.getElementById('auth-overlay');
    if (authOverlay) {
        authOverlay.style.display = 'none';
    }
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('.page-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load section-specific content
        loadSectionContent(sectionId);
    }
}

// Load content for specific sections
function loadSectionContent(sectionId) {
    switch(sectionId) {
        case 'home':
            loadNewsAndEvents();
            break;
        case 'find-jobs':
            loadJobListings();
            break;
        case 'post-job':
            loadMyPostedJobs();
            break;
        case 'advertise-with-us':
            loadAdvertisements();
            break;
        case 'learn-grow':
            loadLearnGrowCourses();
            break;
        case 'entrepreneurship-hub':
            loadEntrepreneurshipResources();
            break;
        case 'discover-zimbabwe':
            loadDiscoverZimbabweContent();
            break;
        case 'my-profile':
            loadUserProfile();
            break;
    }
}

// Setup authentication functionality
function setupAuthentication() {
    // Setup auth overlay buttons
    const authOverlayButtons = document.querySelectorAll('.auth-overlay .nav-link');
    authOverlayButtons.forEach(button => {
        button.addEventListener('click', function() {
            hideAuthOverlay();
            const targetSection = this.getAttribute('data-target');
            showSection(targetSection);
        });
    });
    
    // Setup forgot password link
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('password-reset');
        });
    }
}

// Monitor Firebase authentication state
function monitorAuthState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            isLoggedIn = true;
            currentUser = {
                uid: user.uid,
                email: user.email,
                name: user.displayName || user.email.split('@')[0]
            };
            updateAuthUI(true);
            console.log("✅ User signed in:", user.email);
        } else {
            // User is signed out
            isLoggedIn = false;
            currentUser = null;
            updateAuthUI(false);
            console.log("⛔ User signed out");
        }
    });
}

// Update authentication UI
function updateAuthUI(loggedIn) {
    const authText = document.getElementById('auth-text');
    const mobileAuthText = document.getElementById('mobile-auth-text');
    const authDropdown = document.getElementById('auth-dropdown');
    const mobileAuthDropdown = document.getElementById('mobile-auth-dropdown');
    
    if (loggedIn && currentUser) {
        // Update desktop auth
        if (authText) {
            authText.textContent = currentUser.name;
        }
        if (authDropdown) {
            authDropdown.innerHTML = `
                <li><a href="#" class="nav-link" data-target="my-profile">My Profile</a></li>
                <li><a href="#" class="nav-link" id="logout-btn">Logout</a></li>
            `;
        }
        
        // Update mobile auth
        if (mobileAuthText) {
            mobileAuthText.textContent = currentUser.name;
        }
        if (mobileAuthDropdown) {
            mobileAuthDropdown.innerHTML = `
                <li><a href="#" class="nav-link" data-target="my-profile">My Profile</a></li>
                <li><a href="#" class="nav-link" id="mobile-logout-btn">Logout</a></li>
            `;
        }
        
        // Setup logout functionality
        setupLogoutButtons();
        
        // Update profile information
        updateProfileInfo();
        
    } else {
        // Reset to login state
        if (authText) {
            authText.textContent = 'Login';
        }
        if (authDropdown) {
            authDropdown.innerHTML = `
                <li><a href="#" class="nav-link" data-target="sign-in">Sign In</a></li>
                <li><a href="#" class="nav-link" data-target="sign-up">Sign Up</a></li>
            `;
        }
        
        if (mobileAuthText) {
            mobileAuthText.textContent = 'Login';
        }
        if (mobileAuthDropdown) {
            mobileAuthDropdown.innerHTML = `
                <li><a href="#" class="nav-link" data-target="sign-in">Sign In</a></li>
                <li><a href="#" class="nav-link" data-target="sign-up">Sign Up</a></li>
            `;
        }
        
        // Re-setup navigation for new auth links
        setupNavigation();
    }
}

// Setup logout buttons
function setupLogoutButtons() {
    const logoutBtn = document.getElementById('logout-btn');
    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    if (mobileLogoutBtn) {
        mobileLogoutBtn.addEventListener('click', handleLogout);
    }
}

// Handle logout
function handleLogout(e) {
    e.preventDefault();
    
    signOut(auth)
        .then(() => {
            showSection('home');
            showMessage('Logged out successfully!', 'success');
        })
        .catch((error) => {
            console.error('Logout error:', error);
            showMessage('Error logging out: ' + error.message, 'error');
        });
}

// Update profile information
function updateProfileInfo() {
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    
    if (currentUser) {
        if (profileName) {
            profileName.textContent = currentUser.name;
        }
        if (profileEmail) {
            profileEmail.textContent = `Email: ${currentUser.email}`;
        }
    }
}

// Setup forms
function setupForms() {
    // Sign up form
    const signUpForm = document.getElementById('sign-up-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUp);
    }
    
    // Sign in form
    const signInForm = document.getElementById('sign-in-form');
    if (signInForm) {
        signInForm.addEventListener('submit', handleSignIn);
    }
    
    // Password reset form
    const passwordResetForm = document.getElementById('password-reset-form');
    if (passwordResetForm) {
        passwordResetForm.addEventListener('submit', handlePasswordReset);
    }
    
    // Job posting form
    const postJobForm = document.getElementById('post-job-form');
    if (postJobForm) {
        postJobForm.addEventListener('submit', handleJobPost);
    }
    
    // Advertisement request form
    const advertiseForm = document.getElementById('advertise-request-form');
    if (advertiseForm) {
        advertiseForm.addEventListener('submit', handleAdvertiseRequest);
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-us-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Show advertise form button
    const showAdvertiseFormBtn = document.getElementById('show-advertise-form-btn');
    if (showAdvertiseFormBtn) {
        showAdvertiseFormBtn.addEventListener('click', function() {
            const form = document.getElementById('advertise-request-form');
            if (form) {
                form.classList.toggle('hidden');
            }
        });
    }
    
    // Show contact form button
    const showContactFormBtn = document.getElementById('show-contact-form-btn');
    if (showContactFormBtn) {
        showContactFormBtn.addEventListener('click', function() {
            const form = document.getElementById('contact-us-form');
            if (form) {
                form.classList.toggle('hidden');
            }
        });
    }
    
    // Job search and filters
    const applyFiltersBtn = document.getElementById('apply-job-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyJobFilters);
    }
}

// Handle sign up
function handleSignUp(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const userType = document.querySelector('input[name="user-type"]:checked').value;
    
    // Validation
    if (password !== confirmPassword) {
        showAuthMessage('signup', 'Passwords do not match!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showAuthMessage('signup', 'Password must be at least 6 characters long!', 'error');
        return;
    }
    
    // Create user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Store additional user info locally
            localStorage.setItem('userType', userType);
            localStorage.setItem('userName', name);
            
            showAuthMessage('signup', 'Account created successfully! Redirecting...', 'success');
            
            // Redirect to home after 2 seconds
            setTimeout(() => {
                showSection('home');
            }, 2000);
        })
        .catch((error) => {
            console.error('Signup error:', error);
            showAuthMessage('signup', 'Signup error: ' + error.message, 'error');
        });
}

// Handle sign in
function handleSignIn(e) {
    e.preventDefault();
    
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showAuthMessage('signin', 'Signed in successfully! Redirecting...', 'success');
            
            // Redirect to home after 2 seconds
            setTimeout(() => {
                showSection('home');
            }, 2000);
        })
        .catch((error) => {
            console.error('Signin error:', error);
            showAuthMessage('signin', 'Sign in error: ' + error.message, 'error');
        });
}

// Handle password reset
function handlePasswordReset(e) {
    e.preventDefault();
    
    const email = document.getElementById('reset-email').value;
    
    sendPasswordResetEmail(auth, email)
        .then(() => {
            showAuthMessage('reset', 'Password reset email sent! Check your inbox.', 'success');
        })
        .catch((error) => {
            console.error('Password reset error:', error);
            showAuthMessage('reset', 'Reset error: ' + error.message, 'error');
        });
}

// Show authentication messages
function showAuthMessage(formType, message, type) {
    const messageElement = document.getElementById(`${formType}-message`);
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `auth-message ${type}`;
        messageElement.classList.remove('hidden');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageElement.classList.add('hidden');
        }, 5000);
    }
}

// Handle job posting
function handleJobPost(e) {
    e.preventDefault();
    
    if (!isLoggedIn) {
        showAuthOverlay();
        return;
    }
    
    const jobData = {
        id: 'job' + Date.now(),
        title: document.getElementById('employer-job-title').value,
        company: document.getElementById('employer-company-name').value,
        location: document.getElementById('employer-job-location').value,
        type: document.getElementById('employer-job-type').value,
        salary: document.getElementById('employer-job-salary').value,
        description: document.getElementById('employer-job-description').value,
        requirements: document.getElementById('employer-job-requirements').value.split(',').map(req => req.trim()),
        datePosted: document.getElementById('employer-date-posted').value,
        expirationDate: document.getElementById('employer-expiration-date').value,
        postedBy: currentUser.email
    };
    
    // Add to jobs array and my posted jobs
    jobs.unshift(jobData);
    myPostedJobs.unshift(jobData);
    
    // Reset form
    e.target.reset();
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('employer-date-posted').value = today;
    
    // Reload job listings
    loadJobListings();
    loadMyPostedJobs();
    
    showMessage('Job posted successfully!', 'success');
}

// Handle advertisement request
function handleAdvertiseRequest(e) {
    e.preventDefault();
    
    // Show success message
    const messageElement = document.getElementById('ad-request-message');
    if (messageElement) {
        messageElement.classList.remove('hidden');
    }
    
    // Reset form
    e.target.reset();
    
    // Hide form after submission
    setTimeout(() => {
        const form = document.getElementById('advertise-request-form');
        if (form) {
            form.classList.add('hidden');
        }
    }, 3000);
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    
    // Show success message
    const messageElement = document.getElementById('contact-message-status');
    if (messageElement) {
        messageElement.textContent = 'Message sent successfully! We will get back to you soon.';
        messageElement.classList.remove('hidden');
    }
    
    // Reset form
    e.target.reset();
    
    // Hide form after submission
    setTimeout(() => {
        const form = document.getElementById('contact-us-form');
        if (form) {
            form.classList.add('hidden');
        }
    }, 3000);
}

// Setup mobile navigation
function setupMobileNavigation() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }
    
    // Setup mobile dropdown toggles
    const mobileDropdownTitles = document.querySelectorAll('.mobile-dropdown-title');
    mobileDropdownTitles.forEach(title => {
        title.addEventListener('click', function() {
            const dropdown = this.nextElementSibling;
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
}

// Close mobile navigation
function closeMobileNavigation() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.remove('active');
    }
}

// Load initial content
function loadInitialContent() {
    loadNewsAndEvents();
    loadJobListings();
    loadLearnGrowCourses();
    loadEntrepreneurshipResources();
    loadAdvertisements();
    loadDiscoverZimbabweContent();
}

// Load news and events for home page
function loadNewsAndEvents() {
    // Load latest news
    const newsContainer = document.getElementById('news-updates-list');
    if (newsContainer) {
        newsContainer.innerHTML = latestNews.map(news => `
            <div class="news-card">
                <h4>${news.title}</h4>
                <p class="news-date">${formatDate(news.date)}</p>
                <p>${news.summary}</p>
                <a href="${news.link}" class="btn btn-secondary">Read More</a>
            </div>
        `).join('');
    }
    
    // Load upcoming events
    const eventsContainer = document.getElementById('upcoming-events-list');
    if (eventsContainer) {
        eventsContainer.innerHTML = upcomingEvents.map(event => `
            <div class="event-card">
                <h4>${event.title}</h4>
                <p class="event-date">${formatDate(event.date)}</p>
                <p class="event-location">${event.location}</p>
                <p>${event.description}</p>
                <a href="${event.link}" class="btn btn-primary">Learn More</a>
            </div>
        `).join('');
    }
}

// Load job listings
function loadJobListings() {
    const jobContainer = document.getElementById('job-listings');
    if (jobContainer) {
        jobContainer.innerHTML = jobs.map(job => `
            <div class="job-card">
                <h3>${job.title}</h3>
                <p><strong>${job.company}</strong> - ${job.location}</p>
                <p><strong>Type:</strong> ${job.type}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <p>${job.description.substring(0, 150)}...</p>
                <button class="btn btn-primary" onclick="showJobDetails('${job.id}')">View Details</button>
            </div>
        `).join('');
    }
}

// Load my posted jobs
function loadMyPostedJobs() {
    const container = document.getElementById('my-posted-jobs');
    if (container) {
        if (myPostedJobs.length === 0) {
            container.innerHTML = '<p class="no-applications">No jobs posted yet.</p>';
        } else {
            container.innerHTML = myPostedJobs.map(job => `
                <div class="job-card">
                    <h3>${job.title}</h3>
                    <p><strong>${job.company}</strong> - ${job.location}</p>
                    <p><strong>Type:</strong> ${job.type}</p>
                    <p><strong>Posted:</strong> ${formatDate(job.datePosted)}</p>
                    <p><strong>Expires:</strong> ${formatDate(job.expirationDate)}</p>
                    <button class="btn btn-secondary" onclick="editJob('${job.id}')">Edit</button>
                    <button class="btn btn-warning" onclick="deleteJob('${job.id}')">Delete</button>
                </div>
            `).join('');
        }
    }
}

// Load learn & grow courses
function loadLearnGrowCourses() {
    const container = document.getElementById('learn-grow-cards');
    if (container) {
        container.innerHTML = learnGrowCourses.map(course => `
            <div class="course-card">
                <i class="${course.icon} card-icon"></i>
                <h3 class="card-title">${course.title}</h3>
                <p class="card-description">${course.description}</p>
                <button class="btn btn-primary">Start Learning</button>
            </div>
        `).join('');
    }
}

// Load entrepreneurship resources
function loadEntrepreneurshipResources() {
    const container = document.getElementById('entrepreneurship-cards');
    if (container) {
        container.innerHTML = entrepreneurshipResources.map(resource => `
            <div class="resource-card">
                <i class="${resource.icon} card-icon"></i>
                <h3 class="card-title">${resource.title}</h3>
                <p class="card-description">${resource.description}</p>
                <button class="btn btn-primary">Access Resource</button>
            </div>
        `).join('');
    }
}

// Load advertisements
function loadAdvertisements() {
    const container = document.getElementById('advertisements-list');
    if (container) {
        container.innerHTML = advertisements.map(ad => `
            <div class="ad-card">
                <img src="${ad.image}" alt="${ad.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                <h3>${ad.title}</h3>
                <p>${ad.description}</p>
                <p><strong>Contact:</strong> ${ad.contact}</p>
                <a href="${ad.link}" class="btn btn-warning">Learn More</a>
            </div>
        `).join('');
    }
}

// Load Discover Zimbabwe content
function loadDiscoverZimbabweContent() {
    // Load public holidays
    const holidaysContainer = document.getElementById('public-holidays-list');
    if (holidaysContainer) {
        holidaysContainer.innerHTML = publicHolidays.map(holiday => `
            <li><strong>${holiday.date}:</strong> ${holiday.name}</li>
        `).join('');
    }
    
    // Load heritage sites
    const heritageContainer = document.getElementById('heritage-sites-list');
    if (heritageContainer) {
        heritageContainer.innerHTML = heritageSites.map(site => `
            <div class="heritage-card">
                <img src="${site.image}" alt="${site.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                <h4>${site.name}</h4>
                <p><strong>Location:</strong> ${site.location}</p>
                <p>${site.description.substring(0, 150)}...</p>
                <button class="btn btn-primary" onclick="showSiteDetails('${site.id}')">Learn More</button>
            </div>
        `).join('');
    }
    
    // Load tourist attractions
    const attractionsContainer = document.getElementById('tourist-attractions-list');
    if (attractionsContainer) {
        attractionsContainer.innerHTML = touristAttractions.map(attraction => `
            <div class="attraction-card">
                <img src="${attraction.image}" alt="${attraction.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                <h4>${attraction.name}</h4>
                <p><strong>Location:</strong> ${attraction.location}</p>
                <p>${attraction.description}</p>
                <button class="btn btn-primary" onclick="showAttractionDetails('${attraction.id}')">Explore</button>
            </div>
        `).join('');
    }
    
    // Load tertiary institutions
    const institutionsContainer = document.getElementById('tertiary-institutions-list');
    if (institutionsContainer) {
        institutionsContainer.innerHTML = tertiaryInstitutions.map(institution => `
            <div class="institution-card">
                <h4>${institution.name}</h4>
                <p><strong>Type:</strong> ${institution.type}</p>
                <p><strong>Location:</strong> ${institution.location}</p>
            </div>
        `).join('');
    }
}

// Load user profile
function loadUserProfile() {
    if (!isLoggedIn) {
        showAuthOverlay();
        return;
    }
    
    // Profile information is updated in updateProfileInfo()
    
    // Load user applications
    const applicationsContainer = document.getElementById('my-applications');
    if (applicationsContainer) {
        if (myApplications.length === 0) {
            applicationsContainer.innerHTML = '<p class="no-applications">No applications submitted yet.</p>';
        } else {
            applicationsContainer.innerHTML = myApplications.map(application => `
                <div class="application-item">
                    <h4>${application.jobTitle}</h4>
                    <p><strong>Company:</strong> ${application.company}</p>
                    <p><strong>Applied:</strong> ${formatDate(application.appliedDate)}</p>
                    <p><strong>Status:</strong> ${application.status}</p>
                </div>
            `).join('');
        }
    }
}

// Apply job filters
function applyJobFilters() {
    const searchQuery = document.getElementById('job-search-query').value.toLowerCase();
    const locationFilter = document.getElementById('job-filter-location').value;
    const typeFilter = document.getElementById('job-filter-type').value;
    
    let filteredJobs = jobs.filter(job => {
        const matchesSearch = !searchQuery || 
            job.title.toLowerCase().includes(searchQuery) ||
            job.description.toLowerCase().includes(searchQuery) ||
            job.company.toLowerCase().includes(searchQuery);
        
        const matchesLocation = !locationFilter || job.location === locationFilter;
        const matchesType = !typeFilter || job.type === typeFilter;
        
        return matchesSearch && matchesLocation && matchesType;
    });
    
    // Update job listings with filtered results
    const jobContainer = document.getElementById('job-listings');
    if (jobContainer) {
        if (filteredJobs.length === 0) {
            jobContainer.innerHTML = '<p class="no-applications">No jobs found matching your criteria.</p>';
        } else {
            jobContainer.innerHTML = filteredJobs.map(job => `
                <div class="job-card">
                    <h3>${job.title}</h3>
                    <p><strong>${job.company}</strong> - ${job.location}</p>
                    <p><strong>Type:</strong> ${job.type}</p>
                    <p><strong>Salary:</strong> ${job.salary}</p>
                    <p>${job.description.substring(0, 150)}...</p>
                    <button class="btn btn-primary" onclick="showJobDetails('${job.id}')">View Details</button>
                </div>
            `).join('');
        }
    }
}

// Show job details in modal
function showJobDetails(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;
    
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalActionButton = document.getElementById('modal-action-button');
    
    if (modal && modalTitle && modalContent && modalActionButton) {
        modalTitle.textContent = job.title;
        modalContent.innerHTML = `
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Posted:</strong> ${formatDate(job.datePosted)}</p>
            <p><strong>Expires:</strong> ${formatDate(job.expirationDate)}</p>
            <h4>Description:</h4>
            <p>${job.description}</p>
            <h4>Requirements:</h4>
            <ul>
                ${job.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        `;
        
        modalActionButton.textContent = 'Apply Now';
        modalActionButton.classList.remove('hidden');
        modalActionButton.onclick = () => applyForJob(jobId);
        
        modal.style.display = 'flex';
    }
}

// Show heritage site details
function showSiteDetails(siteId) {
    const site = heritageSites.find(s => s.id === siteId);
    if (!site) return;
    
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalActionButton = document.getElementById('modal-action-button');
    
    if (modal && modalTitle && modalContent && modalActionButton) {
        modalTitle.textContent = site.name;
        modalContent.innerHTML = `
            <img src="${site.image}" alt="${site.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <p><strong>Location:</strong> ${site.location}</p>
            <p>${site.description}</p>
        `;
        
        modalActionButton.classList.add('hidden');
        modal.style.display = 'flex';
    }
}

// Show attraction details
function showAttractionDetails(attractionId) {
    const attraction = touristAttractions.find(a => a.id === attractionId);
    if (!attraction) return;
    
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalActionButton = document.getElementById('modal-action-button');
    
    if (modal && modalTitle && modalContent && modalActionButton) {
        modalTitle.textContent = attraction.name;
        modalContent.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <p><strong>Location:</strong> ${attraction.location}</p>
            <p>${attraction.description}</p>
        `;
        
        modalActionButton.classList.add('hidden');
        modal.style.display = 'flex';
    }
}

// Apply for job
function applyForJob(jobId) {
    if (!isLoggedIn) {
        showAuthOverlay();
        return;
    }
    
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;
    
    // Check if already applied
    const alreadyApplied = myApplications.some(app => app.jobId === jobId);
    if (alreadyApplied) {
        showModalMessage('You have already applied for this job!');
        return;
    }
    
    // Add to applications
    const application = {
        id: 'app' + Date.now(),
        jobId: jobId,
        jobTitle: job.title,
        company: job.company,
        appliedDate: new Date().toISOString().split('T')[0],
        status: 'Pending'
    };
    
    myApplications.push(application);
    showModalMessage('Application submitted successfully!');
}

// Show modal message
function showModalMessage(message) {
    const modalMessage = document.getElementById('modal-message');
    if (modalMessage) {
        modalMessage.textContent = message;
        modalMessage.classList.remove('hidden');
        
        setTimeout(() => {
            modalMessage.classList.add('hidden');
        }, 3000);
    }
}

// Close modal
document.addEventListener('click', function(e) {
    if (e.target.id === 'close-detail-modal' || e.target.id === 'detail-modal') {
        const modal = document.getElementById('detail-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
});

// Edit job (placeholder)
function editJob(jobId) {
    showMessage('Edit functionality coming soon!', 'info');
}

// Delete job
function deleteJob(jobId) {
    if (confirm('Are you sure you want to delete this job posting?')) {
        // Remove from jobs array
        jobs = jobs.filter(job => job.id !== jobId);
        // Remove from my posted jobs
        myPostedJobs = myPostedJobs.filter(job => job.id !== jobId);
        
        // Reload listings
        loadJobListings();
        loadMyPostedJobs();
        
        showMessage('Job deleted successfully!', 'success');
    }
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function showMessage(message, type = 'info') {
    // Create a temporary message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `auth-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.padding = '1rem';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.maxWidth = '300px';
    
    document.body.appendChild(messageDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
}