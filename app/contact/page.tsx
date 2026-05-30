"use client"

import ContactForm from "@/components/ContactForm"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8">
      {/* Header */}
      <div className="space-y-4 text-center max-w-xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EAEAEA] bg-white text-xs font-mono tracking-wider text-[#787774] uppercase shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
        >
          <span>Get in Touch</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]"
        >
          Let&apos;s collaborate.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#2F3437] text-base font-light leading-relaxed"
        >
          Have an idea, project, or full-time opportunity? Reach out and let&apos;s build together.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <ContactForm />
      </motion.div>
    </section>
  )
}
