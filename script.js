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

// Mock Data for Jobs
let jobs = [
    {
        id: 'job1',
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
        date: '2025-02-10',
        location: 'Online',
        description: 'Join our expert panel discussion on essential digital skills for the evolving job market.',
        link: '#'
    }
];

// Arrays to store user data (in-memory)
let myPostedJobs = [];
let myApplications = [];

// Authentication state
let isLoggedIn = false;
let currentUser = null;

// Zimbabwean flag color palettes
const flagColorPalettes = [
    { name: 'green', bg: '#d1fae5', text: '#064e3b', icon: '#059669', button: '#10b981' },
    { name: 'yellow', bg: '#fef3c7', text: '#92400e', icon: '#d97706', button: '#f59e0b' },
    { name: 'red', bg: '#fee2e2', text: '#7f1d1d', icon: '#dc2626', button: '#ef4444' },
    { name: 'black', bg: '#f3f4f6', text: '#1f2937', icon: '#4b5563', button: '#6b7280' }
];

// Function to get a random color palette
function getRandomPalette() {
    return flagColorPalettes[Math.floor(Math.random() * flagColorPalettes.length)];
}

// Function to create a styled card with random colors
function createStyledCard(content, type = 'default') {
    const palette = getRandomPalette();
    const card = document.createElement('div');
    card.className = `${type}-card`;
    card.style.backgroundColor = palette.bg;
    card.style.color = palette.text;
    card.innerHTML = content;
    
    // Style buttons within the card
    const buttons = card.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.style.backgroundColor = palette.button;
        button.style.color = 'white';
    });
    
    // Style icons within the card
    const icons = card.querySelectorAll('i');
    icons.forEach(icon => {
        icon.style.color = palette.icon;
    });
    
    return card;
}

// Authentication functions
function showAuthOverlay() {
    document.getElementById('auth-overlay').style.display = 'flex';
}

function hideAuthOverlay() {
    document.getElementById('auth-overlay').style.display = 'none';
}

function updateAuthUI() {
    const authText = document.getElementById('auth-text');
    const mobileAuthText = document.getElementById('mobile-auth-text');
    const authDropdown = document.getElementById('auth-dropdown');
    const mobileAuthDropdown = document.getElementById('mobile-auth-dropdown');
    
    if (isAuthenticated && currentUser) {
        // Update desktop auth
        authText.textContent = currentUser.name;
        authDropdown.innerHTML = `
            <li><a href="#" class="nav-link" data-target="my-profile">My Profile</a></li>
            <li><a href="#" class="nav-link logout-btn">Logout</a></li>
        `;
        
        // Update mobile auth
        mobileAuthText.textContent = currentUser.name;
        mobileAuthDropdown.innerHTML = `
            <li><a href="#" class="nav-link" data-target="my-profile">My Profile</a></li>
            <li><a href="#" class="nav-link logout-btn">Logout</a></li>
        `;
        
        // Update profile page
        document.getElementById('profile-name').textContent = currentUser.name;
        document.getElementById('profile-email').textContent = `Email: ${currentUser.email}`;
    } else {
        // Reset to login state
        authText.textContent = 'Login';
        authDropdown.innerHTML = `
            <li><a href="#" class="nav-link" data-target="sign-in">Sign In</a></li>
            <li><a href="#" class="nav-link" data-target="sign-up">Sign Up</a></li>
        `;
        
        mobileAuthText.textContent = 'Login';
        mobileAuthDropdown.innerHTML = `
            <li><a href="#" class="nav-link" data-target="sign-in">Sign In</a></li>
            <li><a href="#" class="nav-link" data-target="sign-up">Sign Up</a></li>
        `;
    }
}

function handleSignIn(event) {
    event.preventDefault();
    
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const messageDiv = document.getElementById('signin-message');
    
    // Simple validation
    if (!email || !password) {
        showAuthMessage('signin-message', 'Please fill in all fields.', 'error');
        return;
    }
    
    // Simulate authentication (in real app, this would be an API call)
    setTimeout(() => {
        isAuthenticated = true;
        currentUser = {
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email: email
        };
        
        updateAuthUI();
        showAuthMessage('signin-message', 'Successfully signed in! Welcome back.', 'success');
        
        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
            showPage('home');
        }, 1500);
    }, 1000);
}

function handleSignUp(event) {
    event.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
        showAuthMessage('signup-message', 'Please fill in all fields.', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showAuthMessage('signup-message', 'Passwords do not match.', 'error');
        return;
    }
    
    // Simulate registration (in real app, this would be an API call)
    setTimeout(() => {
        isAuthenticated = true;
        currentUser = {
            name: name,
            email: email
        };
        
        updateAuthUI();
        showAuthMessage('signup-message', 'Account created successfully! Welcome to Zim Connect.', 'success');
        
        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
            showPage('home');
        }, 1500);
    }, 1000);
}

function handleLogout() {
    isAuthenticated = false;
    currentUser = null;
    myApplications = [];
    myPostedJobs = [];
    
    updateAuthUI();
    updateMyApplications();
    displayJobs(myPostedJobs, 'my-posted-jobs');
    
    showPage('home');
    
    // Show a brief logout message
    const tempMessage = document.createElement('div');
    tempMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    tempMessage.textContent = 'Successfully logged out!';
    document.body.appendChild(tempMessage);
    
    setTimeout(() => {
        document.body.removeChild(tempMessage);
    }, 3000);
}

function showAuthMessage(elementId, message, type) {
    const messageDiv = document.getElementById(elementId);
    messageDiv.textContent = message;
    messageDiv.className = `auth-message ${type}`;
    messageDiv.classList.remove('hidden');
    
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
}

function checkAuthRequired(targetPage) {
    const protectedPages = [
        'find-jobs', 'post-job', 'advertise-with-us', 'learn-grow', 
        'entrepreneurship-hub', 'my-profile', 'enhanced-profiles',
        'interactive-learning', 'community-networking', 
        'entrepreneurship-deep-dive', 'data-analytics'
    ];
    
    if (protectedPages.includes(targetPage) && !isAuthenticated) {
        showAuthOverlay();
        return false;
    }
    return true;
}

// Function to display job listings
function displayJobs(jobList, targetElementId) {
    const container = document.getElementById(targetElementId);
    container.innerHTML = '';

    if (jobList.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; grid-column: 1 / -1;">No jobs found matching your criteria.</p>';
        return;
    }

    jobList.forEach(job => {
        const jobContent = `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">${job.title}</h3>
            <p style="margin-bottom: 0.5rem;"><strong>Company:</strong> ${job.company}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Location:</strong> ${job.location}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Type:</strong> ${job.type}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Posted:</strong> ${job.datePosted || 'N/A'}</p>
            <p style="margin-bottom: 1rem;"><strong>Expires:</strong> ${job.expirationDate || 'N/A'}</p>
            <p style="margin-bottom: 1.5rem; font-size: 0.9rem; line-height: 1.5;">${job.description.substring(0, 150)}...</p>
            <button class="btn view-details-btn" data-item-type="job" data-item-id="${job.id}" style="width: 100%; padding: 0.75rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">View Details</button>
        `;
        
        const jobCard = createStyledCard(jobContent, 'job');
        container.appendChild(jobCard);
    });
}

// Function to display Learn & Grow Courses
function displayLearnGrowCourses() {
    const container = document.getElementById('learn-grow-cards');
    container.innerHTML = '';
    
    learnGrowCourses.forEach(course => {
        const courseContent = `
            <i class="${course.icon}" style="font-size: 3rem; margin-bottom: 1.5rem; display: block;"></i>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">${course.title}</h3>
            <p style="margin-bottom: 1.5rem; line-height: 1.6;">${course.description}</p>
            <button class="btn" style="padding: 0.75rem 1.5rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">Enroll Now</button>
        `;
        
        const courseCard = createStyledCard(courseContent, 'course');
        container.appendChild(courseCard);
    });
}

// Function to display Entrepreneurship Resources
function displayEntrepreneurshipResources() {
    const container = document.getElementById('entrepreneurship-cards');
    container.innerHTML = '';
    
    entrepreneurshipResources.forEach(resource => {
        const resourceContent = `
            <i class="${resource.icon}" style="font-size: 3rem; margin-bottom: 1.5rem; display: block;"></i>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">${resource.title}</h3>
            <p style="margin-bottom: 1.5rem; line-height: 1.6;">${resource.description}</p>
            <button class="btn" style="padding: 0.75rem 1.5rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">Learn More</button>
        `;
        
        const resourceCard = createStyledCard(resourceContent, 'resource');
        container.appendChild(resourceCard);
    });
}

// Function to display Advertisements
function displayAdvertisements() {
    const container = document.getElementById('advertisements-list');
    container.innerHTML = '';
    
    if (advertisements.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; grid-column: 1 / -1;">No advertisements currently featured.</p>';
        return;
    }
    
    advertisements.forEach(ad => {
        const adContent = `
            <img src="${ad.image}" alt="${ad.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">${ad.title}</h3>
            <p style="margin-bottom: 1.5rem; line-height: 1.6;">${ad.description}</p>
            <a href="${ad.link}" target="_blank" class="btn" style="display: inline-block; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; text-decoration: none; color: white; transition: all 0.3s ease;">Learn More</a>
        `;
        
        const adCard = createStyledCard(adContent, 'ad');
        container.appendChild(adCard);
    });
}

// Function to display Public Holidays
function displayPublicHolidays() {
    const container = document.getElementById('public-holidays-list');
    container.innerHTML = '';
    
    publicHolidays.forEach(holiday => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${holiday.date}:</strong> ${holiday.name}`;
        container.appendChild(listItem);
    });
}

// Function to display World Heritage Sites
function displayHeritageSites() {
    const container = document.getElementById('heritage-sites-list');
    container.innerHTML = '';
    
    heritageSites.forEach(site => {
        const siteContent = `
            <img src="${site.image}" alt="${site.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">${site.name}</h4>
            <p style="margin-bottom: 1.5rem; font-size: 0.9rem; color: #6b7280;">${site.location}</p>
            <button class="btn nav-link" data-item-type="heritage" data-item-id="${site.id}" data-target="${site.id}-details" style="width: 100%; padding: 0.75rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">View Details</button>
        `;
        
        const siteCard = createStyledCard(siteContent, 'heritage');
        container.appendChild(siteCard);
    });
}

// Function to display Tourist Attractions
function displayTouristAttractions() {
    const container = document.getElementById('tourist-attractions-list');
    container.innerHTML = '';
    
    touristAttractions.forEach(attraction => {
        const attractionContent = `
            <img src="${attraction.image}" alt="${attraction.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
            <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">${attraction.name}</h4>
            <p style="margin-bottom: 1.5rem; font-size: 0.9rem; color: #6b7280;">${attraction.location}</p>
            <button class="btn nav-link" data-item-type="attraction" data-item-id="${attraction.id}" data-target="${attraction.id}-details" style="width: 100%; padding: 0.75rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">View Details</button>
        `;
        
        const attractionCard = createStyledCard(attractionContent, 'attraction');
        container.appendChild(attractionCard);
    });
}

// Function to display Tertiary Institutions
function displayTertiaryInstitutions() {
    const container = document.getElementById('tertiary-institutions-list');
    container.innerHTML = '';
    
    tertiaryInstitutions.forEach(institution => {
        const institutionContent = `
            <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">${institution.name}</h4>
            <p style="margin-bottom: 0.25rem; font-size: 0.9rem;"><strong>Type:</strong> ${institution.type}</p>
            <p style="font-size: 0.9rem;"><strong>Location:</strong> ${institution.location}</p>
        `;
        
        const institutionCard = createStyledCard(institutionContent, 'institution');
        container.appendChild(institutionCard);
    });
}

// Function to display Latest News & Updates
function displayLatestNews() {
    const container = document.getElementById('news-updates-list');
    container.innerHTML = '';
    
    if (latestNews.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; grid-column: 1 / -1;">No news or updates available at the moment.</p>';
        return;
    }
    
    latestNews.forEach(newsItem => {
        const newsContent = `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">${newsItem.title}</h3>
            <p style="margin-bottom: 0.5rem; font-size: 0.9rem; color: #6b7280;">Date: ${newsItem.date}</p>
            <p style="margin-bottom: 1.5rem; line-height: 1.6;">${newsItem.summary}</p>
            <a href="${newsItem.link}" target="_blank" class="btn" style="display: inline-block; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; text-decoration: none; color: white; transition: all 0.3s ease;">Read More</a>
        `;
        
        const newsCard = createStyledCard(newsContent, 'news');
        container.appendChild(newsCard);
    });
}

// Function to display Upcoming Events
function displayUpcomingEvents() {
    const container = document.getElementById('upcoming-events-list');
    container.innerHTML = '';
    
    if (upcomingEvents.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; grid-column: 1 / -1;">No upcoming events scheduled at the moment.</p>';
        return;
    }
    
    upcomingEvents.forEach(eventItem => {
        const eventContent = `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">${eventItem.title}</h3>
            <p style="margin-bottom: 0.25rem; font-size: 0.9rem; color: #6b7280;">Date: ${eventItem.date}</p>
            <p style="margin-bottom: 1rem; font-size: 0.9rem; color: #6b7280;">Location: ${eventItem.location}</p>
            <p style="margin-bottom: 1.5rem; line-height: 1.6;">${eventItem.description}</p>
            <a href="${eventItem.link}" target="_blank" class="btn" style="display: inline-block; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; text-decoration: none; color: white; transition: all 0.3s ease;">View Details</a>
        `;
        
        const eventCard = createStyledCard(eventContent, 'event');
        container.appendChild(eventCard);
    });
}

// Function to open detail modal
function openDetailModal(item, type) {
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalActionButton = document.getElementById('modal-action-button');
    const modalMessage = document.getElementById('modal-message');

    modalTitle.textContent = item.title || item.name;
    modalContent.innerHTML = '';
    modalActionButton.classList.add('hidden');
    modalMessage.classList.add('hidden');

    if (type === 'job') {
        modalContent.innerHTML = `
            <p style="margin-bottom: 0.5rem;"><strong style="color: #10b981;">Company:</strong> ${item.company || 'N/A'}</p>
            <p style="margin-bottom: 0.5rem;"><strong style="color: #10b981;">Location:</strong> ${item.location || 'N/A'}</p>
            <p style="margin-bottom: 0.5rem;"><strong style="color: #10b981;">Type:</strong> ${item.type || 'N/A'}</p>
            <p style="margin-bottom: 0.5rem;"><strong style="color: #10b981;">Salary:</strong> ${item.salary || 'Not specified'}</p>
            <p style="margin-bottom: 0.5rem;"><strong style="color: #10b981;">Date Posted:</strong> ${item.datePosted || 'N/A'}</p>
            <p style="margin-bottom: 1rem;"><strong style="color: #10b981;">Expires On:</strong> ${item.expirationDate || 'N/A'}</p>
            <h4 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Description:</h4>
            <p style="margin-bottom: 1rem; line-height: 1.6;">${item.description || 'No description available.'}</p>
            <h4 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Requirements:</h4>
            <ul style="list-style: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
                ${item.requirements && item.requirements.length > 0 ? item.requirements.map(req => `<li>${req}</li>`).join('') : '<li>No specific requirements listed.</li>'}
            </ul>
        `;
        modalActionButton.textContent = 'Apply Now';
        modalActionButton.onclick = () => applyForJob(item);
        modalActionButton.classList.remove('hidden');
    }

    modal.style.display = 'flex';
}

// Function to close detail modal
function closeDetailModal() {
    document.getElementById('detail-modal').style.display = 'none';
}

// Function to handle job application
function applyForJob(job) {
    myApplications.push(job);
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = 'Application submitted successfully! We will notify you of the next steps.';
    modalMessage.classList.remove('hidden');
    document.getElementById('modal-action-button').classList.add('hidden');
    updateMyApplications();
}

// Function to update "My Applications" on profile page
function updateMyApplications() {
    const container = document.getElementById('my-applications');
    container.innerHTML = '';
    
    if (myApplications.length === 0) {
        container.innerHTML = '<p class="no-applications">No applications submitted yet.</p>';
        return;
    }
    
    myApplications.forEach(app => {
        const appItem = document.createElement('div');
        appItem.style.cssText = 'background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 1rem;';
        appItem.innerHTML = `
            <h5 style="font-weight: 600; color: #10b981; margin-bottom: 0.5rem;">${app.title} at ${app.company}</h5>
            <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 0.25rem;">${app.location} - ${app.type}</p>
            <p style="color: #9ca3af; font-size: 0.8rem;">Applied on: ${new Date().toLocaleDateString()}</p>
        `;
        container.appendChild(appItem);
    });
}

// Function to handle employer job posting
function postNewJob(event) {
    event.preventDefault();

    const title = document.getElementById('employer-job-title').value;
    const company = document.getElementById('employer-company-name').value;
    const location = document.getElementById('employer-job-location').value;
    const type = document.getElementById('employer-job-type').value;
    const salary = document.getElementById('employer-job-salary').value;
    const description = document.getElementById('employer-job-description').value;
    const requirements = document.getElementById('employer-job-requirements').value.split(',').map(req => req.trim());
    const datePosted = document.getElementById('employer-date-posted').value;
    const expirationDate = document.getElementById('employer-expiration-date').value;

    const newJob = {
        id: 'job' + (jobs.length + 1),
        title,
        company,
        location,
        type,
        salary,
        description,
        requirements,
        datePosted,
        expirationDate
    };

    jobs.unshift(newJob);
    myPostedJobs.unshift(newJob);

    document.getElementById('post-job-form').reset();
    displayJobs(jobs, 'job-listings');
    displayJobs(myPostedJobs, 'my-posted-jobs');

    alert('Job posted successfully!');
    showPage('find-jobs');
}

// Function to handle advertisement request submission
function submitAdRequest(event) {
    event.preventDefault();
    
    document.getElementById('advertise-request-form').reset();
    document.getElementById('advertise-request-form').classList.add('hidden');
    document.getElementById('ad-request-message').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('ad-request-message').classList.add('hidden');
    }, 5000);
}

// Function to handle contact form submission
function submitContactForm(event) {
    event.preventDefault();
    
    document.getElementById('contact-us-form').reset();
    document.getElementById('contact-us-form').classList.add('hidden');
    const statusMessage = document.getElementById('contact-message-status');
    statusMessage.textContent = 'Your message has been sent successfully! We will get back to you soon.';
    statusMessage.classList.remove('hidden');

    setTimeout(() => {
        statusMessage.classList.add('hidden');
    }, 5000);
}

// Function to filter jobs
function filterJobs() {
    const query = document.getElementById('job-search-query').value.toLowerCase();
    const locationFilter = document.getElementById('job-filter-location').value;
    const typeFilter = document.getElementById('job-filter-type').value;

    const filteredJobs = jobs.filter(job => {
        const matchesQuery = job.title.toLowerCase().includes(query) ||
                           job.description.toLowerCase().includes(query) ||
                           job.company.toLowerCase().includes(query) ||
                           job.requirements.some(req => req.toLowerCase().includes(query));
        const matchesLocation = locationFilter === '' || job.location === locationFilter;
        const matchesType = typeFilter === '' || job.type === typeFilter;

        return matchesQuery && matchesLocation && matchesType;
    });

    displayJobs(filteredJobs, 'job-listings');
}

// Page navigation logic
function showPage(pageId) {
    // Check if authentication is required for this page
    if (!checkAuthRequired(pageId)) {
        return; // Don't navigate if auth is required but user is not authenticated
    }

    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');

        // Special handling for dynamic content
        if (pageId === 'discover-zimbabwe') {
            displayPublicHolidays();
            displayHeritageSites();
            displayTouristAttractions();
            displayTertiaryInstitutions();
        } else if (pageId.endsWith('-details')) {
            const itemId = pageId.split('-')[0];
            let item = null;

            if (itemId.startsWith('whs')) {
                item = heritageSites.find(site => site.id === itemId);
            } else if (itemId.startsWith('ta')) {
                item = touristAttractions.find(attraction => attraction.id === itemId);
            }

            if (item) {
                const container = targetSection.querySelector('.container');
                container.innerHTML = `
                    <h2 class="page-title">${item.name}</h2>
                    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">
                    <p style="line-height: 1.8; margin-bottom: 2rem; color: #4b5563;">${item.description}</p>
                    <p style="margin-bottom: 2rem; color: #6b7280;"><strong>Location:</strong> ${item.location}</p>
                    <button class="btn btn-secondary back-to-discover-btn">Back to Discover Zimbabwe</button>
                `;
            }
        }
    }

    window.scrollTo(0, 0);

    // Close mobile nav if open
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial display of all dynamic content
    displayJobs(jobs, 'job-listings');
    displayJobs(myPostedJobs, 'my-posted-jobs');
    displayLearnGrowCourses();
    displayEntrepreneurshipResources();
    displayAdvertisements();
    displayLatestNews();
    displayUpcomingEvents();

    // Set current date for job posting
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const datePostedInput = document.getElementById('employer-date-posted');
    if (datePostedInput) {
        datePostedInput.value = dateString;
    }

    // Navigation event delegation
    document.addEventListener('click', (event) => {
        const navLink = event.target.closest('.nav-link');
        if (navLink) {
            event.preventDefault();
            const targetId = navLink.dataset.target;
            if (targetId) {
                // Close auth overlay if it's open and user clicked a nav link from it
                if (document.getElementById('auth-overlay').style.display === 'flex') {
                    hideAuthOverlay();
                }
                showPage(targetId);
            }
        }

        // Handle logout
        if (event.target.classList.contains('logout-btn')) {
            event.preventDefault();
            handleLogout();
        }
    });

    // Hamburger menu toggle
    document.getElementById('hamburger-menu').addEventListener('click', () => {
        document.getElementById('mobile-nav').classList.toggle('active');
    });

    // Modal close
    document.getElementById('close-detail-modal').addEventListener('click', closeDetailModal);

    // View details button handler
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('view-details-btn')) {
            const itemId = event.target.dataset.itemId;
            const itemType = event.target.dataset.itemType;
            
            if (itemType === 'job') {
                const selectedItem = jobs.find(item => item.id === itemId);
                if (selectedItem) {
                    openDetailModal(selectedItem, itemType);
                }
            }
        }
    });

    // Back to discover button handler
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('back-to-discover-btn')) {
            showPage('discover-zimbabwe');
        }
    });

    // Back to home button handler
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('back-to-home-btn')) {
            showPage('home');
        }
    });

    // Auth overlay click outside to close
    document.getElementById('auth-overlay').addEventListener('click', (event) => {
        if (event.target.id === 'auth-overlay') {
            hideAuthOverlay();
        }
    });

    // Form submissions
    document.getElementById('post-job-form').addEventListener('submit', postNewJob);
    document.getElementById('advertise-request-form').addEventListener('submit', submitAdRequest);
    document.getElementById('contact-us-form').addEventListener('submit', submitContactForm);
    document.getElementById('sign-in-form').addEventListener('submit', handleSignIn);
    document.getElementById('sign-up-form').addEventListener('submit', handleSignUp);

    // Show/hide forms
    document.getElementById('show-advertise-form-btn').addEventListener('click', () => {
        const form = document.getElementById('advertise-request-form');
        form.classList.toggle('hidden');
        document.getElementById('ad-request-message').classList.add('hidden');
    });

    document.getElementById('show-contact-form-btn').addEventListener('click', () => {
        const form = document.getElementById('contact-us-form');
        form.classList.toggle('hidden');
        document.getElementById('contact-message-status').classList.add('hidden');
    });

    // Job filters
    document.getElementById('apply-job-filters').addEventListener('click', filterJobs);

    // Close modal when clicking outside
    document.getElementById('detail-modal').addEventListener('click', (event) => {
        if (event.target.id === 'detail-modal') {
            closeDetailModal();
        }
    });

    // Initialize auth UI
    updateAuthUI();
});