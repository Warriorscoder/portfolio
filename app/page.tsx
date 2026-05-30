"use client"

import { motion } from "framer-motion"
import { 
  HeroInteractiveFlow, 
  HorizontalTimeline, 
  CapabilityMatrix, 
  FeaturedShopifyCaseStudy, 
  SystemsIBuild, 
  TechnologyEcosystemGraph, 
  EngineeringPrinciples 
} from "@/components/PortfolioComponents"
import { FiArrowRight, FiDownload, FiMail, FiLinkedin, FiGithub } from "react-icons/fi"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
}

export default function Home() {
  return (
    <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-[120px] pb-32">
      {/* Ambient Spotlight Background */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.02),transparent_60%)] pointer-events-none z-0"></div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-8 md:pt-16 lg:pt-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#EAEAEA] bg-white text-[10px] font-mono tracking-wider text-[#787774] uppercase shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Available for Full-time Roles</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.1]"
            >
              Frontend Engineer building scalable web products and high-performance user experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[#2F3437] max-w-xl font-light leading-relaxed"
            >
              Specialized in Next.js, TypeScript, API-driven architectures, dashboard systems, and modern SaaS platforms. Engineered with a product-focused, systematic mindset.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#featured-project"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#111111] hover:bg-[#2F3437] active:scale-[0.98] active:translate-y-[0.5px] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] cursor-pointer"
              >
                <span>View Projects</span>
                <FiArrowRight size={16} />
              </a>
              
              <a
                href="/Aniket_Anand_Bharane_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#2F3437] border border-[#EAEAEA] bg-white hover:text-[#111111] hover:border-[#d3d3d0] hover:bg-[#F7F6F3] active:scale-[0.98] active:translate-y-[0.5px] transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer"
              >
                <FiDownload size={16} />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Right Interactive Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <HeroInteractiveFlow />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#EAEAEA] mt-20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <div>
            <div className="text-3xl font-extrabold text-[#111111] tracking-tight">3+</div>
            <div className="text-xs font-mono text-[#787774] uppercase tracking-widest mt-1">Internships Completed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#111111] tracking-tight">1 SaaS</div>
            <div className="text-xs font-mono text-[#787774] uppercase tracking-widest mt-1">Platform Architected</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#111111] tracking-tight">10+</div>
            <div className="text-xs font-mono text-[#787774] uppercase tracking-widest mt-1">Core Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#111111] tracking-tight">Senior Track</div>
            <div className="text-xs font-mono text-[#787774] uppercase tracking-widest mt-1">Product & Frontend Eng.</div>
          </div>
        </motion.div>
      </section>

      {/* 2. EXPERIENCE TIMELINE SECTION */}
      <motion.section 
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="space-y-8 pt-8 border-t border-[#EAEAEA]"
      >
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Chronology of Impact</span>
          <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight mt-1">Professional Sprints</h2>
          <p className="text-sm text-[#2F3437] mt-1 max-w-lg font-light leading-relaxed">
            Detailed timeline showcasing key software engineering internships, backend integration pipelines, and team leading.
          </p>
        </div>

        <HorizontalTimeline />
      </motion.section>

      {/* 3. ENGINEERING EXPERTISE (Capability Matrix) */}
      <motion.section 
        id="expertise"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="space-y-8 pt-8 border-t border-[#EAEAEA]"
      >
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Competency Index</span>
          <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight mt-1">Engineering Expertise</h2>
          <p className="text-sm text-[#2F3437] mt-1 max-w-lg font-light leading-relaxed">
            Four primary capability blocks reflecting full-stack architectural engineering, state optimization, and data modeling.
          </p>
        </div>

        <CapabilityMatrix />
      </motion.section>

      {/* 4. FEATURED PROJECT (Shopify Lead Intelligence case study - occupies 40% page attention) */}
      <motion.section 
        id="featured-project"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="space-y-8 pt-8 border-t border-[#EAEAEA]"
      >
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Project Centerpiece</span>
          <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight mt-1">Shopify Lead Intelligence</h2>
          <p className="text-sm text-[#2F3437] mt-1 max-w-lg font-light leading-relaxed">
            A comprehensive case study detailing the technical challenges, automated routing pipelines, and outcomes.
          </p>
        </div>

        <FeaturedShopifyCaseStudy />
      </motion.section>

      {/* 5. SYSTEMS I BUILD */}
      <motion.section 
        id="systems"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="space-y-8 pt-8 border-t border-[#EAEAEA]"
      >
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Architectural Blueprints</span>
          <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight mt-1">Systems I Build</h2>
          <p className="text-sm text-[#2F3437] mt-1 max-w-lg font-light leading-relaxed">
            Bento-style categories mirroring architectural design capabilities in complex dashboards, platforms, and automated pipelines.
          </p>
        </div>

        <SystemsIBuild />
      </motion.section>

      {/* 6. TECHNOLOGY ECOSYSTEM */}
      <motion.section 
        id="ecosystem"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="space-y-8 pt-8 border-t border-[#EAEAEA]"
      >
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Integration Topology</span>
          <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight mt-1">Technology Ecosystem</h2>
          <p className="text-sm text-[#2F3437] mt-1 max-w-lg font-light leading-relaxed">
            An interactive representation showing where and how he leveraged these technologies across systems.
          </p>
        </div>

        <TechnologyEcosystemGraph />
      </motion.section>

      {/* 7. ENGINEERING PRINCIPLES */}
      <motion.section 
        id="principles"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="space-y-8 pt-8 border-t border-[#EAEAEA]"
      >
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Core Convictions</span>
          <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight mt-1">Engineering Principles</h2>
          <p className="text-sm text-[#2F3437] mt-1 max-w-lg font-light leading-relaxed">
            Fundamental design values applied across repositories to deliver maintainable, highly optimized user flows.
          </p>
        </div>

        <EngineeringPrinciples />
      </motion.section>

      {/* 8. CONTACT SECTION */}
      <motion.section 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="pt-16 border-t border-[#EAEAEA] text-center space-y-8"
      >
        <div className="max-w-xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Available for Engagements</span>
          <h2 className="text-4xl font-extrabold text-[#111111] tracking-tight">Let&apos;s build products that scale.</h2>
          <p className="text-sm text-[#2F3437] font-light leading-relaxed">
            I am currently seeking Software Developer roles where I can apply my Next.js, API Integration, and dashboard scaling capabilities. Let&apos;s discuss collaborations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a
            href="mailto:aniketbharane2004@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold text-[#2F3437] bg-white border border-[#EAEAEA] hover:border-[#d3d3d0] hover:bg-[#F7F6F3] hover:text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all active:scale-[0.98] cursor-pointer"
          >
            <FiMail size={14} className="text-[#ef4444]" />
            <span>aniketbharane2004@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aniket-bharane/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold text-[#2F3437] bg-white border border-[#EAEAEA] hover:border-[#d3d3d0] hover:bg-[#F7F6F3] hover:text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all active:scale-[0.98] cursor-pointer"
          >
            <FiLinkedin size={14} className="text-[#0077b5]" />
            <span>linkedin.com/in/aniket-bharane</span>
          </a>

          <a
            href="https://github.com/Warriorscoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold text-[#2F3437] bg-white border border-[#EAEAEA] hover:border-[#d3d3d0] hover:bg-[#F7F6F3] hover:text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all active:scale-[0.98] cursor-pointer"
          >
            <FiGithub size={14} className="text-neutral-900" />
            <span>github.com/Warriorscoder</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-16 text-xs font-mono text-[#787774] uppercase tracking-widest border-t border-[#EAEAEA] mt-16">
          <div>
            © {new Date().getFullYear()} Aniket Anand Bharane // All Rights Reserved
          </div>
        </div>
      </motion.section>
    </div>
  )
}
