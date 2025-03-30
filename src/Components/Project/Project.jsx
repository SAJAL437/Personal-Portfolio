import { useState } from "react";
import ProjectCard from "./ProjectCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { motion } from "framer-motion";

import projectImage3 from "../../assets/interior.jpg";

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image:
      "https://cdn.dribbble.com/userupload/17242783/file/original-dc9ebbd3f8b4629daff451edf9a8112d.png?resize=1504x1128&vertical=center",
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,

    name: "Sync",
    description:
      "A Sync is an intuitive and efficient smart contact manager designed to help users organize, manage, and access their contacts seamlessly.",
    image:
      "https://cdn.dribbble.com/userupload/36926698/file/original-0640c8e67fd205f60c2c4ea508ade6ab.png?resize=1504x1128&vertical=center",
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application with React.js and SpringBoot, featuring a full product catalog, shopping cart, and checkout.",
    image:
      "https://cdn.dribbble.com/userupload/24548166/file/original-ece0a6cadcf2140f4973018508b087d3.jpg?resize=1504x1128&vertical=center",
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,

    name: "Easy and Feast",
    description:
      "Easy and Feast is a modern interior design web app offering creative home décor solutions, personalized designs, and stylish space transformations.",
    image: projectImage3,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 }, // Mobile
    600: { items: 2 }, // Tablets
    1024: { items: 3 }, // Desktops
  };

  const items = PROJECTS.map((item) => (
    <div key={item.id} className=" mx-2 cursor-pointer transition-transform">
      <ProjectCard project={item} />
    </div>
  ));

  const syncActiveIndex = (event) => setActiveIndex(event.slide);

  return (
    <section id="projects">
      <div className="w-full container mx-auto px-4 bg-transparent pt-10 mt-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className=" text-center text-3xl lg:text-4xl font-bold"
        >
          Projects
        </motion.h2>

        {/* Carousel Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full p-5 bg-white/10 border border-stone-50/30 backdrop-blur-md rounded-2xl shadow-md shadow-gray-700 mt-10"
        >
          <AliceCarousel
            items={items}
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            activeIndex={activeIndex}
            autoPlay
            autoPlayInterval={2000} // ✅ Adjusted for smoother autoplay
            infinite
            mouseTracking // ✅ Enables mouse swipe
            onSlideChanged={syncActiveIndex}
            stagePadding={{ paddingLeft: 20, paddingRight: 20 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
