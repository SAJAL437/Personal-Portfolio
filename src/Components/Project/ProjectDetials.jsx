import React from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "./Project"; // import project list
import { FaBackward } from "react-icons/fa";

const ProjectDetails = () => {
  const { projectname } = useParams();
  const project = PROJECTS.find((p) => p.projectname === projectname);

  if (!project) {
    return (
      <div className="bg-img flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center">Project not found</h2>
        <Link
          to="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-img mx-auto px-4 min-h-screen sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
            {project.name}
          </h1>
          <img
            src={project.detImg}
            alt={project.name}
            className="w-full h-auto max-w-full sm:max-w-2xl lg:max-w-3xl rounded-2xl shadow-lg mb-4 sm:mb-6 mx-auto lg:mx-0"
          />
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 text-center lg:text-left">
            {project.description}
          </p>
        </div>

        <div className="w-full lg:w-1/3 sm:mt-10 flex flex-col items-center lg:items-start">
          <h2 className="my-4 sm:my-5 text-xl sm:text-2xl font-bold">Tech Stack</h2>
          {project.techStack && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 text-sm sm:text-base"
              >
                GitHub
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 text-sm sm:text-base"
              >
                Live Demo
              </a>
            )}
            <Link
              to="/"
              className="px-4 py-2 flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 text-sm sm:text-base"
            >
              <FaBackward className="text-sm sm:text-base" />
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;