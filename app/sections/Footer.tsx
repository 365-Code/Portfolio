import { socialLinks } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        {socialLinks.map(({ name, icon: Icon, link }, i) => (
          <span key={name} title="name" className="footer-links-icon">
            <Link href={link} target="_blank">
              <Icon />
            </Link>
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
