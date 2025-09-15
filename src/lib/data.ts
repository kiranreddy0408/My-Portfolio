import { Briefcase, FolderGit2, GraduationCap, Award, Code, Mail, Phone, MapPin, Linkedin, Github, User, Code2, AppWindow, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const portfolioData = {
  name: "Kiran Reddy Boojala",
  title: "AI Agent Developer",
  about: {
    description: "My fascination isn't just with writing code; it's with creating intelligent systems that solve real-world problems. I'm a Software Developer with a core focus on Artificial Intelligence, driven to build autonomous agents and intuitive applications that can reason, learn, and adapt. This passion for innovation led my team and me to win 1st Prize in a National Level AI Hackathon for our personalized learning platform. I thrive on transforming complex challenges into elegant, efficient, and intelligent software solutions.",
    stats: [
      { value: "1+", label: "Years of experience" },
      { value: "5+", label: "Completed Projects" },
      { value: "95%", label: "Client satisfaction" },
    ],
    services: [
      { title: "AI-Powered Web Applications", icon: Code2 },
      { title: "Intelligent Agent Development", icon: AppWindow },
      { title: "API & Database Integration", icon: Database },
    ]
  },
  contact: {
    email: "kiranreddy.b0408@gmail.com",
    phone: "+91 9390476853",
    location: "Telangana, India",
    social: {
      linkedin: "https://linkedin.com/in/kiran0408",
      github: "https://github.com/kiranreddy0408",
    },
  },
  resume: `Kiran Reddy Boojala
9390476853 | kiranreddy.b0408@gmail.com | Telangana, India | linkedin.com/in/kiran0408 | github.com/kiranreddy0408

Experience
Software Developer Intern
One Convergence Devices Pvt. Ltd, Hyderabad, India
March 2023 – May 2024
• Designed, developed, and debugged web applications, improving performance and reducing bugs by 70%.
• Integrated APIs and databases handling 1000+ records, reducing response time by 30%.
• Collaborated in an agile team of 10-15, implementing scalable features and conducting performance testing across 50+ cases.
• Project I: GPTfu.com – Cataloged 5,000+ AI tools, created trial feature for premium tools, improving discoverability by 40% and engagement by 35%.
• Project II: AI-Powered Communication Card Generator – Built a scalable platform generating 100+ custom cards monthly, enhancing engagement by 30%.

Data Annotation Intern
MenorahAI, Remote
Jan 2023 – Mar 2023
• Annotated over 2000 images to support development of high-quality ML models.

Projects
VizAgent | FastAPI, Gemini, LangChain, Plotly
• Built an AI agent to query databases in natural language, auto-generating SQL via LLMs.
• Integrated LangChain tool calling for SQL generation, querying, and visualization with 90%+ accuracy.
• Reduced analysis time by 70% compared to manual querying.

Todo Summary Agent | React, Node.js, Slack
• Developed a productivity app to manage todos, summarize tasks with Gemini LLM, and send summaries to Slack.

EduElite | AI-driven Personalized Learning App
• Engineered an AI-powered learning prototype tested by 10+ users in a national hackathon.
• Incorporated AI-driven quizzes, AI chat, and mock interviews, boosting engagement and accessibility by 30-40%.

Education
BV Raju Institute of Technology
B.Tech in Computer Science and Engineering — 9.02 CGPA
Dec 2021 – Apr 2025, Telangana, India

Narayana Junior College
Intermediate — 97%
May 2019 – Aug 2021, Telangana, India

Chanakya High School
10th Standard — 9.8 GPA
Jun 2018 – Mar 2019, Telangana, India

Achievements
Winner of National Level Hackathon: Secured 1st prize in Education (AI) category for EduElite, an AI-tailored learning platform.

Technical Skills
Languages: Java, Python, SQL
Web Development: FastAPI, Flask, React, Node.js, HTML/CSS
AI/ML Tools: LangChain, RAG, Agentic Workflows, Vector Stores (FAISS, Chroma)
DevOps Tools: Git, GitHub, Postman, Docker (Basic), VS Code
Software Engineering: OOP, Code Review, Automation Testing

Publications
B. K. Reddy, “Enhancing heart disease forecasting through advanced predictive modeling,” in Proceedings of the 5th International Conference on ICIRCA.
`,
  experience: [
    {
      role: "Software Developer Intern",
      company: "One Convergence Devices Pvt. Ltd",
      duration: "March 2023 – May 2024",
      location: "Hyderabad, India",
      points: [
        "Engineered and optimized full-stack web applications, architecting solutions that slashed bugs by 70% and significantly boosted overall performance.",
        "Architected robust API and database integrations for systems handling over 1000 records, cutting server response time by 30% through efficient data processing.",
        "Drove the implementation of scalable features within a 15-member agile team, validating application reliability with over 50 distinct performance test cases.",
        "Project I: GPTfu.com – Cataloged 5,000+ AI tools, created trial feature for premium tools, improving discoverability by 40% and engagement by 35%.",
        "Project II: AI-Powered Communication Card Generator – Built a scalable platform generating 100+ custom cards monthly, enhancing engagement by 30%.",
      ],
    },
    {
      role: "Data Annotation Intern",
      company: "MenorahAI",
      duration: "Jan 2023 – Mar 2023",
      location: "Remote",
      points: [
        "Executed precise data annotation for over 2,000 images, providing the critical ground-truth data essential for training high-accuracy machine learning models.",
      ],
    },
  ],
  projects: [
    {
      title: "VizAgent",
      tech: ["FastAPI", "Gemini", "LangChain", "Plotly"],
      description: "An intelligent analytics agent that empowers users to talk to their data. VizAgent translates plain English into complex SQL queries, fetching and visualizing insights instantly. With over 90% query accuracy, it reduces data analysis time by 70%, making data-driven decisions accessible to everyone.",
      github: "https://github.com/kiranreddy0408", 
    },
    {
      title: "Todo Summary Agent",
      tech: ["React", "Node.js", "Slack", "Gemini"],
      description: "Cutting through the clutter of daily tasks. This full-stack productivity tool uses the Gemini LLM to intelligently summarize your to-do list and delivers a concise, actionable digest directly to your Slack, ensuring you focus on what truly matters.",
      github: "https://github.com/kiranreddy0408",
    },
    {
      title: "EduElite (1st Prize, National AI Hackathon)",
      tech: ["AI", "React", "Node.js"],
      description: "A prize-winning prototype for the future of personalized education. This AI-powered platform delivers adaptive quizzes, an interactive AI tutor, and mock interviews, creating a dynamic learning journey that boosted user engagement by up to 40%.",
      github: "https://github.com/kiranreddy0408",
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "BV Raju Institute of Technology",
      duration: "Dec 2021 – Apr 2025",
      grade: "9.02 CGPA",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      duration: "May 2019 – Aug 2021",
      grade: "97%",
    },
    {
      degree: "10th Standard",
      institution: "Chanakya High School",
      duration: "Jun 2018 – Mar 2019",
      grade: "9.8 GPA",
    },
  ],
  skills: {
    "Languages": ["Java", "Python", "SQL"],
    "Web Development": ["FastAPI", "Flask", "React", "Node.js", "HTML/CSS"],
    "AI/ML Tools": ["LangChain", "RAG", "Agentic Workflows", "Vector Stores (FAISS, Chroma)"],
    "DevOps Tools": ["Git", "GitHub", "Postman", "Docker"],
    "Software Engineering": ["OOP", "Code Review", "Automation Testing"],
  },
  achievements: [
    {
      title: "Winner of National Level Hackathon",
      description: "Secured 1st prize in Education (AI) category for EduElite, an AI-tailored learning platform.",
    },
  ],
  publication: "B. K. Reddy, “Enhancing heart disease forecasting through advanced predictive modeling,” in Proceedings of the 5th International Conference on ICIRCA.",
};

export const sectionIcons: { [key: string]: LucideIcon } = {
  experience: Briefcase,
  projects: FolderGit2,
  education: GraduationCap,
  skills: Code,
  achievements: Award,
  about: User,
};

export const contactIcons: { [key: string]: LucideIcon } = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  linkedin: Linkedin,
  github: Github
};
