import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";
import {SiLeetcode} from "react-icons/si";

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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        {socialLinks.map(({ name, icon, link }, i) => (
          <span key={name} title="name" className="footer-links-icon">
            <a href={link} target="_blank">
              {icon}
            </a>
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
