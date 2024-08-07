"use client";
import { motion } from "framer-motion";
import { Fira_Code } from "next/font/google";
import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https:/www.github.com/365-Code/",
    },
    // { name: "Youtube", icon: <FiYoutube />, link: "https:/www.youtube.com/" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https:/www.linkedin.com/in/sohail-ahmed-506244286/",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https:/www.leetcode.com/sohail_ahmed",
    },
    // {
    //   name: "Instagram",
    //   icon: <FiInstagram />,
    //   link: "https:/www.instagram.com",
    // },
    // { name: "Twitter", icon: <FiTwitter />, link: "https:/www.twitter.com" },
  ];

  return (
    <motion.div
      className={`social-icons ${firaCode.className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 2.0,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }, index) => {
          return (
            <motion.li
              key={name}
              title={name}
              className="social-icons-list-item"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 2.0 + (socialLinks.length - index) * 0.1,
              }}
            >
              <a
                href={link}
                target="_blank"
                className="social-icons-list-item-link"
              >
                {icon}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SocialIcons;
