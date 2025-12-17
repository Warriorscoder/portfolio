"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="container-wide mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="
            text-5xl md:text-4xl font-semibold leading-tight
            bg-linear-to-r from-gray-500 via-gray-600 to-gray-900
            bg-clip-text text-transparent text-center 
          "
          >
            Say Hi, and tell me about any collaborations
          </h1>

          <p className="mt-6 text-gray-600 text-lg text-center">
            Have a nice idea? Reach out and let’s chat.
          </p>
    </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
        <ContactForm />
        </motion.div>
      </section>
  );
}
