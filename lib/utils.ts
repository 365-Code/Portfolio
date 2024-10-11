import { Code, Github, Linkedin, LucideProps } from "lucide-react";
import React from "react";

export const projectsData = [
  // {
  //   image: "/anizone.png",
  //   projectName: "Anizone - Anime Streaming Website",
  //   projectLink: "https://anizone.vercel.app",
  //   projectDescription:
  //     "Anizone is a free anime streaming. Users can browse a collection of anime titles. Detailed information about each anime, including synopsis, genres, and release dates The website features a modern and intuitive design, thanks to Tailwind CSS.",
  //   projectTech: ["Next js", "Typescript", "Consumet Api", "Tailwind css"],
  //   projectExternalLinks: {
  //     github: "https://github.com/365-Code/anizone/",
  //     externalLink: "https://anizone.vercel.app",
  //   },
  // },
  {
    image: "/batuno-v2.jpeg",
    projectName: "Batuno - Realtime Chat App",
    projectLink: "https://batuno.vercel.app",
    projectDescription:
      "This is a chat app made with Next js that sends real-time messages using firebase and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for Next.",
    projectTech: [
      "Next js",
      "Firebase Authentication",
      "firestore",
      "Tailwind css",
      "Context API",
    ],
    projectExternalLinks: {
      github: "https://github.com/365-Code/Batuno-V2/",
      externalLink: "https://batuno-v2.vercel.app",
    },
  },
  {
    image: "/mineart.jpeg",
    projectName: "MineArt - An Ecommerce Store",
    projectLink: "https://mine-art.vercel.app",
    projectDescription:
      "This is a E-Commerce web application that uses the REST API to display information about different Products, including their availability and details. You can add multiple product using an array, and add them to your personal cart using MongoDB's database.",
    projectTech: [
      "Next js",
      "Tailwind css",
      "MongoDB Atlas",
      "REST API",
      "Redux/Toolkit",
      "Firebase Authentication",
    ],
    projectExternalLinks: {
      github: "https://github.com/365-Code/MineArt/",
      externalLink: "https://mine-art.vercel.app",
    },
  },
  {
    image: "/think.jpeg",
    projectName: "Think - A blog website",
    projectLink: "https://think-psi.vercel.app",
    projectDescription:
      "This blog website is designed with a pleasing interface, showcasing a beautiful layout. It incorporates all the necessary CRUD operations, providing a seamless user experience. The website is built using Next.js, a popular React framework. The data is stored and managed using MongoDB, a flexible and scalable NoSQL database. Additionally, Firebase is utilized to enhance the website's functionality, offering features such as authentication",
    projectTech: [
      "React",
      "Node.js",
      "Firebase Authentication",
      "MongoDB",
      "Express",
      "Context API",
    ],
    projectExternalLinks: {
      github: "https://github.com/365-Code/THink/",
      externalLink: "https://think-psi.vercel.app",
    },
  },
  // {
  //   image: "/project1.png",
  //   projectName: "BFurnitures - Ecommerce Store",
  //   projectLink: "https://b-furnitures.vercel.app",
  //   projectDescription:
  //     "This is a E-Commerce web application that uses the REST API to display information about different Products, including their availability and details. You can add multiple product using an array, and add them to your personal cart using MongoDB's database.",
  //   projectTech: [
  //     "Next js",
  //     "Context API",
  //     "Tailwind css",
  //     "MongoDB Atlas",
  //     "REST API",
  //   ],
  //   projectExternalLinks: {
  //     github: "https://github.com/365-Code/BFurnitures/",
  //     externalLink: "https://b-furnitures.vercel.app",
  //   },
  // },
];

export const otherProjects = [
  {
    title: "Ai Chathub",
    description: "A modern Retreival Augmented Generation(RAG) chatbot, ",
    tech_stack: ["Next js", "Supabase", "PineCone", "Gemini"],
    link: "https://aichathub.vercel.app",
  },
  {
    title: "Orator",
    description: "A modern voicebot with human voice response using Deepgram",
    tech_stack: ["Next js", "Deepgram", "Gemini"],
    link: "https://github.com/365-code/orator",
  },
  {
    title: "List Flow",
    description: "A modern todo list app with all CRUD operations",
    tech_stack: ["Next js", "MongoDB", "Custom Auth", "Tailwind CSS"],
    link: "https://listflow.vercel.app",
  },
];

type SocialLink = {
  name: string;
  icon: React.FC<LucideProps>;
  link: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    icon: Github,
    link: "https://github.com/365-Code/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://linkedin.com/in/sohail-ahmed-506244286/",
  },
  {
    name: "LeetCode",
    icon: Code,
    link: "https://leetcode.com/sohail_ahmed",
  },
];
