"use client";

import { ProjectDetails } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function ProjectDetailsDialog({
  project,
  open,
  onClose,
}: {
  project: ProjectDetails | null;
  open: boolean;
  onClose: () => void;
}) {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!project) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Modal wrapper — TOP aligned */}
            <motion.div
              className="fixed inset-0 z-50 flex justify-center px-4 py-10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Modal */}
              <div
                className="
                  relative w-full max-w-4xl
                  max-h-full
                  rounded-2xl bg-white shadow-xl
                  flex flex-col
                "
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                {/* Header (sticky) */}
                <div
                  className="
                    sticky top-0 z-10
                    flex justify-between items-start
                    border-b border-gray-200
                    bg-white px-8 py-3
                  "
                >
                  <div>
                    <h2
                      className="
                        text-3xl font-semibold
                        bg-linear-to-r from-gray-500 via-gray-600 to-gray-900
                        bg-clip-text text-transparent py-3
                      "
                    >
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">{project.date}</p>
                  </div>

                  <button
                    onClick={onClose}
                    aria-label="Close dialog"
                    className="text-gray-400 hover:text-gray-900 transition text-xl"
                  >
                    ✕
                  </button>
                </div>

                {/* 🔥 SCROLL CONTAINER */}
                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-12">
                  {/* Overview */}
                  <section>
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {project.overview}
                    </p>
                  </section>

                  {/* Problem & Proposed Solution */}
                  {project.problemStatement && project.solution && (
                    <section className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div className="bg-red-50/40 border-l-4 border-red-500/80 p-5 rounded-r-xl">
                        <h4 className="font-semibold text-red-950 mb-2 text-xs uppercase tracking-wider">The Problem</h4>
                        <p className="text-red-900/90 leading-relaxed text-sm">{project.problemStatement}</p>
                      </div>
                      <div className="bg-emerald-50/40 border-l-4 border-emerald-500/80 p-5 rounded-r-xl">
                        <h4 className="font-semibold text-emerald-950 mb-2 text-xs uppercase tracking-wider">The Solution</h4>
                        <p className="text-emerald-900/90 leading-relaxed text-sm">{project.solution}</p>
                      </div>
                    </section>
                  )}

                  {/* High-Level Architecture Diagram (HLD) */}
                  {project.hldImage && (
                    <section className="space-y-4 pt-4 border-t border-gray-100">
                      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                        High-Level Architecture (HLD)
                      </h3>
                      <div 
                        className="relative group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 cursor-zoom-in aspect-video max-h-96 flex items-center justify-center"
                        onClick={() => setZoomImage(project.hldImage!)}
                      >
                        <img 
                          src={project.hldImage} 
                          alt="High Level Architecture Diagram" 
                          className="object-contain w-full h-full p-2 transition duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                          <span className="bg-white/95 text-gray-800 text-xs font-medium px-3 py-2 rounded-lg shadow-md backdrop-blur-xs flex items-center gap-1.5">
                            🔍 Click to zoom & inspect
                          </span>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Core Workflow */}
                  <section className="pt-4 border-t border-gray-100">
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Core Workflow
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {project.workflow.map((item) => (
                        <li key={item} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Key Features */}
                  {project.features && (
                    <section className="pt-4 border-t border-gray-100">
                      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                        Key Platform Features
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.features.map((feat) => (
                          <div key={feat.title} className="bg-gray-50/80 border border-gray-200 p-5 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2 text-sm">{feat.title}</h4>
                            <ul className="space-y-1.5 text-sm text-gray-700">
                              {feat.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-0.5">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Key Technical Optimizations */}
                  <section className="pt-4 border-t border-gray-100">
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Key Technical Optimizations
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {project.optimizations.map((item) => (
                        <li key={item} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Database Design & Schema */}
                  {project.databaseDesign && (
                    <section className="pt-4 border-t border-gray-100">
                      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                        Database Design & Schema
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.databaseDesign.map((db) => (
                          <div key={db.table} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                              <span className="font-mono text-sm font-semibold text-indigo-600">Table: {db.table}</span>
                            </div>
                            <div className="p-4 space-y-3">
                              <div className="flex flex-wrap gap-1.5">
                                {db.fields.map((f) => (
                                  <span key={f} className="font-mono text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                                    {f}
                                  </span>
                                ))}
                              </div>
                              {db.description && (
                                <p className="text-xs text-gray-500 mt-1.5 italic">{db.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Challenges Solved */}
                  {project.challengesSolved && (
                    <section className="pt-4 border-t border-gray-100">
                      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                        Challenges Solved
                      </h3>
                      <div className="space-y-3">
                        {project.challengesSolved.map((challenge, idx) => (
                          <div key={idx} className="flex gap-3 bg-amber-50/20 border border-amber-100 p-4 rounded-xl">
                            <span className="text-lg">💡</span>
                            <p className="text-sm text-gray-700 leading-relaxed">{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Business Impact */}
                  {project.businessImpact && (
                    <section className="pt-4 border-t border-gray-100">
                      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                        Business Impact
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {project.businessImpact.map((impact, idx) => (
                          <div key={idx} className="bg-linear-to-b from-indigo-50/20 to-violet-50/20 border border-indigo-100 p-4 rounded-xl flex flex-col justify-between">
                            <span className="text-indigo-600 text-xl font-bold mb-2">0{idx + 1}</span>
                            <p className="text-sm text-gray-700 leading-relaxed font-medium">{impact}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Future Roadmap */}
                  {project.futureRoadmap && (
                    <section className="pt-4 border-t border-gray-100">
                      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                        Future Roadmap
                      </h3>
                      <div className="relative pl-6 border-l-2 border-dashed border-gray-200 space-y-6 ml-2">
                        {project.futureRoadmap.map((road, idx) => (
                          <div key={idx} className="relative">
                            {/* Bullet */}
                            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-indigo-600 bg-white" />
                            <h4 className="font-semibold text-gray-900 text-sm">{road.phase}</h4>
                            <ul className="mt-2 space-y-1.5 text-xs text-gray-600 list-disc list-inside">
                              {road.items.map((item, idy) => (
                                <li key={idy} className="leading-relaxed">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Tech Stack */}
                  <section className="pt-4 border-t border-gray-100">
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full border border-gray-300 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Links */}
                  {(project.link || project.github) && (
                    <section className="pt-4 border-t border-gray-100">
                      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                        Links
                      </h3>
                      <div className="flex gap-6">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:underline text-indigo-600"
                          >
                            Live Project <FaArrowUpRightFromSquare />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:underline text-indigo-600"
                          >
                            GitHub <FaGithub />
                          </a>
                        )}
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Lightbox for zooming HLD image */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
          >
            <motion.img
              src={zoomImage}
              alt="Zoomed HLD Diagram"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            />
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light focus:outline-none"
              onClick={() => setZoomImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
