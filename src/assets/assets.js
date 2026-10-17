import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaLaptopCode } from 'react-icons/fa';

 import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.png';
import projectImg6 from '../assets/project6.png';
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.png";
import certificate4 from "../assets/certificate4.png";
import certificate5 from "../assets/certificate5.jpg";
import certificate6 from "../assets/certificate6.png";
import certificate7 from "../assets/certificate7.png";


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    /* description: 'Building responsive and interactive user interfaces with modern frameworks.', */
    tags: ['React', 'JavaScript', 'Html', 'CSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
   /*  description: 'Creating robust server-side applications and RESTful APIs.', */
    tags: ["Node.js","Express.js", "PHP", "REST API", "MongoDB","MySQL",]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    /* description: 'Designing and optimizing databases for performance and scalability.', */
    tags: ['MongoDB',  'MySQL', ]
  },
   {
    title: "Programming",
    icon: FaLaptopCode ,
    tags: ["Java","C", "JavaScript","PHP",
    ],
  },
  /* {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  }, */
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    /* description: 'Essential tools and technologies I use in my development workflow.', */
    tags: ['Git & GitHub', 'Vs Code', 'Postman' ]
  }
];



export const projects = [
  {
    title: "Job Portal",
    description: "Executed secure user authentication and authorization Developed REST APIs for job posting and applications Integrated MongoDB database for storing job listings and user data.",
    image: projectImg1,
    tech: ["React", "Express js", "MongoDB", "Node js"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    live: "https://job-portal-lake-nu.vercel.app/",
    code: "https://github.com/dollyanu/job-portal"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg2,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    live: "https://dollyanu.github.io/anupama-portfolio/",
    code: "https://github.com/dollyanu/anupama-portfolio"
  },
  {
   title: "PgHub - Student Accommodation",
    image: projectImg3,
    description: "A responsive student accommodation platform built using React, PHP, MySQL and Bootstrap.",
    tech: ["React", "PHP", "MySQL", "Bootstrap"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    live: "https://anupama1411.infinityfree.me/",
    code:"https://github.com/dollyanu/PGHub",
  },
  {
   title: "Tic-Tac-Toe Game",
    image: projectImg4,
    description: "A simple yet engaging Tic-Tac-Toe game built using React and JavaScript.",
    tech: ["React", "JavaScript"],
    icons: [FaReact, FaNodeJs],
    live: "https://dollyanu.github.io/TicTacTeo/",
    code:"https://github.com/dollyanu/TicTacTeo",
  },
  {
   title: "Candy Crush Game",
    image: projectImg6,
    description: "A simple yet engaging Candy Crush game built using React and JavaScript.",
    tech: ["React", "JavaScript"],
    icons: [FaReact, FaNodeJs],
    live: "https://dollyanu.github.io/CandyCrush/",
    code:"https://github.com/dollyanu/CandyCrush",
  },
  {
   title: "Calculator App",
    image: projectImg5,
    description: "A simple yet engaging calculator app built using React and JavaScript.",
    tech: ["React", "JavaScript"],
    icons: [FaReact, FaNodeJs],
    live: "https://dollyanu.github.io/Calculator/",
    code:"https://github.com/dollyanu/Calculator",
  },
];


export const experiences = [
  {
    role: "Web Development Intern",
    company: "InternShala",
    location: "Remote",
    duration: "July 2026 - Aug 2026",
    type: "Full Stack Web Development With Ai ",
    points: [
      "Built responsive web applications using React.js and Tailwind CSS.",
      "Developed REST APIs with Node.js and Express.js.",
      "Collaborated with the team using Git and GitHub.",
      "Worked on bug fixes, UI improvements, and feature implementation."
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Git"
    ]
  },
  {
  role: "Open Source Contributor",
  company: "Elite Coders Winter of Code (ECWoC)",
  location: "Remote",
  duration: "Dec 2025 - Jan 2026",
  type: "Open Source Contributor",

  points: [
    "Contributed to open-source projects by fixing bugs and implementing new features.",
    "Collaborated with mentors and developers using Git and GitHub.",
    "Improved UI components and fixed project issues.",
    "Learned open-source contribution workflow and code reviews."
  ],

  skills: [
    "Git",
    "GitHub",
    "React",
    "Open Source"
  ]
},
{
  role: "Java Developer Intern ",
  company: "HP Internship India",
  location: "On Site",
  duration: "Aug 2023 - Sep 2023",
  type: " Core Jave ",

  points: [
    " Developed Java applications using Core Java and object-oriented programming concepts. ",
    "Implemented JDBC database connectivity and used Git/GitHub for version control and collaboration."
  ],

  skills: [
    "Git",
    "GitHub",
    "Core Java"
  ]
}
];

export const certifications = [
  {
    image: certificate1,
    date: "March 23, 2026",
    title: "Open Source Contribution",
    issuer: "Elite Coders Winter of Code (ECWoC)",
    description:
      "Contributed to open-source projects by fixing issues, enhancing features, and collaborating with developers using Git and GitHub.",
    link: "https://drive.google.com/your-certificate-link",
  },
  {
    image: certificate2,
    date: "July 03, 2026",
    title: "AI & Cybersecurity Awareness",
    issuer: "Tata Consultancy Services",
    description:
      "Gained practical knowledge of artificial intelligence concepts, cybersecurity fundamentals, online safety, and responsible use of digital technologies.",
    link: "https://drive.google.com/your-certificate-link",
  },
  {
    image: certificate3,
    date: "July 09, 2026",
    title: "Generative AI Essentials",
    issuer: "Tata Consultancy Services",
    description:
      "Learned the fundamentals of Generative AI, prompt engineering, large language models (LLMs), and real-world AI applications.",
    link: "https://drive.google.com/your-certificate-link",
  },
  {
    image: certificate4,
    date: "December 18, 2025",
    title: "5-Day AI Agents Intensive Course",
    issuer: "Google & Kaggle",
    description:
      "Completed an intensive program on AI agents, prompt engineering, agent workflows, and building AI-powered applications using modern tools.",
    link: "https://drive.google.com/your-certificate-link",
  },
  {
    image: certificate5,
    date: "November 09, 2024",
    title: "Diploma in Computer Applications (DCA)",
    issuer: "STP Computer Education",
    description:
      "Acquired foundational knowledge of computer applications, Microsoft Office, internet technologies, operating systems, and basic programming concepts.",
    link: "https://drive.google.com/your-certificate-link",
  },
  {
    image: certificate6,
    date: "December 21, 2026",
    title: "Solutions Architecture Job Simulation",
    issuer: "Forage",
    description:
      "Completed a practical job simulation focused on cloud architecture, system design, scalable solutions, and client-focused technical decision-making.",
    link: "https://drive.google.com/your-certificate-link",
  },
  {
    image: certificate7,
    date: "December 11, 2024",
    title: "CSS (Basic)",
    issuer: "HackerRank",
    description:
      "Demonstrated proficiency in CSS fundamentals, including layouts, selectors, responsive design, Flexbox, Grid, and modern styling techniques.",
    link: "https://drive.google.com/your-certificate-link",
  },
];