import React, { useState } from "react";
import { motion } from "framer-motion";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectCard from "./ProjectCard";

export const PROJECTS = [
  {
    id: 1,
    name: "Laxmi",
    projectname: "laxmi",
    detImg: "/laxmi1.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "Redux",
      "react-router",
      "JWT",
      "SpringBoot",
      "Hibernate",
      "MySQL",
      "RestApi",
    ],
    description:
      "An e-commerce website built with React, Redux, and Tailwind CSS, integrated with Springboot and MySQL for backend support. It allows users to browse, search, and purchase products with a smooth UI experience.",
    image: "/laxmi1.png",
    githubLink: "https://github.com/SAJAL437/Laxmi-server",
        liveDemo: "https://laxmishop.netlify.app",

  },
  {
    id: 2,
    name: "Weather Dashboard",
    detImg: "/db.png",
    projectname: "weatherdashboard",
    techStack: ["React", "Tailwind CSS", "Axios", "WeatherAPI"],
    description:
      "An intuitive weather dashboard providing real-time weather updates and forecasts using modern APIs. It includes city search, temperature toggle, and responsive UI.",
    image: "/db.png",
    githubLink: "https://github.com/SAJAL437/Weather-DashBoard",
  },
  {
    id: 3,
    name: "Nayi Disha",
    detImg: "/nayidisha.png",
    projectname: "nayiDisha",
    techStack: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "JWT",
      "Hibernate",
      "Axios",
      "RestApi",
      "MySQL",
      "Leaflet",
    ],
    description:
      "Nayi Disha is a full-stack web application designed to give citizens a smart and easy platform to raise complaints on public issues such as traffic problems, water shortages, electricity failures, corruption, and more.",
    image: "/nayi.jpg",
    githubLink: "https://github.com/SAJAL437/NayiDishaServer",
  },
  {
    id: 4,
    name: "Earnest & Feast",
    projectname: "earnestandfeast",
    detImg: "/interior.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion","react-router"],
    description:
      "A modern interior design web app offering creative home décor solutions, personalized designs, and stylish space transformations.",
    image: "/interior.jpg",
    githubLink: "https://github.com/SAJAL437/Interior-UI",
    liveDemo: "https://earnestandfeast.netlify.app",
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = React.useRef(null);

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  const items = PROJECTS.map((item) => (
    <div key={item.id} className="mx-2 cursor-pointer transition-transform">
      <ProjectCard project={item} />
    </div>
  ));

  return (
    <section id="projects" className="py-16 bg-white dark:bg-transparent">
      <div className="w-full container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl lg:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full p-6 bg-white/10 border border-stone-50/30 dark:border-gray-700/50 backdrop-blur-lg rounded-2xl shadow-xl"
        >
          <AliceCarousel
            ref={carouselRef}
            items={items}
            responsive={responsive}
            activeIndex={activeIndex}
            onSlideChanged={({ item }) => setActiveIndex(item)}
            autoPlay
            autoPlayInterval={1000}
            infinite
            mouseTracking
            disableButtonsControls
            disableDotsControls
            animationDuration={800}
            stagePadding={{ paddingLeft: 20, paddingRight: 20 }}
            aria-label="Project showcase carousel"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
