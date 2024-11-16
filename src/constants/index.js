import {
  backend,
  creator,
  laravel,
  reactjs,
  nodejs,
  git,
  docker,
  starbucks,
  tesla,
  carrent,
  flutter,
  gcp,
  dpr,
  mattel
} from "../assets";

export const navLinks = [
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "President University",
    company_name: "Bachelor Degree in Informatics",
    icon: starbucks,
    iconBg: "#f1f1f1",
    date: "Sep 2021 - Dec 2024 (Expected)",
    points: [
      "Current GPA : 3.88/4.00", 
      "Related Courses :  Server Side Internet Programming, Coding and Big Data, Database System, Data Structures and Algorithms, Object Oriented and Visual Programming, Web Programming, Wireless and Mobile Programming, Software Engineering, Network Security, Internet of Things, Artificial Intelligence, 	Virtual Reality and Game Development, Operating System Design, 	Multimedia Application Development",
    ],
  },
  {
    title: "Bangkit Academy led by Google, Gojek, Tokopedia & Traveloka",
    company_name: "Bootcamp",
    icon: tesla,
    iconBg: "#f1f1f1",
    date: "Feb 2023 - July 2023",
    points: [
      "Gained expertise in cloud computing concepts, including service models (IaaS, PaaS, SaaS) and cloud architecture.",
      "Developed proficiency in Google Cloud Platform (GCP) services, including Compute Engine, App Engine, Cloud Run, Cloud Storage, Cloud SQL, etc",
      "Completed hands-on projects, such as developing and deploying scalable APIs on GCP, utilizing App Engine for hosting, Cloud Storage for managing static assets, and Cloud SQL for data storage.",
      "Implemented continuous integration and continuous deployment (CI/CD) pipelines, automating deployment processes for faster iterations and improved development efficiency.",
      "Collaborated in a team to integrate APIs with frontend applications, ensuring seamless data flow and user experience."
    ],
  },
  {
    title: "Sekretariat Jendral DPR RI",
    company_name: "IT Programmer Intern",
    icon: dpr,
    iconBg: "#f1f1f1",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Developed a data visualization application like Tableau/Power BI using Laravel and SQL, enabling users to create custom dashboards with a variety of charts. Users can select and arrange charts according to their preferences, offering a highly adaptable and personalized experience",
      "Designed an efficient data retrieval system (scheduler) using Node.js, which periodically updates a smaller dataset from the main database, ensuring faster query times for the dashboard website.",
      "Played a key role in designing the infrastructure for the \"Improvisasi Dashboard Website Program Legislasi Nasional DPR\" proposal. This included system design, architectural design, detailed design, use case diagrams, activity diagrams, and entity relationship diagrams, with a focus on improving the efficiency and accountability of the DPR website using the RUU dataset."
      ],
  },
  {
    title: "PT. Mattel Indonesia",
    company_name: "Full Stack Develooper Intern",
    icon: mattel,
    iconBg: "#f1f1f1",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Spearheaded the digital transformation of manual processes, replacing paper-based and Excel-based systems with automated solutions to enhance efficiency and accuracy",    
      "Designed, built, and deployed over ten bespoke systems tailored to various departmental needs, utilizing ASP.NET, Power Apps, and Power Automate, C#, VB, and SQL Server, which resulted in significant improvements in workflow efficiency and employee productivity.",
      "Managed and maintained company data through SQL Server for database management and Power BI for data visualization and reporting. Integrated Gateway to streamline data accessibility, enabling informed decision-making and enhancing data security."
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
  

];

export { services, technologies, experiences, testimonials, projects };