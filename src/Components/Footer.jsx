import logo from "/logo.png";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import { motion } from "framer-motion";
import { SiGeeksforgeeks } from "react-icons/si";

export const MEDIA_LINKS = [
  {
    href: "https://www.geeksforgeeks.org/user/sajaltiwkj1q",
    icon: <SiGeeksforgeeks fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/sajal_tiwari_437/#",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/SAJAL437",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "http://www.linkedin.com/in/sajal-tiwari-120658297",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

const Footer = () => {
  return (
    <>
      <div className="mb-8 mt-20">
        <div className="flex item-center justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={logo}
            width={200}
            className="my-20"
          />
        </div>
        <div className="flex items-center justify-center gap-8">
          {MEDIA_LINKS.map((link, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.5 }}
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener norefrrer"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm trakink-wide text-gray-400">
          &copy;SajalTiwari. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
