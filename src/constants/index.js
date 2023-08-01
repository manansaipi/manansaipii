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
  gcp
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
    date: "Sep 2021 - Sep 2024 (Expected)",
    points: [
      "Current GPA : 3.75/4.00", 
      "Related Courses :  Server Side Internet Programming, Coding and Big Data, Database System, Data Structures and Algorithms, Object Oriented and Visual Programming, Web Programming, Wireless and Mobile Programming",
    ],
  },
  {
    title: "Bangkit Academy led by Google, Gojek, Tokopedia & Traveloka",
    company_name: "Bootcamp",
    icon: tesla,
    iconBg: "#f1f1f1",
    date: "Feb 2023 - July 2023",
    points: [
      "Effective Collaboration: Successfully working in diverse teams, communicating, cooperating, and solving problems together to complete various projects.",
      "Cloud Computing Expertise: Developed in-depth knowledge of Google Cloud Platform (GCP) and demonstrated proficiency in deploying and managing cloud-based applications with scalability, reliability, and security.",
      "English Language Proficiency: Developed strong English language skills through constant practice and immersion in an Englishspeaking environment.",
      "Industry-Relevant Projects: Engaged in projects aligned with industry standards, collaborating with industry partners and mentors.Gained practical experience and tackled real-world challenges.",
      "Leadership Abilities: Demonstrated leadership by organizing study groups, mentoring peers, and leading project teams. Showcased strong decision-making, problem-solving, and motivational skills.",
      "Continuous Learning: Actively seeking new knowledge, and staying updated with the latest trends in cloud computing and related fields for personal and professional growth."
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