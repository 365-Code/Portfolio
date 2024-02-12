"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { Fira_Code, Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Projects = () => {
  const projectsData = [
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
        github: "https://github.com/365-Code/Batuno-V2",
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
        github: "https://github.com/365-Code/MineArt",
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
        github: "https://github.com/365-Code/THink",
        externalLink: "https://think-psi.vercel.app",
      },
    },
    {
      image: "/project1.png",
      projectName: "BFurnitures - Ecommerce Store",
      projectLink: "https://b-furnitures.vercel.app",
      projectDescription:
        "This is a E-Commerce web application that uses the REST API to display information about different Products, including their availability and details. You can add multiple product using an array, and add them to your personal cart using MongoDB's database.",
      projectTech: [
        "Next js",
        "Context API",
        "Tailwind css",
        "MongoDB Atlas",
        "REST API",
      ],
      projectExternalLinks: {
        github: "https://github.com/365-Code/BFurnitures",
        externalLink: "https://b-furnitures.vercel.app",
      },
    },
  ];

  return (
    <div className="projects" id="work">
      <motion.div
        className={`title ${raleway.className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2 className={`${raleway.className}`}>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} className="object-cover"/>
                  </div>
                </div>
                <div className="project-info">
                  <p className={`project-info-overline ${firaCode.className} `}>
                    Featured Project
                  </p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p className={`${raleway.className}`}>
                      {projectDescription}
                    </p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li
                        className={`project-info-tech-list-item ${raleway.className}`}
                        key={tech}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                      target="_blank"
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                      target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
