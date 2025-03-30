import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot, SiHibernate, SiSpringsecurity } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import SkillsMobile from "./SkillsMobile";
import { FaBootstrap, FaHtml5, FaJava, FaJsSquare } from "react-icons/fa";

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML",
    experience: "2+ years",
  },
  {
    icon: <IoLogoCss3 className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS",
    experience: "2+ years",
  },
  {
    icon: <FaJsSquare className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1.5+ years",
  },
  {
    icon: <FaBootstrap className="text-4xl text-violet-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "1.5+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
];

export const SKILLS1 = [
  {
    icon: <GrMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ year",
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: <SiHibernate className="text-4xl text-gray-700 lg:text-5xl" />,
    name: "Hibernate",
    experience: "1+ year",
  },
  {
    icon: <SiSpringboot className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Spring Boot",
    experience: "2+ years",
  },
  {
    icon: <SiSpringsecurity className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Spring Security",
    experience: "1+ year",
  },
];

const Skills = () => {
  return (
    <section className="container mx-auto justify-center" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mb-12 mt-20 text-center text-4xl font-semibold"
      >
        Skills
      </motion.h2>

      {/* Show on large screens only */}
      <div className="hidden lg:block">
        <div className="flex flex-row mx-28 text-black justify-center">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 pb-5">
            {SKILLS.map((skill, index) => (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                key={index}
                className="p-6 bg-white shadow-md rounded-md m-auto"
              >
                <h3 className="item-center">{skill.icon}</h3>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row mx-28 text-black justify-center">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 md:pl-4">
            {SKILLS1.map((skill, index) => (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                key={index}
                className="p-6 bg-white shadow-md rounded-md m-auto"
              >
                <h3 className="item-center">{skill.icon}</h3>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Show on mobile & tablet only */}
      <div className="sm:block md:block lg:hidden">
        <SkillsMobile />
      </div>
    </section>
  );
};

export default Skills;
