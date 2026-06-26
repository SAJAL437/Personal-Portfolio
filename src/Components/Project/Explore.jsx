import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Premium Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-mono tracking-[0.2em] uppercase text-cyan-400 border border-cyan-400/20 rounded-full bg-cyan-400/5">
          Work In Progress
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Projects <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Coming Soon
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-neutral-400 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
          I am crafting something special. New case studies and innovative
          architectures will be live here very shortly.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300"
        >
          Return Home
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* Grid Pattern overlay for premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </div>
  );
};

export default Explore;
