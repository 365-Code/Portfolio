"use client";
import Image from "next/image";
import React from "react";
import sam from "@/public/sam.jpeg";
import { Fira_Code, Raleway } from "next/font/google";
import { motion } from "framer-motion";
const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

const About = () => {
  return (
    <motion.div
      id="about"
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className={`title ${raleway.className}`}>
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className={`about-grid-info-text ${raleway.className}`}>
            Hello! My name is Sohail, and I love creating things that live on
            the web. My journey in web development began when I started
            experimenting with code, editing custom web pages and learning the
            nuances of HTML, CSS, and JavaScript.
          </p>
          <p className={`about-grid-info-text ${raleway.className}`}>
            Fast-forward to today, I&apos;m a full-stack developer interning at
            <a
              href="https://buildfastwithai.com"
              className="text-[var(--theme-color)] ml-1"
            >
              BuildFastWithAI
            </a>
            , honing my skills in Next.js. My focus is on building intuitive,
            scalable digital experiences that prioritize accessibility and
            performance.
          </p>
          <p></p>
          {/* <p className="about-grid-info-text">
                    
                </p> */}
          <p className={`about-grid-info-text ${raleway.className}`}>
            Here are a few technologies, I&apos;ve been working with recently:
          </p>
          <ul className={`about-grid-info-list ${raleway.className}`}>
            <li className="about-grid-info-list-item">Vercel AI SDK</li>
            <li className="about-grid-info-list-item">Next JS</li>
            <li className="about-grid-info-list-item">React JS</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Node JS</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Supabase</li>
            <li className="about-grid-info-list-item">FireBase</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">HTML, CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container overflow-hidden">
            <Image
              src={sam}
              alt="sam"
              className="object-cover w-full h-full object-top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
