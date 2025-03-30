import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }} // 🔥 Hover animation
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }} // ✅ Ensures animation runs once per scroll
      className="group relative overflow-hidden my-5 rounded-3xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
    >
      {/* ✅ Dynamic Image */}
      <motion.img
        src={project.image || "/placeholder.jpg"}
        alt={project.name || "Project Image"}
        className="p-4 h-52 sm:h-60 md:h-80 lg:h-80 w-full object-cover transition-transform duration-500 rounded-3xl group-hover:scale-110"
        whileHover={{ scale: 1.1 }} // 🔥 Subtle image zoom
      />

      {/* ✅ Hover Effect with Overlay (Always visible on mobile) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white 
          backdrop-blur-lg transition-opacity duration-500 bg-black/35
          opacity-100 sm:opacity-100 md:opacity-0 md:group-hover:opacity-100 p-4"
      >
        <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-semibold">
          {project.name || "Unknown Project"}
        </h3>

        <p className="mb-4 text-center text-xs sm:text-sm md:text-base">
          {project.description || "No description available."}
        </p>

        {/* ✅ Dynamic GitHub Link */}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 transition text-sm sm:text-base"
          >
            <div className="flex items-center space-x-2">
              <span>View on GitHub</span>
            </div>
          </a>
        )}
      </div>
    </motion.div>
  );
};

// ✅ PropTypes Validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    githubLink: PropTypes.string,
  }),
};

// ✅ Default Props
ProjectCard.defaultProps = {
  project: {
    name: "Unknown Project",
    image: "/placeholder.jpg",
    description: "No description available.",
    githubLink: null,
  },
};

export default ProjectCard;
