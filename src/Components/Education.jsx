import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaArrowRight } from "react-icons/fa";

export const EDUCATION = [
  {
    id: "01",
    degree: "MCA (Master of Computer Applications)",
    institution: "JIIT (Jaypee Institute of Information Technology), Noida",
    duration: "July 2026 - Present",
    status: "Ongoing",
    description:
      "Embarking on an advanced journey in software engineering, distributed systems, and computational intelligence. Focusing on large-scale architectural patterns and research-oriented development.",
    icon: <FaUniversity />,
  },
  {
    id: "02",
    degree: "B.Sc. in Mathematics",
    institution: "CSJM University, Kanpur",
    duration: "Aug 2023 - June 2026",
    status: "Completed",
    description:
      "Built a rock-solid foundation in analytical logic, discrete mathematics, and algorithmic thinking. Transitioned these concepts into real-world software development, focusing on Java and backend architecture.",
    icon: <FaGraduationCap />,
  },
  // {
  //   id: "03",
  //   degree: "Higher Secondary Education",
  //   institution: "Brilliant Academy Inter College, Unnao",
  //   duration: "2022 - 2023",
  //   status: "Completed",
  //   description:
  //     "Developed a core interest in Science and Technology. Fostered initial problem-solving skills that paved the way for advanced programming and full-stack development studies.",
  //   icon: <FaGraduationCap />,
  // },
];

const Education = () => {
  return (
    <section
      id="education"
      className="md:py-28  relative overflow-hidden bg-transparent w-full"
    >
      {/* Ambient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 md:px-12 relative z-10 max-w-7xl mx-auto">
        {/* Header matching other sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-gray-200/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block mb-2">
              // ACADEMIC ARCHITECTURE
            </span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
              Education{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Path
              </span>
            </h2>
          </div>
          <p className="text-xs font-semibold md:font-normal md:text-base text-gray-500 dark:text-neutral-400 font-mono max-w-xs">
            Mapping the transition from theoretical mathematics to applied
            engineering.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 gap-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 md:p-8 bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 rounded-3xl backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Left: Icon & Index */}
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-neutral-100 dark:bg-white/5 rounded-2xl text-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold dark:text-white mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-cyan-500/80 font-mono mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Right: Status & Timeline */}
                <div className="text-left md:text-right space-y-2">
                  <div
                    className={`px-3 py-1 rounded-full text-[10px] font-mono inline-block ${edu.status === "Ongoing" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-neutral-100 dark:bg-white/5 text-neutral-400"}`}
                  >
                    {edu.status}
                  </div>
                  <p className="text-xs font-mono text-neutral-400">
                    {edu.duration}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 md:pl-[88px]">
                <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
