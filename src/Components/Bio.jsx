import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaTerminal,
  FaUniversity,
} from "react-icons/fa";

export const BIO_METADATA = {
  title: "Sajal Tiwari",
  subtitle: "SOFTWARE ENGINEER & SYSTEMS ARCHITECT",
  location: "Noida / Unnao, India",
  education: {
    degree: "MCA (Pursuing)",
    university: "JIIT, Noida",
    year: "Started July 2026",
  },
};

export const BIO_PARAGRAPHS = [
  {
    id: "01",
    header: "Academic Evolution",
    icon: <FaUniversity className="text-cyan-400" />,
    text: "After completing my Bachelor of Science in Mathematics in June 2026, I have transitioned into an advanced academic phase by enrolling in the Master of Computer Applications (MCA) program at JIIT, Noida. This journey is centered on mastering scalable software architecture and complex system design.",
  },
  {
    id: "02",
    header: "Core Engineering Logic",
    icon: <FaTerminal className="text-fuchsia-400" />,
    text: "My background in Mathematics provides a unique lens for problem-solving. By integrating logical reasoning with Java and Spring Boot, I build robust backend solutions. I am currently expanding this expertise into the realms of Machine Learning and data-driven computational models.",
  },
  {
    id: "03",
    header: "Multi-Disciplinary Execution",
    icon: <FaCode className="text-emerald-400" />,
    text: "Beyond the backend, I am deeply passionate about crafting seamless user experiences. Using React and TailwindCSS, I bridge the gap between complex server-side operations and intuitive frontend interfaces, ensuring every project is both performance-optimized and user-centric.",
  },
];

const Bio = () => {
  return (
    <section
      id="bio"
      className=" md:py-28 relative overflow-hidden bg-transparent w-full"
    >
      {/* Background Micro Aura Grid */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 md:px-12 relative z-10 max-w-7xl mx-auto">
        {/* Header Segment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-gray-200/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block mb-2">
              // PROFESSIONAL PROFILE
            </span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Me
              </span>
            </h2>
          </div>
          <p className="text-xs font-semibold md:font-normal md:text-base text-gray-500 dark:text-neutral-400 font-mono max-w-xs">
            Synthesizing mathematical rigor with full-stack engineering
            expertise.
          </p>
        </div>

        {/* Master Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* LEFT SIDE PANEL: Personal Meta Blueprint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-6 bg-gradient-to-b from-white/5 to-transparent border border-gray-200/20 dark:border-white/5 backdrop-blur-xl rounded-3xl relative overflow-hidden space-y-6"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-400/30 rounded-tl-3xl" />

            <div>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 block">
                // CURRENT STATUS
              </span>
              <h3 className="text-2xl font-black dark:text-white mt-1">
                {BIO_METADATA.title}
              </h3>
              <p className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase mt-0.5">
                {BIO_METADATA.subtitle}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-4 font-mono text-xs text-neutral-400">
              <div>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">
                  Academic Focus
                </span>
                <span className="text-neutral-200 font-sans font-medium">
                  {BIO_METADATA.education.degree}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">
                  Current Institution
                </span>
                <span className="text-neutral-200 font-sans font-medium">
                  {BIO_METADATA.education.university}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">
                  Timeline Index
                </span>
                <span className="text-cyan-400 font-semibold">
                  {BIO_METADATA.education.year}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE PANEL: Paragraphs */}
          <div className="lg:col-span-8 space-y-6">
            {BIO_PARAGRAPHS.map((bio, index) => (
              <motion.div
                key={bio.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-6 bg-neutral-900/5 border border-neutral-200/50 dark:border-white/5 rounded-2xl flex flex-col md:flex-row gap-4 items-start hover:border-cyan-500/20 transition-all"
              >
                <div className="p-2 bg-white/5 rounded-lg border border-white/5 shrink-0">
                  {bio.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-mono font-bold text-gray-800 dark:text-neutral-200 uppercase tracking-wide">
                    // {bio.header}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed font-light">
                    {bio.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
