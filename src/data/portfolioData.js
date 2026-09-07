export const portfolioData = {
  personal: {
    name: "Syed Fayzan",
    headline: "Computer Science Engineer · MERN-Stack Developer · DSA",
    subheadline: "Passionate MERN-Stack Developer and Computer Science undergraduate specializing in building scalable web architectures, secure REST APIs, and algorithmic problem-solving with 180+ LeetCode problems solved.",
    location: "Hanamkonda, Telangana, India",
    email: "sdfayzan8@gmail.com",
    altEmail: "syedfayzan.dev@gmail.com",
    phone: "7989802625",
    resumeUrl: "/Syed_Fayzan_Resume.pdf",
    status: "Open to MERN Stack / SDE Internships & Full-Time Roles",
    bio: [
      "I am a Computer Science Engineer and dedicated MERN-Stack Developer with strong expertise in building end-to-end full-stack applications using MongoDB, Express.js, React, and Node.js.",
      "With a high academic standing (CGPA: 9.06 / 10) at Kamala Institute of Technology and Science and hands-on industry internship experience at Mindenious Edutech LLP, I focus on building robust RESTful architectures, responsive modern user interfaces, and secure backend systems.",
      "I am an active competitive programmer having solved 180+ problems on LeetCode across core Data Structures and Algorithms including Trees, Graphs, Dynamic Programming, Arrays, Strings, and Recursion."
    ],
    stats: [
      { label: "B.Tech CSE CGPA", value: "9.06 / 10", icon: "GraduationCap" },
      { label: "DSA Problems Solved", value: "180+", icon: "Code2" },
      { label: "Full Stack Projects", value: "3", icon: "Layers" },
      { label: "Industry Internships", value: "5", icon: "Briefcase" }
    ],
    languagesKnown: [
      { name: "English", level: "Professional" },
      { name: "Telugu", level: "Native" },
      { name: "Hindi", level: "Conversational" },
      { name: "Urdu", level: "Native" }
    ]
  },

  contactConfig: {
    recipientEmail: "sdfayzan8@gmail.com",
    service: "web3forms",
    web3FormsAccessKey: "8990635a-fad9-4d1d-8103-226b2c630cc8"
  },

  socials: {
    github: {
      name: "GitHub",
      username: "SyedFayzan",
      url: "https://github.com/SyedFayzan",
      stats: "20+ Repositories • Full Stack & MERN Projects"
    },
    linkedin: {
      name: "LinkedIn",
      username: "syed-fayzan-040a48310",
      url: "https://www.linkedin.com/in/syed-fayzan-040a48310",
      stats: "500+ Connections • Professional Network"
    },
    leetcode: {
      name: "LeetCode",
      username: "syedfayzan",
      url: "https://leetcode.com/u/syedfayzan/",
      stats: "180+ Solved • Data Structures & Algorithms"
    }
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "web", label: "Web / Frameworks (MERN)" },
      { id: "languages", label: "Languages" },
      { id: "databases", label: "Databases" },
      { id: "dsa", label: "Data Structures & Algorithms" },
      { id: "data_ml", label: "Data & ML" },
      { id: "tools", label: "Tools & Platforms" }
    ],
    list: [
      // Web / Frameworks (MERN)
      { name: "React.js", category: "web", level: 94, highlight: true },
      { name: "Node.js", category: "web", level: 90, highlight: true },
      { name: "Express.js", category: "web", level: 90, highlight: true },
      { name: "HTML / CSS", category: "web", level: 95, highlight: false },
      { name: "Bootstrap 5", category: "web", level: 90, highlight: false },
      { name: "Flask (Python)", category: "web", level: 82, highlight: false },
      { name: "FastAPI", category: "web", level: 80, highlight: false },
      { name: "RESTful APIs", category: "web", level: 92, highlight: true },
      { name: "JWT Authentication", category: "web", level: 90, highlight: true },

      // Languages
      { name: "Python", category: "languages", level: 88, highlight: true },
      { name: "C", category: "languages", level: 82, highlight: false },
      { name: "C++", category: "languages", level: 86, highlight: true },
      { name: "Java", category: "languages", level: 84, highlight: false },
      { name: "JavaScript (ES6+)", category: "languages", level: 92, highlight: true },
      { name: "SQL", category: "languages", level: 86, highlight: true },

      // Databases
      { name: "MongoDB", category: "databases", level: 92, highlight: true },
      { name: "MySQL", category: "databases", level: 86, highlight: true },

      // Data Structures & Algorithms
      { name: "Arrays & Strings", category: "dsa", level: 95, highlight: true },
      { name: "Linked Lists & Stacks & Queues", category: "dsa", level: 92, highlight: true },
      { name: "Trees & Binary Search Trees", category: "dsa", level: 90, highlight: true },
      { name: "Graphs (BFS, DFS)", category: "dsa", level: 88, highlight: true },
      { name: "Dynamic Programming (DP)", category: "dsa", level: 84, highlight: true },
      { name: "Binary Search & Sorting", category: "dsa", level: 92, highlight: false },
      { name: "Recursion & Backtracking", category: "dsa", level: 88, highlight: false },
      { name: "Greedy Algorithms & Hashing", category: "dsa", level: 90, highlight: false },

      // Data & ML
      { name: "NumPy", category: "data_ml", level: 85, highlight: false },
      { name: "Pandas", category: "data_ml", level: 86, highlight: true },
      { name: "Scikit-learn", category: "data_ml", level: 80, highlight: false },
      { name: "Matplotlib", category: "data_ml", level: 84, highlight: false },
      { name: "TensorFlow (Basics)", category: "data_ml", level: 75, highlight: false },

      // Tools
      { name: "Git & GitHub", category: "tools", level: 92, highlight: true },
      { name: "VS Code", category: "tools", level: 94, highlight: false },
      { name: "Postman API Testing", category: "tools", level: 90, highlight: true },
      { name: "Linux CLI", category: "tools", level: 82, highlight: false },
      { name: "Figma", category: "tools", level: 80, highlight: false }
    ]
  },

  projects: [
    {
      id: "expense-tracker",
      title: "MERN Expense Tracker",
      subtitle: "Personal Finance & Analytics Platform",
      category: "MERN Stack",
      period: "May 2026",
      featured: true,
      badge: "Flagship MERN Project",
      shortDescription: "Full-stack expense management application enabling users to manage personal finances with JWT authentication, real-time budget tracking, expense categorization, and interactive financial dashboards.",
      fullDescription: "A comprehensive MERN stack personal finance platform built for effortless expense and income tracking. Features secure JWT authentication, role-based user dashboards, monthly trend visualizations, anomaly spending alerts, and optimized MongoDB aggregation pipelines for instant analytics.",
      highlights: [
        "Architected full-stack MERN platform with robust JWT authentication and password encryption.",
        "Built dynamic expense categorization, monthly budget limits, and real-time threshold warnings.",
        "Implemented interactive visual financial analytics dashboards with Recharts / Chart.js.",
        "Designed clean RESTful APIs with MongoDB schemas and Mongoose aggregation models for fast querying."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs", "CSS Modules", "Charts"],
      metrics: [
        { label: "Stack", value: "Pure MERN" },
        { label: "Auth", value: "JWT Verified" },
        { label: "Performance", value: "Instant Query" }
      ],
      github: "https://github.com/SyedFayzan",
      icon: "Layers",
      accentColor: "#10b981"
    },
    {
      id: "blogify",
      title: "MERN Blogify Application",
      subtitle: "Full-Stack Publishing & Community Platform",
      category: "MERN Stack",
      period: "Aug 2025 – Oct 2025",
      featured: true,
      badge: "MERN Stack",
      shortDescription: "Full-stack blogging platform with user authentication, blog CRUD operations, comment system, category filtering, and advanced search.",
      fullDescription: "Blogify is a feature-packed MERN blogging application enabling tech writers to publish, edit, and discover articles effortlessly. Includes user profile dashboards, category tag filters, real-time comment threads, and integrated MongoDB REST APIs.",
      highlights: [
        "Implemented complete blog lifecycle (Create, Read, Update, Delete) with rich text formatting.",
        "Engineered secure user authentication and personalized author dashboards.",
        "Developed interactive threaded comment system and reader reaction metrics.",
        "Built responsive category filtering and full-text keyword search index."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT", "Responsive CSS"],
      metrics: [
        { label: "CRUD", value: "Full Lifecycle" },
        { label: "Search", value: "Tag Indexing" },
        { label: "Database", value: "MongoDB Atlas" }
      ],
      github: "https://github.com/SyedFayzan/Blogify_WebApplication",
      icon: "FileText",
      accentColor: "#7c6af7"
    },
    {
      id: "safewalk",
      title: "SafeWalk – AI Safety & Emergency Assistance Platform",
      subtitle: "Location Safety & SOS Broadcast Platform",
      category: "AI & Safety Tech",
      period: "Mar 2026",
      featured: true,
      badge: "Safety Platform",
      shortDescription: "Developed a full-stack safety platform enabling users to send SOS alerts and share live location with emergency contacts using geolocation APIs.",
      fullDescription: "SafeWalk is an emergency response application designed to protect commuters and vulnerable users. With a single tap, it broadcasts emergency SOS alerts containing precise GPS coordinates to trusted contacts, maps nearby safe routes, and issues environmental danger alerts.",
      highlights: [
        "Developed full-stack emergency response system with one-tap live GPS SOS broadcasting.",
        "Integrated emergency contact management with real-time SMS messaging dispatch.",
        "Engineered route hazard danger mapping and safety score calculations.",
        "Built lightweight Python/Flask and FastAPI backend services connected to MongoDB."
      ],
      technologies: ["Python", "Flask", "MongoDB", "FastAPI", "Geolocation API", "Twilio SMS", "Bootstrap"],
      metrics: [
        { label: "Alert Dispatch", value: "< 2.5s SMS" },
        { label: "Coordinates", value: "Live GPS" },
        { label: "Backend", value: "Flask & FastAPI" }
      ],
      github: "https://github.com/SyedFayzan/SafeTracker-An-Emergency-Alert-System",
      icon: "ShieldAlert",
      accentColor: "#ec4899"
    }
  ],

  experience: [
    {
      role: "Full Stack Development Intern",
      company: "Mindenious Edutech LLP",
      location: "Remote / Hybrid",
      period: "Dec 2024 – Present",
      type: "Internship",
      featured: true,
      description: "Developing scalable, high-performance web applications using the MERN stack. Collaborating closely with engineering teams to build robust RESTful APIs and modern frontend interfaces.",
      responsibilities: [
        "Architected reusable, high-performance React component libraries with responsive cross-device layouts.",
        "Developed and tested 15+ secure RESTful API endpoints using Node.js and Express.js with JWT authentication.",
        "Optimized MongoDB queries and aggregation pipelines, enhancing server response times.",
        "Collaborated in Agile sprints, code reviews, and Git version control workflows ensuring clean, documented code."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "Postman"],
      badge: "Current Role",
      linkedinUrl: "https://www.linkedin.com/in/syed-fayzan-040a48310/overlay/Certifications/1393608683/treasury/?profileId=ACoAAE8tMjABzmFfWUxx_suTkawdCkGmKkChLvQ"
    },
    {
      role: "MERN Stack Virtual Intern",
      company: "EduSkills",
      location: "Virtual",
      period: "2024",
      type: "Virtual Internship",
      featured: false,
      description: "Built end-to-end full stack web applications adhering to industry-standard MERN design patterns and cloud database deployment standards.",
      responsibilities: [
        "Engineered full-stack applications with React frontend state management and Express backend logic.",
        "Configured MongoDB Atlas cloud clusters with secure connection pooling and validation rules.",
        "Executed API testing and contract verification using Postman."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      badge: "AICTE Certified",
      linkedinUrl: "https://www.linkedin.com/in/syed-fayzan-040a48310/overlay/Certifications/1661537247/treasury/?profileId=ACoAAE8tMjABzmFfWUxx_suTkawdCkGmKkChLvQ"
    },
    {
      role: "Python Programming Intern",
      company: "CodSoft",
      location: "Virtual",
      period: "2024",
      type: "Internship",
      featured: false,
      description: "Developed interactive front-end web interfaces and Python automation tools focusing on algorithmic problem-solving and responsive UI.",
      responsibilities: [
        "Created modular, responsive web layouts using modern HTML5, CSS3, and JavaScript ES6+.",
        "Automated repetitive data processing workflows with Python scripts.",
        "Implemented UI/UX enhancements and Git version control."
      ],
      technologies: ["Python", "JavaScript", "HTML5", "CSS3", "Git"],
      badge: "Completed",
      linkedinUrl: "https://drive.google.com/file/d/1kMO4dCI-UjblsU74z7jB7Tl6DAlrzsum/view"
    },
    {
      role: "Data Analyst Internship",
      company: "Decode Labs",
      location: "Virtual",
      period: "2024",
      type: "Internship",
      featured: false,
      description: "Conducted exploratory data analysis, transformation, and visual reporting on structured datasets.",
      responsibilities: [
        "Cleaned, transformed, and analyzed tabular data using Python (Pandas, NumPy).",
        "Constructed analytical charts and structured SQL query workflows.",
        "Summarized analytical findings into technical documentation."
      ],
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Data Analytics"],
      badge: "Data Track",
      linkedinUrl: "https://www.linkedin.com/in/syed-fayzan-040a48310/overlay/Certifications/325341126/treasury/?profileId=ACoAAE8tMjABzmFfWUxx_suTkawdCkGmKkChLvQ"
    },
    {
      role: "Data Analytics Job Simulation Intern",
      company: "Deloitte",
      location: "Virtual",
      period: "2024",
      type: "Job Simulation",
      featured: false,
      description: "Completed comprehensive job simulation analyzing enterprise datasets and delivering business intelligence summaries.",
      responsibilities: [
        "Analyzed large data sets to identify operational trends and anomaly patterns.",
        "Constructed visual dashboard reports with pivot summaries and graphs.",
        "Drafted executive summaries for stakeholder presentation."
      ],
      technologies: ["Python", "SQL", "Excel", "Data Visualization", "BI Analysis"],
      badge: "Deloitte Simulation",
      linkedinUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_XBnWWLjfob33kWpHQ_1766072564195_completion_certificate.pdf"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Kamala Institute of Technology and Science",
      location: "Singapur, Telangana",
      period: "2023 – 2027",
      score: "CGPA: 9.06 / 10",
      status: "In Progress (High Academic Standing)",
      highlights: [
        "High academic performance with consistent 9.0+ CGPA in Computer Science & Engineering.",
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Discrete Mathematics.",
        "Active member and participant in technical hackathons and collegiate coding contests."
      ],
      badge: "Top Academic Standing"
    },
    {
      degree: "Intermediate (MPC)",
      field: "Mathematics, Physics, Chemistry",
      institution: "SR Junior College",
      location: "Telangana, India",
      period: "2021 – 2023",
      score: "Grade: 9.6 / 10",
      status: "Completed with Distinction",
      highlights: [
        "Achieved 9.6 / 10 grade distinction in Mathematics, Physics, and Chemistry.",
        "Developed rigorous analytical and logical foundation."
      ],
      badge: "Academic Distinction"
    },
    {
      degree: "Secondary Schooling (SSC)",
      field: "General Academics & Sciences",
      institution: "Baby Sainik High School",
      location: "Telangana, India",
      period: "2009 – 2020",
      score: "Grade: 10 / 10",
      status: "Completed with Perfect Grade",
      highlights: [
        "Attained perfect 10 / 10 grade in secondary school board examinations."
      ],
      badge: "Perfect 10/10 Grade"
    }
  ],

  certifications: [
    {
      title: "Advanced MERN Stack Development",
      issuer: "Infosys Springboard",
      date: "2024",
      skills: "React, Node.js, Express, MongoDB, REST APIs, JWT",
      verification: "Credential ID Verified",
      icon: "ShieldCheck",
      color: "#3b82f6",
      linkedinUrl: "https://www.linkedin.com/in/syedfayzan/"
    },
    {
      title: "Programming Using Java",
      issuer: "Infosys Springboard",
      date: "2024",
      skills: "Core Java, OOP Concepts, Collections Framework, Multithreading",
      verification: "Verified Certificate",
      icon: "Code",
      color: "#f59e0b",
      linkedinUrl: "https://www.linkedin.com/in/syedfayzan/"
    },
    {
      title: "Explore AI and Generative AI",
      issuer: "Microsoft",
      date: "2024",
      skills: "Generative AI, Large Language Models, Azure AI Services, Prompt Engineering",
      verification: "Microsoft Certified",
      icon: "Sparkles",
      color: "#10b981",
      linkedinUrl: "https://www.linkedin.com/in/syedfayzan/"
    },
    {
      title: "SQL and Relational Databases 101",
      issuer: "IBM Skills Network",
      date: "2024",
      skills: "Relational Modeling, SQL Queries, Joins, Aggregations, Indexing",
      verification: "Cognitive Class Verified",
      icon: "Database",
      color: "#6366f1",
      linkedinUrl: "https://www.linkedin.com/in/syedfayzan/"
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2024",
      skills: "Python Syntax, Data Structures, Algorithms, Modular Programming",
      verification: "Cisco NetAcad Verified",
      icon: "Terminal",
      color: "#06b6d4",
      linkedinUrl: "https://www.linkedin.com/in/syedfayzan/"
    }
  ],

  achievements: [
    {
      title: "Solved 180+ Problems on LeetCode",
      platform: "LeetCode & Problem Solving",
      description: "Demonstrated consistent algorithmic problem-solving across Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, BFS/DFS, Recursion, Backtracking, Greedy, and Dynamic Programming.",
      stat: "180+ Problems",
      badge: "Competitive Programming",
      icon: "Trophy"
    },
    {
      title: "Certificate of Merit for Academic Excellence",
      platform: "Kamala Institute of Technology and Science",
      description: "Received Certificate of Merit for Academic Excellence in BTech for outstanding academic performance and continuous 9.06+ CGPA.",
      stat: "9.06 CGPA",
      badge: "Academic Honors",
      icon: "Award"
    },
    {
      title: "Hackathons: HackFusion 2026 & MindSprint 2K25",
      platform: "Brainovision Solutions India Pvt. Ltd. / University",
      description: "Participated in HackFusion 2026 – International Hackathon & Project Expo by Brainovision Solutions India Pvt. Ltd. and MindSprint 2K25, engineering innovative full-stack solutions.",
      stat: "Hackathon Finalist",
      badge: "International Expo",
      icon: "Flame"
    },
    {
      title: "Smart India Hackathon (SIH) 2024 & 2025",
      platform: "SIH Internal Rounds",
      description: "Participated in SIH 2024 & 2025 internal selections, developing a civic grievance reporting web application with problem-solving focus and real-time urgency detection.",
      stat: "SIH Candidate",
      badge: "Civic Tech",
      icon: "Users"
    }
  ],

  codingProfiles: [
    {
      name: "LeetCode",
      username: "syedfayzan",
      url: "https://leetcode.com/u/syedfayzan/",
      statsText: "180+ Solved",
      secondaryText: "Data Structures & Algorithmic Complexity (Trees, Graphs, DP, Arrays)",
      color: "#FFA116",
      icon: "SiLeetcode"
    },
    {
      name: "GitHub",
      username: "SyedFayzan",
      url: "https://github.com/SyedFayzan",
      statsText: "20+ Repositories",
      secondaryText: "MERN Stack, Python/Flask & Algorithmic Projects",
      color: "#f0f6fc",
      icon: "SiGithub"
    },
    {
      name: "LinkedIn",
      username: "syed-fayzan-040a48310",
      url: "https://www.linkedin.com/in/syed-fayzan-040a48310",
      statsText: "500+ Connections",
      secondaryText: "Professional Network & Tech Updates",
      color: "#0A66C2",
      icon: "SiLinkedin"
    }
  ]
};
