import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    TrackIcon,
    tailwindcss,
    threads,
    typescript,
    scratch,
    apple,
    promtopia,
    voiceFlow,
    voice,
    chessIcon
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer (Personal Projects)",
        project_name: "Self-Learning & Projects",
        icon: scratch,
        iconBg: "#c7e0f2",
        date: "August 2024 - Present",
        points: [
            "Designed and developed several fully responsive web applications using React.js, Node.js, and MongoDB.",
            "Implemented dynamic user interfaces with modern libraries like GSAP for animations, improving user engagement.",
            "Built and integrated RESTful APIs, working with databases like MongoDB to handle data efficiently.",
            "Focused on improving performance and scalability of applications through clean, maintainable code practices.",
        ],
    },
    {
        title: "Frontend Developer (Open-AI Contributions)",
        project_name: "OpenAi & Wishper.io",
        icon: voiceFlow,
        iconBg: "#fbc3bc",
        date: "feb 2024 - March 2024",
        points: [
            "Contributed to voice application projects using Voiceflow, collaborating with a global community of developers.",
            "Fixed bugs and implemented new voice-based features using OpenAI Whisper.io for natural language processing and speech recognition.",
            "Gained valuable experience through peer code reviews and feedback loops, enhancing the accuracy and performance of voice interactions.",
            "Learned to work in a team environment, following Agile methodologies and using Git for version control, ensuring smooth collaboration on voice-focused projects.",
        ],
    },
    {
        title: "Web Developer (3D Projects)",
        project_name: "Freelance & Client Projects",
        icon: apple,
        iconBg: "#A2AAAD",
        date: "Nov 2023 - Dec 2023",
        points: [
            "Developed a 3D interactive model of the iPhone 15, focusing on providing an immersive user experience.",
            "Collaborated with stakeholders to gather design requirements and provided regular updates, ensuring the 3D project aligned with client expectations.",
            "Utilized technologies like Three.js, WebGL, and React.js to create a responsive, cross-device compatible 3D model.",
            "Enhanced project management skills by handling multiple phases of the 3D development process, meeting deadlines, and ensuring top-notch quality results."
        ],

    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/ritamdev2004@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ritam2OO4',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ritam-pan-395696289',
    }
];

export const projects = [
    {
        iconUrl: scratch,
        theme: 'btn-back-red',
        name: 'Amazon Like Wbesite',
        description: 'Developed a web application that tracks and notifies users of price changes for bags on Scratch, helping users find the best deals.',
        link: 'https://github.com/ritam2OO4/fullStack_scatch.git',
    },
    {
        iconUrl: promtopia,
        theme: 'btn-back-green',
        name: 'Full Stack AI based Proj',
        description: 'Created a full-stack in NEXT.JS replica of the popular discussion platform "ChatGPT Promt," enabling users to post and engage in generating promts for easy conversations.',
        link: 'https://github.com/ritam2OO4/promtopia.git',
    },
    {
        iconUrl: apple,
        theme: 'btn-back-blue',
        name: '3D Iphone',
        description: 'Designed and built a landing page for iphone-15 and comparing diffrent version on the market, streamlining the mobile-buying process.',
        link: 'https://github.com/ritam2OO4/iPhone_15-3D.git',
    },
    {
        iconUrl: voice,
        theme: 'btn-back-pink',
        name: 'React integrated OpenAI',
        description: 'Built a complete voice converter based at real time functinality, allowing users to share live recorded audio and pre-recorded as well,  connect with friends and a familiar with each other without any language boudaries and environment.',
        link: 'https://github.com/ritam2OO4/Voice_flow.git',
    },
    {
        iconUrl: chessIcon,
        theme: 'btn-back-black',
        name: 'Real-Chess Application',
        description: 'Developed a web application for real time chess listings and connecting with people, facilitating property of socketio and connecting as player and also spectate them with popcons .',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: TrackIcon,
        theme: 'btn-back-yellow',
        name: 'Track me!!',
        description: 'App that leverages AI to automatically generate concise & informative summaries from your Location and keep tracking you and your surrounding and auto refresh at every 5sec.. ',
        link: 'https://github.com/ritam2OO4/location_backend.git',
    }
];