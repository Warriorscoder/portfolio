"use client";

import { ProjectDetails } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect } from "react";

export default function ProjectDetailsDialog({
  project,
  open,
  onClose,
}: {
  project: ProjectDetails | null;
  open: boolean;
  onClose: () => void;
}) {
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
                {/* Overview */}
                <section>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.overview}
                  </p>
                </section>

                {/* Core Workflow */}
                <section>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Core Workflow
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {project.workflow.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Key Technical Optimizations */}
                <section>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Key Technical Optimizations
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {project.optimizations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Tech Stack */}
                <section>
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
                  <section>
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Links
                    </h3>
                    <div className="flex gap-6">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium hover:underline"
                        >
                          Live Project <FaArrowUpRightFromSquare />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium hover:underline"
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
  );
}
