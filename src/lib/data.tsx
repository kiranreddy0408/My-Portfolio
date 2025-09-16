import { Briefcase, FolderGit2, GraduationCap, Award, Code, Mail, Phone, MapPin, Linkedin, Github, User, Code2, AppWindow, Database, LucideIcon, ExternalLink } from 'lucide-react';
import { FaJava } from 'react-icons/fa';
import { SiFastapi, SiFlask, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss, SiGit, SiGithub, SiDocker, SiPostman, SiPython, SiLangchain, SiPostgresql, SiOpenai } from 'react-icons/si';

const iconSize = "1.25rem";

const skillIcons = {
  python: (props: any) => <SiPython size={iconSize} {...props} />,
  fastapi: (props: any) => <SiFastapi size={iconSize} {...props} />,
  flask: (props: any) => <SiFlask size={iconSize} {...props} />,
  react: (props: any) => <SiReact size={iconSize} {...props} />,
  nodejs: (props: any) => <SiNodedotjs size={iconSize} {...props} />,
  html5: (props: any) => <SiHtml5 size={iconSize} {...props} />,
  css3: (props: any) => <SiCss3 size={iconSize} {...props} />,
  javascript: (props: any) => <SiJavascript size={iconSize} {...props} />,
  typescript: (props: any) => <SiTypescript size={iconSize} {...props} />,
  tailwindcss: (props: any) => <SiTailwindcss size={iconSize} {...props} />,
  git: (props: any) => <SiGit size={iconSize} {...props} />,
  github: (props: any) => <SiGithub size={iconSize} {...props} />,
  docker: (props: any) => <SiDocker size={iconSize} {...props} />,
  postman: (props: any) => <SiPostman size={iconSize} {...props} />,
  java: (props: any) => <FaJava size={iconSize} {...props} />,
  langchain: (props: any) => <SiLangchain size={iconSize} {...props} />,
  postgresql: (props: any) => <SiPostgresql size={iconSize} {...props} />,
  openai: (props: any) => <SiOpenai size={iconSize} {...props} />,
  sql: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 17.4c-2.4.3-4.8.3-7.2 0-.3-2.3-.3-4.6 0-6.9 2.4-.3 4.8-.3 7.2 0M4 17.4c2.4.3 4.8.3 7.2 0-.3-2.3-.3-4.6 0-6.9-2.4-.3-4.8-.3-7.2 0M11.2 6.6C8.8 6.3 6.4 6.3 4 6.6c.3 2.3.3 4.6 0 6.9 2.4.3 4.8.3 7.2 0" />
      <path d="M11.2 6.6c.3 2.3.3 4.6 0 6.9" />
    </svg>
  ),
  rag: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m15.87 3.5-3.37 3.37" />
      <path d="m12.5 6.87 3.37-3.37" />
      <path d="M3.5 15.87 6.87 12.5" />
      <path d="m6.87 15.87 3.37-3.37" />
      <path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
      <path d="m14.5 14.5 4-4" />
      <path d="m3 21 6-6" />
    </svg>
  ),
  agents: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  vectorstores: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
      <path d="m12 22.08V12" />
    </svg>
  ),
  oop: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 16h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" />
      <path d="M8 8H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
    </svg>
  ),
  codereview: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10.25 4.75 3.75 12l6.5 7.25" />
      <path d="M13.75 19.25 20.25 12l-6.5-7.25" />
      <path d="m14 15-4-6" />
    </svg>
  ),
  testing: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M12 14v-1" />
      <path d="M12 8V7" />
      <path d="m15 11-1-1" />
      <path d="m9 17-1-1" />
    </svg>
  ),
  gemini: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 18V9" />
    </svg>
  ),
  chromadb: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 7h10v10H7z" />
      <path d="M3 7v10h4" />
      <path d="M17 7h4v10h-4" />
      <path d="M7 3h10v4H7z" />
      <path d="M7 17h10v4H7z" />
    </svg>
  ),
};

export const skillsData: Record<string, { name: string; icon: (props: any) => JSX.Element }[]> = {
  "Languages": [
    { name: "Java", icon: skillIcons.java },
    { name: "Python", icon: skillIcons.python },
    { name: "SQL", icon: skillIcons.sql },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: skillIcons.postgresql },
    { name: "ChromaDB", icon: skillIcons.chromadb },
  ],
  "Web Development": [
    { name: "FastAPI", icon: skillIcons.fastapi },
    { name: "Flask", icon: skillIcons.flask },
    { name: "React", icon: skillIcons.react },
    { name: "Node.js", icon: skillIcons.nodejs },
    { name: "HTML/CSS", icon: skillIcons.html5 },
  ],
  "AI/ML Tools": [
    { name: "Gemini", icon: skillIcons.gemini },
    { name: "OpenAI", icon: skillIcons.openai },
    { name: "LangChain", icon: skillIcons.langchain },
    { name: "RAG", icon: skillIcons.rag },
    { name: "Agentic Workflows", icon: skillIcons.agents },
    // { name: "Vector Stores", icon: skillIcons.vectorstores },
  ],
  "DevOps Tools": [
    { name: "Git", icon: skillIcons.git },
    { name: "GitHub", icon: skillIcons.github },
    { name: "Postman", icon: skillIcons.postman },
    { name: "Docker", icon: skillIcons.docker },
  ],
  "Software Engineering": [
    { name: "OOP", icon: skillIcons.oop },
    { name: "Code Review", icon: skillIcons.codereview },
    { name: "Automation Testing", icon: skillIcons.testing },
  ],
};

export const portfolioData = {
  name: "Kiran Reddy Boojala",
  title: "AI Agent Developer",
  about: {
    description: "As a Software Developer, I'm passionate about building AI-powered applications that solve real-world problems. This drive culminated in winning 1st Place at a National AI Hackathon. I enjoy the entire process of creation, from a complex idea to an intelligent and functional product.",
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
  experience: [
    {
      role: "Software Developer Intern",
      company: "One Convergence Devices Pvt. Ltd",
      duration: "March 2023 – May 2024",
      location: "Remote",
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
      id: "vizagent",
      title: "VizAgent",
      tech: ["FastAPI", "Gemini","PostgresSQL", "LangChain", "Plotly"],
      description: "An intelligent analytics agent that empowers users to talk to their data. VizAgent translates plain English into complex SQL queries, fetching and visualizing insights instantly. With over 90% query accuracy, it reduces data analysis time by 70%, making data-driven decisions accessible to everyone.",
      github: "https://github.com/kiranreddy0408/VizAgent",
      liveUrl: "https://github.com/kiranreddy0408/VizAgent",
      imageUrl: "vizagent-screenshot",
      imageHint: "data analytics dashboard"
    },
    {
      id: "todo-summary",
      title: "Todo Summary Agent",
      tech: ["React", "Node.js","PostgresSQL", "Slack", "Gemini"],
      description: "Cutting through the clutter of daily tasks. This full-stack productivity tool uses the Gemini LLM to intelligently summarize your to-do list and delivers a concise, actionable digest directly to your Slack, ensuring you focus on what truly matters.",
      github: "https://github.com/kiranreddy0408/todo-ai-agent",
      liveUrl: "https://todo-ai-agent.vercel.app",
      imageUrl: "todo-summary-screenshot",
      imageHint: "productivity app interface"
    },
    {
      id: "eduelite",
      title: "EduElite (1st Prize, National AI Hackathon)",
      tech: ["AI", "Flask", "Gemini"],
      description: "A prize-winning prototype for the future of personalized education. This AI-powered platform delivers adaptive quizzes, an interactive AI tutor, and mock interviews, creating a dynamic learning journey that boosted user engagement by up to 40%.",
      github: "https://github.com/kiranreddy0408/LearnwithGemini/tree/main/prototypeV1",
      liveUrl: "https://kiranreddy.pythonanywhere.com",
      imageUrl: "eduelite-screenshot",
      imageHint: "education platform"
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
  achievements: [
    {
      title: "Winner of National Level Hackathon",
      description: "Secured 1st prize in Education (AI) category for EduElite, an AI-tailored learning platform.",
    },
  ],
  publication: "B. K. Reddy, “Enhancing heart disease forecasting through advanced predictive modeling,” in Proceedings of the 5th International Conference on ICIRCA.",
  resume: ""
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
