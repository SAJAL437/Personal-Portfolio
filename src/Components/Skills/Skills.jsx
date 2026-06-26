import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiSpringboot,
  SiHibernate,
  SiPostman,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import {
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaPython,
} from "react-icons/fa";

export const MASTER_DOMAINS = [
  {
    id: "01",
    branch: "Enterprise Java Ecosystem",
    description:
      "Robust backends, database relational mapping, and modular API structures.",
    accent: "from-orange-500 to-red-600",
    nodes: [
      {
        icon: <FaJava className="text-red-500" />,
        name: "Java Core",
        info: "OOP / Streams",
        level: "85%",
      },
      {
        icon: <SiSpringboot className="text-green-500" />,
        name: "Spring Boot",
        info: "REST APIs / MVC",
        level: "80%",
      },
      {
        icon: <SiHibernate className="text-neutral-400" />,
        name: "Hibernate ORM",
        info: "Data Mesh",
        level: "75%",
      },
      {
        icon: <GrMysql className="text-sky-500" />,
        name: "MySQL Engine",
        info: "Relational DB",
        level: "75%",
      },
    ],
  },
  {
    id: "02",
    branch: "AI & Machine Learning (Learning)",
    description:
      "Mathematical computing pipelines, statistical modeling, and scripting structures.",
    accent: "from-blue-500 to-indigo-600",
    nodes: [
      {
        icon: <FaPython className="text-blue-400" />,
        name: "Python 3",
        info: "Scripting Backbone",
        level: "75%",
      },
      {
        icon: <SiScikitlearn className="text-orange-400" />,
        name: "Scikit-Learn",
        info: "Predictive Models",
        level: "50%",
      },
      {
        icon: <SiPandas className="text-indigo-400" />,
        name: "Pandas / NumPy",
        info: "Data Vectors",
        level: "55%",
      },
    ],
  },
  {
    id: "03",
    branch: "Client-Side & Deployment Mesh",
    description:
      "Responsive view orchestration and continuous lifecycle management.",
    accent: "from-cyan-400 to-emerald-500",
    nodes: [
      {
        icon: <RiReactjsLine className="text-cyan-400" />,
        name: "React Engine",
        info: "UI State",
        level: "90%",
      },
      {
        icon: <FaJsSquare className="text-yellow-400" />,
        name: "JavaScript",
        info: "Client Script",
        level: "85%",
      },
      {
        icon: <RiTailwindCssFill className="text-cyan-400" />,
        name: "Tailwind / CSS",
        info: "Tokens & Layout",
        level: "95%",
      },
      {
        icon: <FaGitAlt className="text-orange-600" />,
        name: "Git & Postman",
        info: "Version / Pipeline",
        level: "85%",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className=" md:py-28 relative overflow-hidden bg-transparent w-full"
    >
      <div className="w-full px-4 md:px-12 relative z-10 max-w-7xl mx-auto">
        {/* Core Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-200/10 pb-6">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block mb-1">
              // DEPLOYMENT COMPETENCIES
            </span>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
              Skill{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Architecture
              </span>
            </h2>
          </div>
          <p className="text-[11px] md:text-xs font-mono text-neutral-400 max-w-xs">
            Grouped engineering stacks optimized for space and domain clarity.
          </p>
        </div>

        {/* Structural Matrix Flex Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {MASTER_DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 bg-white dark:bg-neutral-900/10 border border-neutral-200 dark:border-white/5 rounded-2xl relative overflow-hidden group flex flex-col gap-4"
            >
              {/* Corner Code Tag Accent */}
              <div className="absolute top-0 right-0 px-3 py-1 bg-neutral-100 dark:bg-white/5 font-mono text-[9px] text-neutral-500 border-b border-l border-neutral-200 dark:border-white/5 rounded-bl-xl uppercase tracking-wider">
                Node_{domain.id}
              </div>

              {/* Cluster Meta Data */}
              <div>
                <h3 className="text-base font-black dark:text-white tracking-wide flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${domain.accent}`}
                  />
                  {domain.branch}
                </h3>
                <p className="text-[11px] font-sans text-neutral-400 mt-0.5 max-w-md">
                  {domain.description}
                </p>
              </div>

              {/* Inner Sub-Node Tight Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-neutral-200/60 dark:border-white/5">
                {domain.nodes.map((node, nodeIdx) => (
                  <div
                    key={nodeIdx}
                    className="p-3 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-xl flex items-center gap-3 group/node hover:border-neutral-400 dark:hover:border-white/10 transition-colors"
                  >
                    <div className="text-2xl p-1.5 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-white/5 group-hover/node:scale-105 transition-transform shrink-0">
                      {node.icon}
                    </div>

                    <div className="flex-grow min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-xs font-bold text-gray-800 dark:text-neutral-200 truncate">
                          {node.name}
                        </h4>
                        <span className="text-[8px] font-mono text-neutral-400 shrink-0 uppercase tracking-tight">
                          {node.info}
                        </span>
                      </div>

                      {/* Compact Level Vector */}
                      <div className="h-[2px] w-full bg-neutral-200 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: node.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${domain.accent}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
