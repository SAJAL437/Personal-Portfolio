import carlImg from "/portfolio-removebg-preview.png";
import { motion } from "framer-motion";
import { useState } from "react";

const HERO = {
  name: "SAJAL TIWARI",
  greet: "FULL STACK ARCHITECT & LOGICIAN //",
  description:
    "A logical thinker and full stack developer who bridges the gap between complex mathematical logic and high-performance web applications. I craft secure, scalable backends and pixel-perfect interactive frontends.",
};

const Hero = () => {
  const [activeAction, setActiveAction] = useState(null);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-6 pt-12 lg:pt-4 pb-4 overflow-hidden font-sans">
      {/* --- ELITE FLOATING TECHNICAL BLUEPRINTS --- */}
      <div className="absolute inset-0 opacity-15 select-none pointer-events-none font-mono text-[11px] text-slate-600 leading-relaxed z-0 hidden lg:block">
        <div className="absolute top-6 left-2 bg-[#060d1a]/60 p-3 rounded-xl border border-white/[0.03] backdrop-blur-md shadow-xl">
          <span className="text-teal-400">const</span> pipeline ={" "}
          <span className="text-indigo-400">secureAuthGate</span>(&#123;
          <br />
          &nbsp;&nbsp;protocol: <span className="text-amber-400">'JWT'</span>,
          <br />
          &nbsp;&nbsp;verification:{" "}
          <span className="text-emerald-400">true</span>
          <br />
          &#125;);
        </div>

        <div className="absolute bottom-8 left-6 border-l border-teal-500/20 pl-4">
          <span className="text-slate-500">
            // NIMCET Logical Reasoning Core
          </span>
          <br />
          <span className="text-teal-400">Vector_Space</span> = [A<sub>T</sub>{" "}
          &times; B<sub>T</sub>] &rarr; Det(&Delta;) &ne; 0
        </div>
      </div>

      {/* --- LEFT COLUMN: PROFESSIONAL INTERACTIVE DOCK --- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-[50%] flex flex-col justify-center relative p-6 md:p-8 rounded-3xl bg-white/[0.001] border border-white/[0.01] backdrop-blur-xs shadow-2xl z-10"
      >
        <div className="absolute top-0 left-16 w-32 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

        <div className="text-[11px] font-mono font-bold tracking-[0.35em] text-teal-400 mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)] animate-pulse" />
          {HERO.greet}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
          {HERO.name}
        </h1>

        <p className="text-gray-200 text-xs sm:text-sm font-semibold max-w-xl mb-6 leading-relaxed tracking-wider  opacity-55">
          {HERO.description}
        </p>

        {/* --- FIXED COMPACT HORIZONTAL GRID FOR MOBILE --- */}
        <div className="grid grid-cols-3 gap-2 border-t border-b border-white/[0.04] py-3 mb-6 bg-[#040912]/10 rounded-xl px-2 sm:px-4">
          <div className="min-w-0">
            <p className="text-[8px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider truncate">
              Database Engine
            </p>
            <p className="text-[9px] sm:text-sm font-semibold text-emerald-400 mt-0.5 font-mono truncate">
              POSTGRES
            </p>
          </div>
          <div className="border-l border-white/[0.04] pl-2 min-w-0">
            <p className="text-[8px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider truncate">
              Architecture
            </p>
            <p className="text-[9px] sm:text-sm font-semibold text-teal-400 mt-0.5 font-mono truncate">
              REST / MVC
            </p>
          </div>
          <div className="border-l border-white/[0.04] pl-2 min-w-0">
            <p className="text-[8px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider truncate">
              Vitals State
            </p>
            <p className="text-[9px] sm:text-sm font-semibold text-indigo-400 mt-0.5 font-mono truncate">
              9ms LATENCY
            </p>
          </div>
        </div>

        {/* --- CLEAN REFINED BUTTONS FOR MOBILE --- */}
        <div className="flex flex-col sm:flex-row items-center gap-3 relative w-full">
          <a
            href="#projects"
            onMouseEnter={() => setActiveAction("compile")}
            onMouseLeave={() => setActiveAction(null)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 sm:hover:from-teal-500 sm:hover:to-indigo-500 text-white font-bold text-[11px] tracking-[0.08em] uppercase shadow-lg transition-all duration-300 relative group flex items-center justify-center sm:justify-between gap-4 text-center"
          >
            <span>Explore Projects</span>
            <span className="hidden sm:inline-block font-mono text-[9px] bg-black/30 px-1.5 py-0.5 rounded text-teal-300 border border-teal-400/20">
              ⌘ + P
            </span>
          </a>

          <a
            href="#bio"
            onMouseEnter={() => setActiveAction("bio")}
            onMouseLeave={() => setActiveAction(null)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-slate-300 font-bold text-[11px] tracking-[0.08em] uppercase sm:hover:bg-white/[0.06] sm:hover:text-white transition-all duration-300 flex items-center justify-center sm:justify-between gap-4 text-center"
          >
            <span>View Experience</span>
            <span className="hidden sm:inline-block font-mono text-[9px] text-indigo-400">
              &larr;&rarr;
            </span>
          </a>
        </div>
      </motion.div>

      {/* ─── IMAGE COLUMN: UNTOUCHED STYLES WITH SEMI RADIAL AURA ─── */}
      <div className="w-full lg:w-[48%] flex justify-center items-center relative z-10 max-h-[550px]">
        {/* SEMI RADIAL BACKGROUND GLOW */}
        <div className="absolute bottom-[10%] w-[90%] h-[60%] bg-[radial-gradient(ellipse_at_bottom,rgba(45,212,191,0.28)_0%,rgba(79,70,229,0.08)_55%,transparent_100%)] blur-xl -z-10 pointer-events-none" />

        {/* SEMI RADIAL ARCHITECTURAL ARC RING */}
        <div className="absolute bottom-[8%] w-[350px] sm:w-[460px] h-[220px] sm:h-[260px] rounded-t-full bg-[radial-gradient(ellipse_at_bottom,transparent_60%,rgba(45,212,191,0.08)_65%,transparent_72%)] -z-10 pointer-events-none" />

        {/* FLOATING HUD DATA TAGS */}
        <div className="absolute top-0 right-4 bg-[#040914]/90 border border-teal-500/20 py-1 px-2.5 rounded-lg shadow-md z-20 font-mono text-[8px] text-teal-400 flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYS_STATUS: ACTIVE</span>
        </div>

        <div className="absolute bottom-2 left-2 bg-[#040914]/95 border border-white/[0.03] py-1.5 px-2.5 rounded-lg shadow-xl z-20">
          <p className="text-[7px] font-mono text-slate-500 uppercase tracking-widest">
            Architect
          </p>
          <p className="text-[9px] text-slate-300 font-bold font-mono tracking-wider">
            SAJAL_TIWARI
          </p>
        </div>

        {/* LARGE IMAGE CONTAINER */}
        <div className="relative w-[100%] sm:w-[125%] lg:w-[135%] flex justify-center items-end overflow-hidden">
          <img
            src={carlImg}
            alt={HERO.name}
            className="w-full h-auto max-h-[500px] lg:max-h-[540px] object-contain select-none z-10 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          />

          {/* Smooth Vignette Fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent z-15 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
