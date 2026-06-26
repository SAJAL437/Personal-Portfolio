import React from "react";
import logo from "/logo.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

export const MEDIA_LINKS = [
  { href: "https://www.geeksforgeeks.org/user/sajaltiwkj1q", icon: <SiGeeksforgeeks /> },
  { href: "https://www.instagram.com/sajal_tiwari_437/", icon: <FaInstagram /> },
  { href: "https://github.com/SAJAL437", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/sajal-tiwari-120658297", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-white/5 bg-transparent mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src={logo}
          width={120}
          alt="Logo"
          className="opacity-70 hover:opacity-100 transition-opacity"
        />

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {MEDIA_LINKS.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#06b6d4" }} // Cyan hover effect
              className="text-neutral-500 text-2xl transition-colors duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
            © 2026 Sajal Tiwari. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <p className="text-[9px] font-mono text-neutral-500">SYSTEM STATUS: OPERATIONAL</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;