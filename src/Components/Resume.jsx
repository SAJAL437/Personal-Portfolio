import { useNavigate } from "react-router-dom";
import CVDownloadButton from "./CvButton";
import preview from "../assets/resume.png";
import { FaBackward } from "react-icons/fa";

const Resume = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row w-full gap-6 items-center justify-center min-h-screen bg-img p-6"
    >
      {/* Profile Section */}
      <div className="w-full md:w-4/12 bg-white/10 border border-stone-50/30 backdrop-blur-md rounded-2xl p-5 text-center">
        <h1 className="text-3xl font-bold mb-1 text-white">Sajal Tiwari</h1>
        <p className="text-lg md:text-2xl font-semibold text-white">
          A Full Stack Developer
        </p>

        {/* Buttons Section */}
        <div className="flex  md:flex-row justify-center items-center gap-4 w-full mt-5">
          <button
            onClick={goBack}
            className="flex items-center justify-center gap-2 px-5 py-2 w-full md:w-auto bg-transparent font-semibold rounded-3xl transition border border-gray-300 text-sm text-gray-50 hover:bg-gray-100 hover:text-gray-900 duration-500"
          >
            <FaBackward /> Back
          </button>

          <div className="w-full md:w-auto">
            <CVDownloadButton />
          </div>
        </div>
      </div>

      {/* Resume Preview Section */}
      <div className="w-full md:w-7/12 flex justify-center">
        <div className="w-full max-w-sm md:max-w-lg shadow-lg rounded-lg overflow-hidden bg-white p-5">
          <img src={preview} alt="Resume Preview" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
