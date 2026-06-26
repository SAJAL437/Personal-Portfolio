import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiDownload, FiArrowLeft, FiFileText, FiLayers } from "react-icons/fi";

const Resume = () => {
  const navigate = useNavigate();
  const [selectedResume, setSelectedResume] = useState("frontend");

  const frontendResume = "/SajalTiwari_Frontend_Developer_Resume.pdf";
  const fullstackResume = "/Sajal Tiwari Resume pdf.pdf";

  const handleDownload = () => {
    const file =
      selectedResume === "frontend" ? frontendResume : fullstackResume;
    const link = document.createElement("a");
    link.href = file;
    link.download = `Sajal_Tiwari_Resume.pdf`;
    link.click();
  };

  return (
    <section className="min-h-screen py-12 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
      {/* Sidebar Controls */}
      <div className="lg:w-1/3 flex flex-col gap-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <FiArrowLeft /> Back to Portfolio
        </button>

        <div>
          <h2 className="text-4xl font-black text-white mb-2">
            My <span className="text-cyan-400">Resume</span>
          </h2>
          <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
            // VIEW & DOWNLOAD
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {[
            {
              id: "frontend",
              label: "Frontend Professional",
              icon: <FiFileText />,
            },
            {
              id: "fullstack",
              label: "Full Stack Architect",
              icon: <FiLayers />,
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedResume(item.id)}
              className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                selectedResume === item.id
                  ? "bg-white/10 border-cyan-500 text-white"
                  : "bg-transparent border-white/5 text-neutral-500 hover:border-white/20"
              }`}
            >
              {item.icon}
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-cyan-500 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-400 transition"
        >
          <FiDownload /> Download PDF
        </button>
      </div>

      {/* Preview Pane */}
      <motion.div
        key={selectedResume}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:w-2/3 bg-neutral-900 border border-white/10 rounded-3xl p-2 shadow-2xl"
      >
        <div className="w-full h-[700px] lg:h-[800px] rounded-2xl overflow-hidden bg-white">
          <iframe
            src={
              selectedResume === "frontend" ? frontendResume : fullstackResume
            }
            className="w-full h-full"
            title="Resume Preview"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
