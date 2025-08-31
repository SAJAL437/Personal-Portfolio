import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBackward, FaDownload } from "react-icons/fa";

const Resume = () => {
  const navigate = useNavigate();
  const [selectedResume, setSelectedResume] = useState("frontend"); // Default to frontend
  const [isLoading, setIsLoading] = useState(false); // Track PDF loading state

  // Paths to resumes (in /public/)
  const frontendResume = "/SajalTiwari_Frontend_Developer_Resume.pdf";
  const fullstackResume = "/Sajal Tiwari Resume pdf.pdf";

  // Function to trigger download
  const handleDownload = (file, name) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to go back
  const goBack = () => navigate("/");

  // Handle resume selection with loading state
  const handleResumeSelect = (resumeType) => {
    setIsLoading(true);
    setSelectedResume(resumeType);
    setTimeout(() => setIsLoading(false), 500); // Simulate loading delay
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row w-full gap-4 items-center justify-center min-h-screen bg-img p-4 sm:p-6 lg:p-8"
      aria-label="Resume Section"
    >
      {/* Profile Section */}
      <div className="w-full md:w-5/12 lg:w-4/12 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 text-white drop-shadow-md animate-fade-in">
          Sajal Tiwari
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-200 drop-shadow-md">
          Full Stack Developer
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full mt-4 sm:mt-6">
          <button
            onClick={goBack}
            className="flex items-center justify-center gap-2 px-4 py-2 w-full sm:w-auto bg-transparent font-semibold rounded-full border border-gray-300 text-sm text-gray-100 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300"
            aria-label="Go Back"
          >
            <FaBackward /> Back
          </button>

          {/* Frontend Resume Button */}
          <button
            onClick={() => handleResumeSelect("frontend")}
            className={`px-4 py-2 w-full sm:w-auto font-semibold rounded-full text-sm transition-all duration-300 ${
              selectedResume === "frontend"
                ? "bg-blue-700 text-white shadow-lg"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            aria-label="View Frontend Resume"
          >
            Resume
          </button>

          {/* Full Stack Resume Button */}
          {/* <button
            onClick={() => handleResumeSelect("fullstack")}
            className={`px-4 py-2 w-full sm:w-auto font-semibold rounded-full text-sm transition-all duration-300 ${
              selectedResume === "fullstack"
                ? "bg-green-700 text-white shadow-lg"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
            aria-label="View Full Stack Resume"
          >
            Full Stack Resume
          </button> */}
        </div>
      </div>

      {/* Resume Preview Section */}
      <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col items-center">
        <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl shadow-2xl rounded-lg overflow-hidden bg-white/90 p-4 sm:p-5 relative">
          {isLoading ? (
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] flex items-center justify-center bg-gray-100 animate-pulse">
              <span className="text-gray-500 text-lg">Loading Preview...</span>
            </div>
          ) : (
            <iframe
              src={selectedResume === "frontend" ? frontendResume : fullstackResume}
              title={`${selectedResume} Resume Preview`}
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] border-none rounded-lg"
              onLoad={() => setIsLoading(false)}
              aria-label={`${selectedResume} resume preview`}
            />
          )}
        </div>
        {/* Download Button Below Preview */}
        {/* <button
          onClick={() =>
            handleDownload(
              selectedResume === "frontend" ? frontendResume : fullstackResume,
              selectedResume === "frontend"
                ? "Sajal_Tiwari_Frontend_Resume.pdf"
                : "Sajal_Tiwari_FullStack_Developer_Resume.pdf"
            )
          }
          className={`mt-4 px-4 sm:px-6 py-2 w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl font-semibold rounded-full text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
            selectedResume === "frontend"
              ? "bg-blue-700 text-white hover:bg-blue-800"
              : "bg-green-700 text-white hover:bg-green-800"
          }`}
          aria-label={`Download ${selectedResume === "frontend" ? "Frontend" : "Full Stack"} Resume`}
        >
          <FaDownload /> Download {selectedResume === "frontend" ? "Frontend" : "Full Stack"} Resume
        </button> */}
      </div>
    </section>
  );
};

export default Resume;