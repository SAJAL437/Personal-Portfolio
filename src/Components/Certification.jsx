import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, FileText } from "lucide-react";

export const CERTIFICATION = [
  {
    id: "CERT-01",
    degree: "Full Stack Java Training Program",
    duration: "Aug 2023 - Mar 2024",
    drive: "https://drive.google.com/file/d/1dzS08vXLHMCHn7Ehpe0aV96a9L9545iO/view?usp=drivesdk",
    description: "Intensive training focused on full-stack web architecture, database design, and enterprise-grade Java development. Successfully built and deployed an end-to-end e-commerce platform.",
  },
  // {
  //   id: "CERT-02",
  //   degree: "Python Programming Foundation",
  //   duration: "Apr 2024 - Jun 2024",
  //   drive: "https://drive.google.com/file/d/1dzS08vXLHMCHn7Ehpe0aV96a9L9545iO/view?usp=drivesdk",
  //   description: "Acquired fundamental and advanced Python programming skills. Focused on data analysis workflows, scripting automation, and solving complex computational challenges.",
  // },
  {
    id: "CERT-02",
    degree: "AI Tools & ChatGPT Workshop",
    duration: "Skill Enhancement",
    drive: "https://drive.google.com/file/d/1BbKQTFR6V4FMZx4RsuD_KiZtJUYhJk1A/view?usp=drivesdk",
    description: "Hands-on workshop exploring LLM-assisted development. Mastered prompt engineering to accelerate debugging, rapid prototyping, and efficient data analysis workflows.",
  },
];

const Certification = () => {
  return (
    <section id="certification" className="md:py-28 relative overflow-hidden bg-transparent w-full">
      <div className="w-full px-4 md:px-12 relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-gray-200/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block mb-2">// CREDENTIALS</span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
              Certific{""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                ation
              </span>
            </h2>
          </div>
          <p className="text-xs font-semibold md:font-normal md:text-base text-gray-500 dark:text-neutral-400 font-mono max-w-xs">
            Validated technical proficiencies and workshop accomplishments.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATION.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 rounded-3xl p-6 backdrop-blur-md hover:border-fuchsia-500/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon & ID */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-2xl text-fuchsia-400">
                  <Award size={24} />
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest bg-neutral-100 dark:bg-white/5 px-2 py-1 rounded-md">
                  {cert.id}
                </span>
              </div>

              {/* Title & Date */}
              <h3 className="text-lg font-bold dark:text-white mb-2 leading-snug">{cert.degree}</h3>
              <p className="text-[11px] font-mono text-cyan-400 mb-4">{cert.duration}</p>
              
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed font-light flex-grow mb-6">
                {cert.description}
              </p>

              {/* Action Button */}
              <a 
                href={cert.drive} 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                <FileText size={14} />
                Verify Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;