import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "./Project";
import { FaBackward, FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaLayerGroup } from "react-icons/fa";

const ProjectDetails = () => {
  const { projectname } = useParams();
  const project = PROJECTS.find((p) => p.projectname === projectname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectname]);

  if (!project) {
    return (
      <div className="bg-neutral-950 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        <h2 className="text-2xl font-mono text-cyan-400 font-bold text-center">/* Project Not Found */</h2>
        <Link to="/" className="mt-6 px-5 py-2.5 border border-white/20 hover:border-cyan-400 text-white font-mono text-xs tracking-widest uppercase rounded-lg transition-all">
          ← Return to Index
        </Link>
      </div>
    );
  }

  const targetImage = project.detImg || project.image;

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased relative overflow-hidden">
      
      {/* ─── DYNAMIC BACKGROUND IMAGE ENGINE ─── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat scale-110 opacity-20 blur-3xl transition-all duration-1000"
        style={{ backgroundImage: `url(${targetImage})` }}
      />
      {/* Soft Dark Vignette Layer over Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-neutral-950 z-0 pointer-events-none" />

      {/* Main Structural Wrapper Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Navigation Breadcrumb Header */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
          <Link to="/" className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-cyan-400 transition-colors group">
            <FaBackward className="group-hover:-translate-x-1 transition-transform" /> [ Back to Grid ]
          </Link>
          <span className="font-mono text-xs text-neutral-500 tracking-wider">ID // 0{project.id}</span>
        </div>

        {/* Title Block */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-2">// {project.tagline}</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            {project.name}
          </h1>
        </div>

        {/* ─── SPLIT GRAPHIC INDEX ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Content Field & Specs Details */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            
            {/* Meta-Specs Dashboard Panel */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <FaLayerGroup className="text-cyan-400 text-lg shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-500 block">Category</span>
                  <span className="text-xs font-semibold text-neutral-200">{project.category || "Full-Stack System"}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-fuchsia-400 text-lg shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-500 block">Timeline</span>
                  <span className="text-xs font-semibold text-neutral-200">{project.timeline || "Completed"}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-500 block">Deployment Status</span>
                  <span className="text-xs font-semibold text-neutral-200">Active / Production</span>
                </div>
              </div>
            </div>

            {/* Core Architectural Narrative */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest border-b border-white/5 pb-2">// Executive Summary</h3>
              <p className="text-base text-neutral-300 leading-relaxed font-sans font-light text-left">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Granular System Features Checklist */}
            {project.features && (
              <div className="space-y-4">
                <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest border-b border-white/5 pb-2">// System Architecture & Capabilities</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3.5 bg-neutral-900/50 border border-white/5 rounded-xl transition-all hover:bg-neutral-900">
                      <span className="text-cyan-400 font-mono text-sm shrink-0">⚡</span>
                      <p className="text-sm text-neutral-400 leading-relaxed text-left">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Normal Size Image Frame & Production Stack Links */}
          <div className="lg:col-span-5 space-y-8 order-1 lg:order-2 lg:sticky lg:top-8">
            
            {/* Normal Sized High-Definition Card Image */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-neutral-900/40 backdrop-blur-md max-w-md mx-auto lg:max-w-none group">
              <img
                src={targetImage}
                alt={project.name}
                className="w-full h-auto object-cover max-h-[320px] group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Tech Stack Matrix Board */}
            <div className="p-6 border border-white/10 bg-neutral-900/30 rounded-2xl backdrop-blur-sm">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">// Production Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-neutral-300 hover:border-cyan-400/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Deployment Outbound Anchors */}
            <div className="flex flex-col gap-3 w-full max-w-md mx-auto lg:max-w-none font-mono text-xs">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 flex items-center justify-center gap-2 border border-white/10 rounded-xl bg-white text-black hover:bg-neutral-200 transition-all font-bold text-center group shadow-lg"
                >
                  <FaGithub className="text-sm" />
                  [ Review Codebase ]
                </a>
              )}
              
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 flex items-center justify-center gap-2 border border-cyan-500/20 rounded-xl bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all font-bold text-center group"
                >
                  <FaExternalLinkAlt className="text-[11px]" />
                  [ Access Production Live ]
                </a>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;