export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certification", href: "#certification" },
  { label: "Resume", href: "/Resume" },
  { label: "Contact", href: "#contact" },
];
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleopenresume = () => {
    navigate("/Resume");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 pl-2 pr-4 ">
        {/* Desktop mode */}
        <div
          className="mx-auto hidden max-w-4xl items-center justify-center rounded-full border 
        border-stone-50/30 bg-white/10 backdrop-blur-lg py-2 px-2 lg:flex"
        >
          <div className="flex items-center justify-start -start-4 gap-10">
            <div>
              <a href="#">
                <img src={logo} width={200} height={150} alt="logo" />
              </a>
            </div>

            <div>
              <ul className="flex items-center gap-4 text-gray-50 font-semibold">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    {item.label === "Resume" ? (
                      <button onClick={handleopenresume}
                      className="text-gray-50 text-sm font-semibold hover:text-yellow-400 cursor-pointer">{item.label}</button>
                    ) : (
                      <a
                        className="text-sm hover:text-yellow-400"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="items-center ml-2 space-x-2">
              <a
                href="https://www.freelancer.in/u/Sajal437"
                className="border rounded-full relative -end-10 px-3 py-1 items-center bg-transparent text-sm font-semibold text-gray-50 hover:bg-gray-100 hover:text-gray-900 duration-500"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Mobile mode */}

        <div className="rounded-3xl  bg-white/10 backdrop-blur-md lg:hidden border px-5 ">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} width={100} height={100} alt="logo" />
              </a>
            </div>

            <div className="flex items-center gap-10">
              <div className="items-center">
                <a
                  href="https://www.freelancer.in/u/Sajal437"
                  className="border rounded-full relative -end-10 px-3 py-1 items-center bg-transparent text-sm font-semibold text-gray-50 hover:bg-gray-100 hover:text-gray-900 duration-500"
                >
                  Hire Me
                </a>
              </div>

              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <motion.ul className="ml-4 mt-2 mb-5 flex flex-col gap-4 ">
              {NAVIGATION_LINKS.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  key={index}
                >
                  {item.label === "Resume" ? (
                      <button onClick={handleopenresume}
                      className="text-gray-50 text-sm font-semibold hover:text-yellow-400 cursor-pointer">{item.label}</button>
                    ) : (
                      <a
                        className="text-sm hover:text-yellow-400"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    )}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
