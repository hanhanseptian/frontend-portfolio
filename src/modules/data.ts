export const social_media = [
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    color: "text-red-500",
    link: "https://www.instagram.com/hanhan_septiannn/",
  },
  {
    name: "Twitter",
    icon: "fa-brands fa-x-twitter",
    color: "",
    link: "https://x.com/hanhan_septiann",
  },
  {
    name: "Linkedin",
    icon: "fa-brands fa-linkedin",
    color: "text-blue-400",
    link: "https://www.linkedin.com/in/hanhan-septian-3b5124198/",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    color: "text-blue-500",
    link: "https://www.facebook.com/manghanz.manghanz",
  },
];
export const contacts = {
  address: {
    address: "Gg. Warta No.24, Cibabat, Cimahi Utara, Cimahi City",
    icon: "fa-solid fa-location-dot",
    color: "text-primary",
    link: "https://www.google.com/maps/place/6%C2%B052'23.6%22S+107%C2%B033'27.1%22E/@-6.8732222,107.5549529,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.8732222!4d107.5575278?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
  },
  email: {
    address: "septianhanhan0909@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  whatsapp: {
    number: "81218030424",
    icon: "fa-brands fa-whatsapp",
    color: "text-green-500",
  },
};
export const educations = [
  {
    title: "Politeknik Negeri Bandung",
    major: "Informatics Engineering",
    year: "2020 - 2023",
    gpa: "3.62/4.00",
    description:
      "I learned the fundamentals of programming, web development, and database management. I also gained hands-on experience through various projects and internships.",
  },
  {
    title: "SMKN 1 Katapang",
    major: "Network Engineering",
    year: "2017 - 2020",
    description:
      "I learned the fundamentals of networking, including network protocols, routing, and switching. I also gained hands-on experience through various projects and internships.",
  },
  {
    title: "SMPN 1 Talegong",
    major: "Junior High School",
    year: "2014 - 2017",
  },
  {
    title: "SDN Sukamulya 03",
    major: "Elementary School",
    year: "2008 - 2014",
  },
];
export const achievements = [
  {
    title: "Best Final Project of Informatics Engineering",
    organization: "Politeknik Negeri Bandung",
    year: "2023",
    description:
      "I was awarded the best final project of Informatics Engineering for my project on developing a web-based application.",
    image: new URL("@/assets/images/achievement-001.png", import.meta.url).href,
  },
  {
    title: "Sanbercode DevOps Training Program",
    organization: "Sanbercode",
    year: "2023",
    description:
      "I completed the Sanbercode Devops Training Program, where I learned about DevOps practices and tools.",
    image: new URL("@/assets/images/achievement-002.png", import.meta.url).href,
  },
];
export const work_experiences = [
  {
    company: "PT Kurasi Media Nusantara",
    position: "Fullstack Developer",
    periode: "September 2022 - Now",
    image: new URL("@/assets/images/logo-kurasi.png", import.meta.url).href,
    description:
      "Currently working as a Fullstack Developer, handling both backend and frontend development. I work with modern tech stacks to build internal tools, APIs, and user interfaces. In addition to coding, I also take part in DevOps tasks — managing deployments, Docker setups, and maintaining development environments. This role has helped me grow into a more well-rounded developer with a better understanding of both development and infrastructure.",
    show_description: false,
  },
  {
    company: "CV Kabayan Consulting",
    position: "Frontend Developer",
    periode: "July 2022 - September 2022",
    image: new URL(
      "@/assets/images/logo-kabayan-consulting.png",
      import.meta.url
    ).href,
    description:
      "Built small websites using Vue.js, focusing on responsive design and smooth user experience. Learned a lot about front-end workflows and enjoyed turning ideas into clean, functional interfaces. This role helped me sharpen my frontend fundamentals and collaborate closely with designers and clients.",
  },
];
export const personal_projects = [
  {
    name: "Internet Provider Management Web Application ",
    position: "Fullstack Developer",
    tech_stack: [
      "FastApi",
      "Vue",
      "Ipaymu Payment Gateway",
      "Whatsapp Gateway",
      "Telegram",
    ],
    periode: "December 2024 – February 2025",
    description:
      "I developed a web-based application designed to help internet service providers efficiently manage their customer database. The system is fully integrated with Mikrotik, enabling automated network management tasks such as bandwidth control, user authentication, and connection monitoring. Additionally, it features seamless integration with a payment gateway to handle billing processes—from invoice generation to real-time payment confirmation—ensuring a smoother experience for both the provider and the customer. This project allowed me to combine backend logic, network automation, and third-party API integration into a cohesive, user-friendly platform.",
  },
  {
    name: "Talent Matching Web Application",
    position: "Team Leader & Frontend Developer",
    tech_stack: ["ExpressJS", "Vue"],
    periode: "January 2023 – July 2023",
    description:
      "I led the development of a web-based talent matching application designed to assist organizations in identifying suitable Software Developer candidates based on specific criteria. The system utilizes Profile Matching and Sanchez Similarity methods to analyze candidate profiles and match them with the required skill sets and qualifications. My role involved leading the team and developing the frontend interface, ensuring a seamless and intuitive user experience for both recruiters and candidates. This project highlights the integration of decision support algorithms into a practical recruitment tool.",
  },
  {
    name: "Fit & Proper Test Web Application",
    position: "Team Leader & Frontend Developer",
    tech_stack: ["Strapi", "ReactJS"],
    periode: "March 2022 – June 2022",
    description:
      "I led the development of a web-based application specifically designed to support the Fit & Proper Test process at PLN. The application facilitates the assessment and evaluation of employee candidates through structured testing, scoring, and reporting modules. It streamlines the entire process—from candidate registration, test scheduling, and online test execution to real-time result analysis and final recommendation generation. My role focused on both project leadership and frontend development, ensuring the platform was intuitive, efficient, and aligned with PLN's internal evaluation standards.",
  },
  {
    name: "Assets Management Web Application",
    position: "Team Leader & Fullstack Developer",
    tech_stack: ["PHP Native"],
    periode: "July 2021 – September 2021",
    description:
      "I led the development of a web-based asset management application for Pertamina Lubricants, aimed at improving the tracking, utilization, and maintenance of company assets. The system allows users to record asset data, monitor asset conditions, schedule maintenance, and generate detailed reports for operational and audit purposes. As a fullstack developer and team leader, I was responsible for designing and implementing both the frontend interface and backend logic, ensuring seamless interaction, data accuracy, and alignment with Pertamina’s internal workflows and asset governance policies.",
  },
  {
    name: "Sadhel-X Mobile Application",
    position: "Frontend Developer",
    tech_stack: ["Go", "React Native"],
    periode: "June 2021 – December 2021",
    description:
      "I contributed to the development of Sadhel-X, a mobile application that combines cycling activity tracking with social media features. The app enables users to record their cycling routes, track distance and speed, and share their rides with others. Users can also post updates, like and comment on others’ activities, and interact with the cycling community in real-time. As a frontend developer, I focused on building an engaging and responsive user interface that delivers a seamless experience across various mobile devices.",
  },
];
export const programming_languages = [
  {
    name: "Python",
    logo: new URL("@/assets/images/logo-python.webp", import.meta.url).href,
  },
  {
    name: "Typescript",
    logo: new URL("@/assets/images/logo-typescript.svg", import.meta.url).href,
  },
  {
    name: "Javascript",
    logo: new URL("@/assets/images/logo-javascript.png", import.meta.url).href,
  },
  {
    name: "PHP",
    logo: new URL("@/assets/images/logo-php.png", import.meta.url).href,
  },
  {
    name: "HTML",
    logo: new URL("@/assets/images/logo-html.png", import.meta.url).href,
  },
  {
    name: "CSS",
    logo: new URL("@/assets/images/logo-css.png", import.meta.url).href,
  },
];
export const frameworks = [
  {
    name: "FastApi",
    logo: new URL("@/assets/images/logo-fastapi.png", import.meta.url).href,
  },
  {
    name: "Flask",
    logo: new URL("@/assets/images/logo-flask.webp", import.meta.url).href,
  },
  {
    name: "Node JS",
    logo: new URL("@/assets/images/logo-nodejs.png", import.meta.url).href,
  },
  {
    name: "Vue",
    logo: new URL("@/assets/images/logo-vue.png", import.meta.url).href,
  },
  {
    name: "Laravel",
    logo: new URL("@/assets/images/logo-laravel.png", import.meta.url).href,
  },
];
export const databases = [
  {
    name: "MySQL",
    logo: new URL("@/assets/images/logo-mysql.png", import.meta.url).href,
  },
  {
    name: "MongoDB",
    logo: new URL("@/assets/images/logo-mongodb.png", import.meta.url).href,
  },
];
export const tools = [
  {
    name: "Linux",
    logo: new URL("@/assets/images/logo-linux.png", import.meta.url).href,
  },
  {
    name: "Docker",
    logo: new URL("@/assets/images/logo-docker.webp", import.meta.url).href,
  },
  {
    name: "Nginx",
    logo: new URL("@/assets/images/logo-nginx.webp", import.meta.url).href,
  },
  {
    name: "Termius",
    logo: new URL("@/assets/images/logo-termius.png", import.meta.url).href,
  },
  {
    name: "Jira",
    logo: new URL("@/assets/images/logo-jira.png", import.meta.url).href,
  },
];
export const libraries = [
  {
    name: "Bootstrap",
    logo: new URL("@/assets/images/logo-bootstrap.png", import.meta.url).href,
  },
  {
    name: "Tailwind CSS",
    logo: new URL("@/assets/images/logo-tailwindcss.png", import.meta.url).href,
  },
  {
    name: "Vuetify",
    logo: new URL("@/assets/images/logo-vuetify.png", import.meta.url).href,
  },
  {
    name: "Celery",
    logo: new URL("@/assets/images/logo-celery.png", import.meta.url).href,
  },
  {
    name: "RabbitMQ",
    logo: new URL("@/assets/images/logo-rabbitmq.png", import.meta.url).href,
  },
];
