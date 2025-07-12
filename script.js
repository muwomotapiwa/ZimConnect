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
    { name: 'yellow', bg: '#fef3c7', text: '#92400e', icon: '#d97706', button: