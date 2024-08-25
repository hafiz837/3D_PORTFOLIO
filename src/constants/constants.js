import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    freelancer,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    devsinc,
    ideoversity,
    express,
    bootstrap
  } from "../assets";
  
   const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React & Node.js Specialist",
      icon: mobile,
    },
    {
      title: "3D Web Applications Developer",
      icon: backend,
    },
    {
      title: "Interactive UI/UX Designer",
      icon: creator,
    },
  ]
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Devsinc",
      icon: devsinc,
      iconBg: "white",
      date: "May 2024 - Aug 2024",
      points: [
        "Full Stack Marketplace Website: Developed with Node.js, Express.js, and MongoDB; features authentication, RESTful APIs, geo-coding, and Multer-based file storage",
        "Responsive E-commerce Website: Created a dynamic online store using HTML, CSS, JavaScript, and Tailwind CSS.",
        "React Expense Tracker: Built a React-based expense tracker, showcasing state management and deployment skills.",
        "Interactive Games: Developed classic games like Tic-Tac-Toe and Rock-Paper-Scissors using JavaScript, HTML, and CSS.",
        "Advanced Backend Features: Implemented session management, authentication, and database handling using Node.js, MongoDB Atlas, Mongoose, and Multer."
      ],
    },
    {
      title: "Full Stack Web Developer",
      company_name: "Freelancer",
      icon: freelancer,
      iconBg: "white",
      date: "May 2022 - March 2024",
      points: [
        "Large-Scale Web Application: Developed using React and Node.js, leading to a 30% increase in user satisfaction.",
        "Backend Services: Built and maintained with Express.js and MongoDB, reducing downtime by 40%.",
        "Advanced Features: Implemented optimizations that increased user engagement by 25%.",
        "Enhanced Full-Stack Apps: Added features with React and Node.js for a seamless user experience.",
        "Timely Project Delivery: Collaborated effectively to ensure on-time delivery of high-quality solutions."
      ],
    },
    {
      title: "Node.js Web Development Intern",
      company_name: "IDEOVERSITY",
      icon: ideoversity,
      iconBg: "white",
      date: "Aug 2024 - Present",
      points: [
        "Explored Advanced Node.js & Express.js: Focused on unit testing, integration testing, and mastering Test-Driven Development.",
        "Gained Practical Experience: Applied cutting-edge techniques and tools in real-world projects to enhance backend development skills.",
        "Enhanced Software Development Practices: Leveraged advanced concepts to improve code quality and project efficiency in a professional setting.",
      
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services,navLinks, technologies, experiences, testimonials, projects };