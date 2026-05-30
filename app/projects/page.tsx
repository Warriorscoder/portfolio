"use client"

import { motion } from "framer-motion"
import { FeaturedShopifyCaseStudy, SystemsIBuild } from "@/components/PortfolioComponents"

export default function ProjectsPage() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Title */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EAEAEA] bg-white text-xs font-mono tracking-wider text-[#787774] uppercase shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
        >
          <span>Product Index</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]"
        >
          Engineered Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#2F3437] max-w-xl text-sm font-light leading-relaxed"
        >
          A highly specialized index of production-ready dashboard platforms, automated scraping pipelines, and distributed data systems.
        </motion.p>
      </div>

      {/* Featured Shopify Case Study centerpiece */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="pt-8 border-t border-[#EAEAEA]"
      >
        <FeaturedShopifyCaseStudy />
      </motion.div>

      {/* Systems Categories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="space-y-8 pt-12 border-t border-[#EAEAEA]"
      >
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 font-bold">Scope of Architecture</span>
          <h2 className="text-2xl font-extrabold text-[#111111] tracking-tight mt-1">Systems Index</h2>
        </div>

        <SystemsIBuild />
      </motion.div>
    </section>
  )
}
