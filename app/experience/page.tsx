"use client"

import { motion } from "framer-motion"
import { experiences } from "@/data/experience"

export default function ExperiencePage() {
  return (
    <section className="container-wide mx-auto px-4 ">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-4xl md:text-6xl font-semibold mb-16
          bg-linear-to-r from-gray-500 via-gray-600 to-gray-900
          bg-clip-text text-transparent
        "
      >
        Experience
      </motion.h1>

      {/* Experience Timeline */}
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="
              rounded-2xl border border-gray-200
              bg-white/70 backdrop-blur-sm p-8
            "
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {exp.company}
                </h2>
                <p className="text-gray-600">
                  {exp.role} · {exp.location}
                </p>
              </div>

              <span
                className="
                  text-sm font-medium
                  bg-linear-to-r from-gray-400 via-gray-500 to-gray-900
                  bg-clip-text text-transparent
                "
              >
                {exp.duration}
              </span>
            </div>

            {/* Description */}
            <ul className="mt-6 space-y-3 text-gray-700 leading-relaxed list-disc list-inside">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-1.5 rounded-full text-sm
                      border border-gray-300 text-gray-700
                      hover:bg-gray-100 transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
