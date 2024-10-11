import { otherProjects } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { Fira_Code, Raleway } from "next/font/google";
import Link from "next/link";
import React from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const OtherProject = () => {
  return (
    <section className="my-[10rem]" id="project">
      <motion.div
        className={`my-4 text-center ${raleway.className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2
          className={`${raleway.className} text-3xl font-semibold text-[var(--lightest-slate)] text-center`}
        >
          Other Projects
        </h2>
        <Link
          href={"https://github.com/365-code/"}
          target="_blank"
          className="text-[var(--theme-color)] font-medium text-sm"
        >
          View All Project
        </Link>
      </motion.div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 relative">
        {otherProjects.map((project) => {
          return (
            <motion.div
              className="project group/prj"
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
        {hiddenProjects.map((project) => {
          return (
            <motion.div
              className="project group/prj"
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}

        <div className="hidden-overlay absolute bottom-0 left-0 w-full h-[200px] backdrop-blur-sm" />
      </div>
    </section>
  );
};

export default OtherProject;

interface CardProps {
  project: {
    title: string;
    description: string;
    tech_stack: Array<string>;
    link: string;
  };
}

const ProjectCard = ({ project }: CardProps) => {
  return (
    <Link
      href={project.link}
      className="bg-black/40 h-full text-white p-6 rounded-lg flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <Folder size={40} className="text-[var(--theme-color)]" />
        <ExternalLink className="transition-all hover:text-[var(--theme-color)]" />
      </div>
      <div className={`${raleway.className} flex-1`}>
        <h3 className="font-medium text-xl mb-2">{project.title}</h3>
        <p className="font-normal text-sm">{project.description}</p>
      </div>
      <div className={`${raleway.className} flex gap-2 flex-wrap`}>
        {project.tech_stack.map((tech, i) => (
          <span key={i} className="text-xs whitespace-nowrap">
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
};

const hiddenProjects = [
  {
    title: "AnimeAeon",
    description: "",
    tech_stack: ["Next js", "Supabase", "PineCone", "Gemini"],
    link: "",
  },
  {
    title: "Ai Trip Planner",
    description: "",
    tech_stack: ["Next js", "Deepgram", "Gemini"],
    link: "",
  },
  {
    title: "Komiko",
    description: "",
    tech_stack: ["Next js", "MongoDB", "Custom Auth", "Tailwind CSS"],
    link: "",
  },
];
