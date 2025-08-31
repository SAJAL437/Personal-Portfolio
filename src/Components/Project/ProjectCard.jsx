import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Github, Link, Eye } from "lucide-react";

const ProjectCard = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.03 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden my-5 rounded-3xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      <motion.div className="relative h-52 sm:h-60 md:h-72 lg:h-80 w-full">
        <motion.img
          src={project.image}
          alt={`${project.name} preview`}
          className="h-full w-full object-cover  object-left rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-gray-100" />
          </div>
        )}
      </motion.div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white backdrop-blur-lg bg-black/40 transition-opacity duration-500 opacity-90 sm:opacity-80 md:opacity-0 md:group-hover:opacity-90 p-6"
        aria-hidden={!isLoaded}
      >
        <h3
          id={`project-title-${project.id}`}
          className="mb-3 text-xl sm:text-2xl md:text-3xl font-bold text-center"
        >
          {project.name}
        </h3>
        <p className="mb-4 text-center text-sm sm:text-base md:text-lg line-clamp-3">
          {project.description}
        </p>

        <div className="flex gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-2 py-2 text-black hover:bg-gray-200 transition text-sm sm:text-base"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github size={20} />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-2 py-2 text-black hover:bg-gray-200 transition text-sm sm:text-base"
              aria-label={`View live demo of ${project.name}`}
            >
              <Link size={20} />
            </a>
          )}
          <a
            href={`/projects/${project.projectname}`}
            className="flex items-center gap-2 rounded-full bg-white px-2 py-2 text-black hover:bg-gray-200 transition text-sm sm:text-base"
          >
            <Eye size={20} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    projectname: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    liveDemo: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

ProjectCard.defaultProps = {
  project: {
    id: 0,
    name: "Unknown Project",
    projectname: "Unknown",
    image: "/placeholder.jpg",
    description: "No description available.",
    githubLink: null,
    liveDemo: null,
    techStack: [],
  },
};

export default ProjectCard;
