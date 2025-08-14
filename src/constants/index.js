export const myProjects = [
  {
    id: 1,
    title: "GreenPulse 💚",
    description:
      "This app helps users track carbon footprint & encourages greener habits through insights, rewards & progress tracking.",
    subDescription: [
      "Built FastAPI backend to manage user sessions, data & profile information, with secure authentication through JWT.",
      "Integrated Fetch.ai’s uAgents for context-aware decentralized communication between autonomous agents responsible for recording user activities, storing data & delivering personalized, real-time notifications based on user behavior.",
      "ASI-1 LLM interprets natural language to extract activities, match them with emission factors & provide actionable sustainability guidance.",
      "Used Gemini to create personalized notifications based on location, weather & behavior of user.",
      "Stored the data in MongoDB, structured it into collections. The React frontend provided dashboards for users & companies.",
    ],
    href: "https://github.com/adityarao97/GreenPulse",
    logo: "",
    image: "/assets/projects/greenpulse1.jpg",
    tags: [
      {
        id: 1,
        name: "Agentic AI",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "LLM",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Python",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 6,
        name: "MongoDB",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "MediVerse 🧸",
    description:
      "This is an interactive mobile app that transforms daunting medical procedures into reassuring, personalized stories and engaging tasks to help pediatric patients bravely manage chronic diseases.",
    subDescription: [
      "Built interactive mobile app using React Native, FastAPI & MongoDB to support pediatric patients.",
      "Integrated OpenAI LLM to generate personalized stories explaining medical procedures to reduce treatment anxiety.",
      "Built synchronized child and doctor interfaces enabling real-time voice-to-text capture of appointment details including date time and purpose followed by automatic calendar syncing with personalized task generation for the child app.",
      "Created reward-based avatar customization system and used Lottie animations to encourage task completion.",
    ],
    href: "https://github.com/tanaygodse/CommureCodes",
    logo: "",
    image: "/assets/projects/mediverse_image_horizontal.PNG",
    tags: [
      {
        id: 1,
        name: "LLM",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "React Native",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "Animation",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Python",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 6,
        name: "MongoDB",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Hotel Recommender 🛎️",
    description:
      "This system intelligently learns your unique preferences from millions of reviews to deliver the perfect hotel recommendations, ensuring every stay is tailored just for you.",
    subDescription: [
      "Built personalized hotel recommendation system leveraging NLP, content-based filtering (for cold start problem), collaborative filtering and Graph Neural Network to extract user preferences from 1M+ TripAdvisor reviews.",
      "Extracted key hotel attributes using Sentence-BERT topic modeling and DistilBERT sentiment scores.",
      "Engineered metadata-enhanced user–hotel graphs with GraphSAGE to learn latent patterns and contextual relationships.",
      "Combined outputs from CF, GNN & content-based models using attention-based reranking to get top-5 recommendations.",
    ],
    href: "https://github.com/manaswi2399/Hotel_Recommendation_System",
    logo: "",
    image: "/assets/projects/architecture_hr.png",
    tags: [
      {
        id: 1,
        name: "Pytorch",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "NLP (BERT)",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "ALS (CF)",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "GNN",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 5,
        name: "Reranking (Attention)",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Enterprise Marketplace 🛍️",
    description:
      "An online marketplace that unites the world of an art gallery with the practical efficiency of essential moving services, offering an integrated user experience.",
    subDescription: [
      "Led the development of a central online marketplace by integrating diverse web companies, prominently featuring my 'Bloom and Brush' online art gallery alongside a 'MoveEase' moving service.",
      "Built responsive frontend interfaces using HTML, CSS, and JavaScript to facilitate user navigation and content interaction.",
      "Architected PHP-based backend with MySQL for robust user authentication, cross-site activity logging, and a unified review and rating system.",
      "Designed algorithms for presenting top-ranked services and products across integrated platforms.",
    ],
    href: "https://bloomease.42web.io/",
    logo: "",
    image: "/assets/projects/boom_image.PNG",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "PHP",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 5,
        name: "MySQL",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Hospital Treatment Recommender ⚕️",
    description:
      "This system guides healthcare professionals by predicting optimal patient care decisions to enhance recovery and resource management.",
    subDescription: [
      "Developed a real-time recommendation system for hospitalized patient treatment using Reinforcement Learning.",
      "Utilized MIMIC-III clinical data, cleaned and preprocessed it. Built Q-learning model which predicts 1 of 4 actions (continue treatment, discharge, ICU transfer and step-down care transfer) based on 28 features, with 85% accuracy.",
      "System provides actionable insights for healthcare professionals, improving patient outcomes and resource allocation.",
    ],
    href: "https://github.com/shravanichandratre/Hospital-Treatment-Recommender",
    logo: "",
    image: "/assets/projects/htr_pro_image.PNG",
    tags: [
      {
        id: 1,
        name: "Reinforcement Learning",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Numpy",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Scikit Learn",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 5,
        name: "Jupyter Notebook",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "CPU Simulator 🧠",
    description:
      "This CPU simulator brings the fundamental operations of a computer's brain to life, precisely managing how it processes information and runs programs.",
    subDescription: [
      "Developed 32-bit CPU with a custom Instruction Set Architecture (ISA) that models core CPU operations in C++.",
      "Implemented memory segments (text, data, heap, stack) with address and memory segmentation (byte, word).",
      "Added support for recursion by managing stack-based function calls within the fetch-decode-execute cycle.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "Computer Architecture",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "CPU",
        path: "/assets/logos/git.svg",
      },
    ],
  },
];

export const mySocials = [
  
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shravani-chandratre/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shravanichandratre/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "MS Computer Engineering 🎓",
    job: "San Jose State University",
    date: "August 2024 - May 2026",
    contents: [
      "My coursework included Computer Architecture, System Software, Advanced Computer Design, AI & Data Engineering, Advanced Data Mining & Enterprise Software Platforms.",
      "My specialization is Machine Learning Engineering, where I'm gaining in-depth knowledge across the design of robust AI systems, and advanced data processing.",
      "I have successfully completed two semesters and am now preparing for my third.",
    ],
  },
  {
    title: "Technology Intern",
    job: "SQL and Web Development Projects",
    date: "November 2023 - June 2024",
    contents: [
      "Improved data handling and user interface by upgrading an ERP software.",
      "Developed SQL queries to manage data flow, increasing processing speed & ensuring data integrity. Improved user experience by enhancing the front-end using HTML & CSS.",
      "Designed & deployed rental villa website using WordPress with custom HTML & CSS.",
    ],
  },
  {
    title: "Android Development Intern",
    job: "Android Application Development",
    date: "October 2021 - December 2021",
    contents: [
      "Developed and integrated a shopping cart module within an Android app using Java & Android Studio, supporting 100+ items with dynamic updates and inventory syncing.",
      "Integrated secure payment gateway APIs and ensured smooth transactional flows with Firebase for authentication and data storage. Collaborated with UI/UX designers and QA engineers to enhance User Experience.",
    ],
  },
  {
    title: "Application Development Apprentice",
    job: "Full Stack Project",
    date: "August 2021 - October 2021",
    contents: [
      "Designed and developed a full stack cross domain application for managing a senior citizen’s club, focusing on an accessibility-first design using Python for frontend (Kivy) and backend.",
      "Used SQLite as a lightweight backend to persist member data and event data.",
      "Focused on usability by incorporating larger UI elements and color accessibility features.",
    ],
  },
  {
    title: "BE Computer Engineering 🎓",
    job: "Savitribai Phule Pune University",
    date: "August 2019 - May 2023",
    contents: [
      "I earned my Bachelor of Engineering in Computer Engineering with Honors (IoT specialization) from Savitribai Phule Pune University in May 2023.",
      "I graduated as one of the top 10 students in my college batch (9th position).",
      "My comprehensive coursework covered foundational CS, data structures & algorithms, object-oriented programming, database management, computer networks, and advanced topics like Artificial Intelligence, Machine Learning, Deep Learning & Blockchain Technology",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I trained in classical dance for nearly a decade",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I began coding when I was in 8th grade",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I've practiced Yoga since childhood (thanks, Mom!)",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "I'm skilled in calligraphy",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "I was part of an AI club during college",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "I used to participate in sports in school",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "I learned how to craft a teddy bear from scratch",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "I love cooking, exploring new flavors and cuisines.",
    img: "https://robohash.org/eve",
  },
];