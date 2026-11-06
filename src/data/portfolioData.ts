export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Mobile';
  technologies: string[];
  description: string[];
  highlight: string;
  demoType: 'career-recommender' | 'resume-builder' | 'idea-generator';
}

export interface SkillCategory {
  name: string;
  id: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Intermediate';
    percentage: number;
    description: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  focus: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  imagePath: string;
  topics: string[];
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Hezal Vasava",
    roles: [
      "Frontend Developer",
      "Java Developer",
      "Software Developer",
      "AI Enthusiast"
    ],
    tagline: "Building practical web applications and exploring the power of Artificial Intelligence.",
    objective: "Seeking an entry-level Software Engineer opportunity to leverage my foundation in Java, web technologies, and Artificial Intelligence to build robust and scalable real-world solutions.",
    location: "Gujarat, India",
    email: "hezalvasava1508.email@gmail.com",
    phone: "+91-7069138555",
    linkedin: "https://in.linkedin.com/in/hezalvasava",
    avatar: "/assets/aistudio/Professional_Studio_Portrait_031e1ee7.png",
    aboutText: "I am an MCA student specializing in Artificial Intelligence at Parul University. I have a strong foundation in Java programming, Object-Oriented Programming, Data Structures, Database Management Systems, and web development. I enjoy building practical applications and solving real-world problems through technology. I am also exploring Generative AI technologies and continuously improving my technical skills.",
  },

  skills: [
    {
      name: "Programming",
      id: "programming",
      skills: [
        { name: "Java", level: "Proficient", percentage: 88, description: "Core Java, OOP principles, Collections, Exception Handling, Multi-threading" },
        { name: "C++", level: "Intermediate", percentage: 76, description: "Object-oriented structures, memory fundamentals, algorithms" },
        { name: "PHP", level: "Intermediate", percentage: 72, description: "Server-side scripting, form handling, backend integrations" },
      ],
    },
    {
      name: "Web Technologies",
      id: "web",
      skills: [
        { name: "HTML5", level: "Proficient", percentage: 92, description: "Semantic markup, accessibility, modern standards" },
        { name: "CSS3", level: "Proficient", percentage: 88, description: "Flexbox, Grid, responsive layouts, modern animations" },
        { name: "JavaScript", level: "Proficient", percentage: 82, description: "ES6+, DOM manipulation, asynchronous programming, APIs" },
        { name: "JSP", level: "Proficient", percentage: 80, description: "JavaServer Pages, dynamic views, JSTL, session state" },
        { name: "Servlets", level: "Proficient", percentage: 80, description: "MVC architecture, request dispatching, filter pipelines" },
      ],
    },
    {
      name: "Mobile Development",
      id: "mobile",
      skills: [
        { name: "Java (Android)", level: "Proficient", percentage: 80, description: "Android app architecture, Activities, Intents, UI logic" },
        { name: "XML Layouts", level: "Proficient", percentage: 82, description: "ConstraintLayout, responsive mobile views, material themes" },
      ],
    },
    {
      name: "Database",
      id: "database",
      skills: [
        { name: "MySQL", level: "Proficient", percentage: 85, description: "Relational modeling, complex queries, joins, indexes" },
        { name: "JDBC", level: "Proficient", percentage: 82, description: "Java Database Connectivity, PreparedStatement, transactions" },
        { name: "DBMS", level: "Proficient", percentage: 86, description: "Normalization (1NF-BCNF), ACID properties, ER diagrams" },
      ],
    },
    {
      name: "Core Computer Science",
      id: "core-cs",
      skills: [
        { name: "Object-Oriented Programming", level: "Advanced", percentage: 90, description: "Inheritance, Polymorphism, Encapsulation, Abstraction, Design patterns" },
        { name: "Data Structures", level: "Proficient", percentage: 82, description: "Arrays, Linked Lists, Stacks, Queues, Trees, Searching & Sorting algorithms" },
        { name: "Database Management Systems", level: "Proficient", percentage: 86, description: "Relational algebra, concurrency control, transaction management" },
      ],
    },
    {
      name: "Development Tools",
      id: "tools",
      skills: [
        { name: "Visual Studio Code", level: "Advanced", percentage: 90, description: "Web frontend & backend workflows, Git integration, debugging" },
        { name: "NetBeans IDE", level: "Proficient", percentage: 84, description: "Java EE enterprise development, Swing, automated build management" },
        { name: "Android Studio", level: "Proficient", percentage: 80, description: "Android SDK, Gradle builds, device emulators, layout inspector" },
        { name: "Apache Tomcat", level: "Proficient", percentage: 82, description: "Servlet container, JSP deployment, web application hosting" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "career-recommender",
      title: "Career Recommendation & Learning Roadmap System",
      category: "Full-Stack",
      technologies: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
      highlight: "Skill Matching Algorithm & Personalized Career Path Roadmap",
      description: [
        "Developed a comprehensive web-based career recommendation system.",
        "Suggests suitable career paths based on user skills, interests, and background.",
        "Provides personalized learning roadmaps for selected job roles with step-by-step milestones.",
        "Implemented skill matching algorithms and career recommendation logic.",
        "Calculates job-role match percentages and clearly identifies missing skills.",
        "Uses MySQL to store user profiles, career taxonomies, and learning roadmap data.",
      ],
      demoType: "career-recommender",
    },
    {
      id: "resume-builder",
      title: "Online Resume Builder",
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlight: "Dynamic Multi-Section Live Resume Generator",
      description: [
        "Developed an interactive web-based resume builder application.",
        "Allows users to enter personal, educational, skills, and project details via dynamic forms.",
        "Generates a professional resume preview dynamically in real time.",
        "Provides instant format switching, section reordering, and clean printable output.",
      ],
      demoType: "resume-builder",
    },
    {
      id: "idea-generator",
      title: "Project Idea Generator Application",
      category: "Mobile",
      technologies: ["Android Studio", "Java", "XML"],
      highlight: "Domain-Based Idea Discovery with Structured Learning Paths",
      description: [
        "Built an Android application generating project ideas by technology domain and difficulty level.",
        "Features category-based filtering (Web, Android, AI, Core Java) and structured learning suggestions.",
        "Includes architectural breakdowns and milestone roadmaps for student developers.",
        "Clean, responsive XML UI optimized for mobile touch ergonomics.",
      ],
      demoType: "idea-generator",
    },
  ] as Project[],

  certification: {
    title: "Gen AI Academy",
    issuer: "Google Cloud × Hack2skill",
    date: "June 2025",
    imagePath: "/assets/certificate_photo.png",
    description: "Completed an intensive Generative AI program covering cutting-edge Google Cloud AI tooling and modern LLM application development workflows.",
    topics: [
      "Vertex AI",
      "Gemini APIs",
      "Imagen",
      "Streamlit",
      "Multimodal RAG"
    ],
  } as Certification,

  education: [
    {
      degree: "MCA – Master of Computer Applications",
      focus: "Artificial Intelligence Specialization",
      institution: "Parul University",
      location: "Vadodara, Gujarat",
      period: "2025 – Present",
      highlights: [
        "Specialized in Artificial Intelligence, Deep Learning, and Advanced Computing architectures.",
        "Focusing on real-world AI applications, machine learning workflows, and enterprise software engineering.",
      ],
    },
    {
      degree: "BCA – Bachelor of Computer Applications",
      focus: "Computer Applications & Software Foundations",
      institution: "Uka Tarsadia University",
      location: "Bardoli, Gujarat",
      period: "2022 – 2025",
      score: "CGPA: 7.24 / 10",
      highlights: [
        "Graduated with a strong academic standing of 7.24/10 CGPA.",
        "Core coursework in Java Programming, Object-Oriented Design, DBMS, Data Structures, and Web Technologies.",
      ],
    },
  ] as EducationItem[],

  softSkills: [
    { title: "Problem Solving", desc: "Algorithmic thinking and breaking down complex requirements into clean modular solutions." },
    { title: "Team Collaboration", desc: "Collaborating effectively across peer groups, code reviews, and shared project deliverables." },
    { title: "Communication", desc: "Articulating technical concepts clearly in documentation, presentations, and team discussions." },
    { title: "Quick Learning", desc: "Rapidly mastering new frameworks, libraries, and generative AI methodologies." },
    { title: "Adaptability", desc: "Pivoting seamlessly between frontend, backend Java, mobile development, and AI exploration." },
    { title: "Time Management", desc: "Prioritizing tasks, meeting milestone deadlines, and organizing structured workflows." },
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency", tag: "Technical & Professional" },
    { name: "Hindi", level: "Full Working Proficiency", tag: "Fluent" },
    { name: "Gujarati", level: "Native / Mother Tongue", tag: "Native" },
  ],
};
