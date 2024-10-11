"use client";
import { socialLinks } from "@/lib/utils";
import { motion } from "framer-motion";
import { Fira_Code } from "next/font/google";
import Link from "next/link";
import React from "react";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const SocialIcons = () => {
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
        {socialLinks.map(({ name, icon: Icon, link }, index) => (
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
            <Link
              href={link}
              target="_blank"
              className="social-icons-list-item-link"
            >
              {<Icon />}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialIcons;
