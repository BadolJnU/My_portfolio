import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `I am a passionate Computer Science and Engineering graduate with a strong academic background and a zest for innovation. Join me as I share my projects, publications and experiences, showcasing my dedication to creating impactful solutions and pushing the boundaries of what's possible in the tech world. `;

export const ABOUT_TEXT = `Hello! I’m a passionate Computer Science and Engineering graduate from Bishops University in Quebec, Canada. My journey into programming started in first year of Bachelor degree when I learned C++. This sparked my curiosity about how software works and led me to pursue engineering.

I have a strong foundation in programming languages like Python, C/C++, JavaScript. I enjoy web development using React JS, Next JS, express JS. I also have experience with machine learning tools and frontend development using HTML/CSS. Additionally, I work with databases like SQL and Firebase.

I’ve gained practical experience as a Software Developer at Mercor, where I worked on projects to developing real time chatbot. I enjoy solving coding challenges on platforms like LeetCode, UVA and HackerRank, where I have solved over 250 problems and participated in different programming contest like ICPC, NCPC. I’m always eager to learn and explore new areas in machine learning, Generative AI, software development.

I also participate in extracurricular activities and hold certifications like Google Data Analyst.`;


export const PUBLICATIONS = [
  {
    title: "Performance Analysis and Mitigating the Challenges of Constraint-based Local Search,",
    authors: "A. R. Anik, K. Islam and M. M. A. Polash",
    conference: "2019 Joint 8th International Conference on Informatics, Electronics & Vision (ICIEV) and 2019 3rd International Conference on Imaging, Vision & Pattern Recognition (icIVPR), Spokane, WA, USA, 2019",
    link: "https://ieeexplore.ieee.org/document/8858506"    
  },
  {
    title: "Performance Analysis of Deep Neural Network Models for Weather Forecasting in Bangladesh",
    authors: "Badal, M.K.I., Saha",
    conference: "Proceedings of the Third International Conference on Trends in Computational and Cognitive Engineering. Lecture Notes in Networks and Systems, vol 348. Springer, Singapore",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-7597-3_7"
  }
]

export const EXPERIENCES = [
  {
    year: "Apr 2024 - Jun 2025",
    role: "Software Engineer",
    company: "Mercor",
    description: `Onboarded as a Software Engineer (remote) and trained on AWS, developing machine learning models and developing responsive UI.Looking forward to learn and grow`,
    technologies: ["Data Pipelines","AWS","Python", "Machine Learning", "ReactJs", "Chatbot"],
  },
  {
    year: "Jan 2023 - Dec 2023",
    role: "Teaching Assistant",
    company: "Bishops University",
    description: `Assisted professors in grading assignments, conducting lab sessions, and providing support to students in computer science courses. Helped clarify concepts, guided students through practical exercises, and contributed to a positive learning environment.`,
    technologies: ["Python","C++","Data Structures","Algorithm"],
  },
  {
    year: "Jan 2022 - May 2023",
    role: "Lecturer, CSE Department",
    company: "Royal University of Dhaka",
    description: `Taught undergraduate courses in computer science, including programming languages, data structures, and algorithms. Developed lesson plans, delivered lectures, and assessed student performance through assignments and exams. Mentored students and provided academic support to enhance their learning experience.`,
    technologies: ["Python","C++","Data Structures","Algorithm"],
  },
  {
    year: "June 2020 - Nov 2021",
    role: "Full Stack Developer",
    company: "Barikoi",
    description: `Developed and maintained web applications using Node JS for backend and React for frontend. Implemented RESTful APIs, integrated third-party services, and optimized application performance. Collaborated with cross-functional teams to deliver high-quality software solutions.`,
    technologies: ["Node", "React", "JavaScript", "HTML", "CSS", "RESTful APIs"],
  },
  {
    year: "Jan 2020 - May 2020",
    role: "Internship",
    company: "Barikoi",
    description: `Completed a five months internship program where I received training in MySQL, focusing on topics like Joins, relations, and basic commands. I acquired knowledge of Power BI, including various visualizations, and learned about DAX functions and Power Query. I  implemented machine learning algorithms within the Power BI, and successfully presented a project based on these topics.`,

    technologies: ["Python", "PowerBI", "ML","SQL"],
  }

];

export const EDUCATION = [
  {
    degree: "Master's in Computer Science",
    institution: "Bishops University, Quebec, Canada",
    duration: "Sept 2022 - Jan 2024",
    result: "89.6%",
    description:
      "Completed my master's degree with a focus on advanced computer science topics, including machine learning, data analysis, and software development. Engaged in various projects that enhanced my practical skills and theoretical knowledge. Graduated with a strong academic record and hands-on experience in cutting-edge technologies.",
  },
  {
    degree: "Bachelor in Computer Science and Engineering",
    institution: "Jagannath University, Dhaka, Bangladesh",
    duration: "Jan 2015 - Dec 2019",
    result: "3.57",
    description:
      "Graduated with a solid foundation in computer science and engineering principles. Gained practical experience through internships and projects, focusing on software development, web technologies, and data structures. Actively participated in coding competitions and extracurricular activities, which honed my problem-solving skills and teamwork abilities. Published research papers and contributed to various academic projects during my tenure.",
  },
]; 

export const PROJECTS = [
  {
    title:"Movie Recommendation System",
    image: project5,
    description:
    "Movie Recommendation System is a personal proejects that provides personalized movie recommendations based on user preferences. Built using Python, it leverages vectorization to analyze user input and suggest movies that align with their tastes. The system incorporates features such as user ratings, genre selection, and collaborative filtering to enhance the recommendation accuracy.",
    technologies:["Python","Feature Extraction","Data Cleaning","Vectorization"],
    github:"https://github.com/BadolJnU/movie-recommended-system",
  },
  {
    title: "Supervised Credit Card Fraud Detection",
    image: project1,
    description:
      "An advanced credit card fraud detection system utilizing machine learning algorithms to identify and prevent fraudulent transactions. The project involves data preprocessing, feature engineering, and model training using techniques such as decision trees, random forests, and logistic regression. The system is designed to analyze transaction patterns in real-time, providing alerts for potentially fraudulent activities while minimizing false positives.",
    technologies: ["Python", "Machine Learning", "Supervised Learning", "Data Preprocessing"],
    github : "https://github.com/BadolJnU/Fraud_detection",
  },
  {
    title: "Tour Booking Website",
    image: project2,
    description:
      "A comprehensive tour booking website that allows users to explore and book travel packages seamlessly. The platform features a user-friendly interface, secure payment gateway integration, and an admin panel for managing bookings and tour details. Built with a modern tech stack, the website ensures a smooth user experience and efficient backend operations.",
    technologies: ["React", "Tailwindcss", "Express", "MongoDB", "React-Icon"],
    github : "https://github.com/BadolJnU/Travel_Website"
  },
  {
    title: "ImagePie",
    image: project3,
    description:
      "Created a user-friendly web app to manipulate images, remove the background of the image, restrore the image and recolor the image. The app is deployed in vercel. Third party authentication is implemented using Google OAuth.",
    technologies: ["Next JS", "Cloudinary", "Vercel", "Google Auth", "Tailwind Css"],
    github : "https://github.com/BadolJnU/ImagePie/",
    live : "#" ,
  },
  {
    title: "HealthCare Dashboard using Power BI",
    image: project4,
    description:
      "A comprehensive healthcare dashboard developed using Power BI to visualize and analyze patient data, treatment outcomes, and operational efficiency. The dashboard features interactive reports, key performance indicators (KPIs), and data-driven insights to support decision-making in healthcare management. It integrates various data sources and employs advanced DAX functions for dynamic reporting.",
    technologies: ["MySQL", "Power BI", "Data Analyst",],
    github : "https://github.com/BadolJnU/healthCare-Dashboad-PowerBI",
  },
];

export const CONTACT = {
  address: "Dhaka, Bangladesh",
  phoneNo: "+880 1748864767",
  email: "badolcsejnu@gmail.com",
};