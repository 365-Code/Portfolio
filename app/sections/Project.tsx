"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Fira_Code, Raleway } from "next/font/google";
import { projectsData } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Projects = () => {
  return (
    <div className="projects" id="project">
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
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project group/prj"
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
                <div className="relative project-image w-[600px] max-w-full h-full overflow-hidden">
                  <div className="project-image-overlay h-full md:group-hover/prj:bg-transparent"></div>
                  <div className="h-full w-full">
                    <Image
                      src={image}
                      fill
                      alt={projectName}
                      quality={100}
                      className="object-cover h-full w-full object-center md:group-hover/prj:filter-none"
                    />
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
                        <Github />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <ExternalLink />
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
