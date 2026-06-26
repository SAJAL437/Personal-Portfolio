import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export const PROJECTS = [
  {
    id: 1,
    name: "Laxmi",
    projectname: "laxmi",
    tagline: "NEXT-GEN E-COMMERCE ENGINE",
    category: "Full-Stack E-Commerce",
    timeline: "3 Months (Production Ready)",
    techStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "SpringBoot",
      "MySQL",
      "JWT",
    ],
    description:
      "A high-performance e-commerce engine features seamless state orchestration, dynamic inventory pipelines, and fluid UI architectures.",
    longDescription:
      "Laxmi is a next-generation enterprise-grade architecture designed for zero latency and fluid transaction flows. It integrates a fully optimized database layer with robust indexing and real-time state consistency driven by Redux. The backend leverages structured decoupled Spring Boot modules to ensure hyper-scale readiness.",
    features: [
      "Dynamic inventory management pipelines with automated low-stock warnings.",
      "Secure state management orchestration using Redux Toolkit slices.",
      "JWT stateless session token authentication with custom middleware guards.",
      "Optimized relational database models with indexed target query performance.",
    ],
    image: "/laxmi1.png",
    detImg: "/laxmi1.png",
    githubLink: "https://github.com/SAJAL437/Laxmi-server",
    liveDemo: "https://laxmishop.netlify.app",
    color: "from-cyan-500/15 via-transparent to-blue-600/5",
  },
  {
    id: 2,
    name: "Nayi Disha",
    projectname: "nayi-disha",
    tagline: "GEOSPATIAL GRIEVANCE PLATFORM",
    category: "Gov-Tech / GIS Platform",
    timeline: "2.5 Months (Gov Initiative)",
    techStack: [
      "React",
      "Spring Boot",
      "JWT",
      "Hibernate",
      "Leaflet.js",
      "OpenStreetMap",
    ],
    description:
      "A smart geospatial full-stack platform for citizens to report public grievances with real-time vector map telemetry overlays.",
    longDescription:
      "Nayi Disha engineered a transparent communication mesh between local municipal authorities and civic populations. By mapping geographical coordinates natively inside Leaflet layers, citizens can accurately drop location vectors, which are categorized dynamically by backend routing managers.",
    features: [
      "Interactive OpenStreetMap engine rendering customized vector pins natively.",
      "Automated latitude/longitude geocoding pipeline for instant municipal dispatch.",
      "Role-based administrative dashboards for state officers to stream ticket updates.",
      "Real-time reactive notification delivery systems built over scalable REST layers.",
    ],
    image: "/nayi.jpg",
    detImg: "/nayi.jpg",
    githubLink: "https://github.com/SAJAL437/NayiDishaServer",
    color: "from-fuchsia-500/15 via-transparent to-purple-600/5",
  },
  {
    id: 3,
    name: "Earnest & Feast",
    projectname: "earnest-feast",
    tagline: "PREMIUM INTERIOR ARCHITECTURE",
    category: "Creative Agency Portfolio",
    timeline: "1.5 Months (UI/UX Case Study)",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router Dom",
      "Vite",
    ],
    description:
      "A modern interior design web app offering creative home décor solutions, personalized designs, and stylish space transformations.",
    longDescription:
      "Earnest & Feast explores the cross-section of high-definition digital photography and silky motion design. Using modular atomic layouts, the site achieves ultra-fluid rendering speeds on mobile and web viewports alike, preserving design accuracy across layout contexts.",
    features: [
      "Cinematic viewports with staggered parallax scrolling effects via Framer Motion.",
      "Clean filter matrix system processing media galleries with hardware acceleration.",
      "SEO-friendly single-page system structure optimizing semantic accessibility scores.",
      "Fluid routing paths mapping nested design projects dynamically inside the URL space.",
    ],
    image: "/interior.jpg",
    detImg: "/interior.jpg",
    githubLink: "https://github.com/SAJAL437/Interior-UI",
    liveDemo: "https://earnestandfeast.netlify.app",
    color: "from-emerald-500/15 via-transparent to-teal-600/5",
  },
];

const Project = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className=" md:py-28 relative overflow-hidden bg-transparent w-full"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full px-4 md:px-12 relative z-10">
        {/* Header Section with Responsive Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-200/10 pb-8 max-w-7xl mx-auto">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block mb-2">
              // DESIGN INDEX
            </span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white"
            >
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Works
              </span>
            </motion.h2>
          </div>

          <Link
            to="/explore"
            className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-cyan-500/10 border border-white/10 rounded-full transition-all duration-300 w-fit"
          >
            <span className="hidden md:block text-sm font-bold text-gray-900 dark:text-white group-hover:text-cyan-400">
              View All Projects
            </span>
            <svg
              className="w-5 h-5 text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => {
            const gridSpan =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                  ? "lg:col-span-5"
                  : "lg:col-span-12";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden flex flex-col justify-between p-6 md:p-8 bg-gradient-to-br ${project.color} border border-gray-200/20 dark:border-white/5 backdrop-blur-xl rounded-3xl transition-all duration-500 hover:border-cyan-500/30 lg:h-[380px] w-full ${gridSpan}`}
              >
                <div
                  className="absolute inset-0 pointer-events-none z-0 bg-cover bg-no-repeat lg:bg-right-top bg-top opacity-15"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-white/10 border border-white/10 rounded text-cyan-400">
                        0{index + 1}
                      </span>
                      <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                        {project.tagline}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-neutral-400 max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900/5 dark:bg-white/5 rounded border border-neutral-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 font-mono text-[11px] mt-6">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-900 dark:text-neutral-300 hover:text-cyan-400"
                    >
                      [ Source ] →
                    </a>
                    <Link
                      to={`/projects/${project.projectname}`}
                      className="text-green-600 dark:text-green-400 hover:text-cyan-400 font-bold"
                    >
                      [ Overview ] →
                    </Link>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-500 hover:text-fuchsia-400"
                      >
                        [ Live Demo ] ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
