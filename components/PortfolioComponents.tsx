"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  SiNextdotjs, SiReact, SiTypescript, SiRedux, SiTailwindcss, 
  SiFastapi, SiExpress, SiMongodb, SiPostgresql, SiSupabase
} from "react-icons/si"
import { 
  FiArrowRight, FiCpu, FiDatabase, FiServer, FiLayers, FiActivity, 
  FiLayout, FiLock, FiCheckCircle, FiSearch, FiSliders, FiFilter,
  FiExternalLink, FiGithub
} from "react-icons/fi"
import Link from "next/link"

// ----------------------------------------------------
// 1. HERO INTERACTIVE FLOW
// ----------------------------------------------------
export function HeroInteractiveFlow() {
  const [telemetry, setTelemetry] = useState({
    latency: 38,
    cacheHitRate: 98.4,
    queueLoad: 0,
    crawlingRate: 14,
    activeRequests: 4
  })

  // Simulate real-time telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry(prev => ({
        latency: Math.floor(Math.sin(Date.now() / 2000) * 3) + 38,
        cacheHitRate: parseFloat((98.2 + Math.sin(Date.now() / 1500) * 0.3).toFixed(1)),
        queueLoad: Math.max(0, Math.floor(Math.sin(Date.now() / 4000) * 2) + 1),
        crawlingRate: Math.floor(Math.cos(Date.now() / 3000) * 2) + 14,
        activeRequests: Math.floor(Math.sin(Date.now() / 1000) * 2) + 4
      }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[320px] md:h-[380px] bg-white rounded-2xl border border-[#EAEAEA] p-6 overflow-hidden flex flex-col justify-between grid-bg-dense shadow-[0_1px_3px_rgba(0,0,0,0.01),0_2px_8px_rgba(0,0,0,0.015)]">
      {/* Top Header Grid */}
      <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-[#787774] font-semibold">System Telemetry Layer</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-[#787774]">
          <div>HOST: <span className="text-[#2F3437] font-semibold">IIIT_KOTA_SRV</span></div>
          <div>STATUS: <span className="text-emerald-600 font-bold">ONLINE</span></div>
        </div>
      </div>

      {/* Main Flow Canvas Visualizer */}
      <div className="relative flex-1 flex items-center justify-around py-4">
        {/* Animated Particles flowing between nodes */}
        <div className="absolute inset-x-12 top-1/2 h-0.5 pointer-events-none">
          <span className="absolute top-1/2 left-0 w-2 h-2 -translate-y-1/2 bg-[#0ea5e9] rounded-full blur-[1px] animate-[ping_2.5s_infinite_linear]"></span>
          <span className="absolute top-1/2 left-1/4 w-1.5 h-1.5 -translate-y-1/2 bg-[#2563eb] rounded-full blur-[1px] animate-[ping_2s_infinite_linear_delay_0.5s]"></span>
          <span className="absolute top-1/2 left-2/4 w-2.5 h-2.5 -translate-y-1/2 bg-[#10b981] rounded-full blur-[2px] animate-[ping_3s_infinite_linear_delay_1s]"></span>
        </div>

        {/* Node 1: Client / Next.js */}
        <div className="flex flex-col items-center z-10 group">
          <div className="w-14 h-14 rounded-xl border border-[#EAEAEA] bg-white flex items-center justify-center text-[#2F3437] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all group-hover:border-[#0ea5e9] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] duration-300">
            <FiLayout className="text-xl text-[#0ea5e9]" />
          </div>
          <div className="text-xs font-mono text-[#111111] mt-2 font-bold uppercase tracking-wider">Client SPA</div>
          <div className="text-[11px] font-mono text-[#787774]">Next.js 16</div>
        </div>

        {/* Connection Line */}
        <div className="flex-1 h-[1px] bg-[#EAEAEA] border-dashed border-t relative">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-white px-2 text-[#787774] font-medium">RPC / HTTP</span>
        </div>

        {/* Node 2: API Gateway / FastAPI */}
        <div className="flex flex-col items-center z-10 group">
          <div className="w-14 h-14 rounded-xl border border-[#EAEAEA] bg-white flex items-center justify-center text-[#2F3437] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all group-hover:border-[#10b981] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] duration-300">
            <FiServer className="text-xl text-[#10b981]" />
          </div>
          <div className="text-xs font-mono text-[#111111] mt-2 font-bold uppercase tracking-wider">FastAPI GW</div>
          <div className="text-[11px] font-mono text-[#787774]">Python Gateway</div>
        </div>

        {/* Connection Line */}
        <div className="flex-1 h-[1px] bg-[#EAEAEA] border-dashed border-t relative">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-white px-2 text-[#787774] font-medium">CELERY</span>
        </div>

        {/* Node 3: Database & Worker */}
        <div className="flex flex-col items-center z-10 group">
          <div className="w-14 h-14 rounded-xl border border-[#EAEAEA] bg-white flex items-center justify-center text-[#2F3437] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all group-hover:border-[#f97316] group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] duration-300">
            <FiDatabase className="text-xl text-[#f97316]" />
          </div>
          <div className="text-xs font-mono text-[#111111] mt-2 font-bold uppercase tracking-wider">DB / Broker</div>
          <div className="text-[11px] font-mono text-[#787774]">Supabase + Redis</div>
        </div>
      </div>

      {/* Telemetry Dashboard Stats */}
      <div className="border-t border-[#EAEAEA] pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-lg bg-[#F7F6F3]/50 p-2.5 border border-[#EAEAEA] hover:border-[#d3d3d0] transition-colors">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#787774] mb-0.5">GATEWAY LATENCY</div>
          <div className="text-base font-mono text-[#111111] font-bold">{telemetry.latency} ms</div>
        </div>
        <div className="rounded-lg bg-[#F7F6F3]/50 p-2.5 border border-[#EAEAEA] hover:border-[#d3d3d0] transition-colors">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#787774] mb-0.5">CACHE HIT RATE</div>
          <div className="text-base font-mono text-[#111111] font-bold">{telemetry.cacheHitRate}%</div>
        </div>
        <div className="rounded-lg bg-[#F7F6F3]/50 p-2.5 border border-[#EAEAEA] hover:border-[#d3d3d0] transition-colors">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#787774] mb-0.5">CELERY QUEUE LOAD</div>
          <div className="text-base font-mono text-[#111111] font-bold">{telemetry.queueLoad} tasks</div>
        </div>
        <div className="rounded-lg bg-[#F7F6F3]/50 p-2.5 border border-[#EAEAEA] hover:border-[#d3d3d0] transition-colors">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#787774] mb-0.5">ACTIVE WORKFLOWS</div>
          <div className="text-base font-mono text-[#111111] font-bold">{telemetry.activeRequests} nodes</div>
        </div>
      </div>
    </div>
  )
}

// ----------------------------------------------------
// 2. EXPERIENCE TIMELINE (Horizontal Enterprise Timeline)
// ----------------------------------------------------
interface ExperienceCard {
  id: number
  company: string
  role: string
  duration: string
  location: string
  techStack: string[]
  impactMetrics: { title: string; subtitle: string; description: string }[]
  highlights: string[]
}

const experiences: ExperienceCard[] = [
  {
    id: 3,
    company: "Pipeline AI",
    role: "Frontend Developer Intern",
    duration: "Jan 2026 – Jul 2026",
    location: "Remote",
    techStack: ["Next.js", "Redux", "TanStack Query", "TypeScript", "Tailwind CSS"],
    impactMetrics: [
      { title: "Config-Driven UI", subtitle: "Standardized Frontend", description: "Built flexible metadata render systems for operational dynamic workflows." },
      { title: "Data Caching Workflows", subtitle: "TanStack Query Layer", description: "Implemented global server caching hooks, cashing backend queries." },
      { title: "Operational Dashboards", subtitle: "Data-Intensive Views", description: "Developed tracking & status monitoring widgets for business managers." },
      { title: "Agile Feature Cycles", subtitle: "Figma to Production", description: "Aligned with API routes and deployment structures in active sprints." }
    ],
    highlights: [
      "Built reusable component systems for rapid dynamic page generation.",
      "Optimized large-dataset rendering using debounced inputs and layout memoization.",
      "Standardized UI hooks to handle automated status monitoring feeds."
    ]
  },
  {
    id: 1,
    company: "DreamsCloud Tech",
    role: "Web Developer Intern",
    duration: "May 2025 – Aug 2025",
    location: "Remote",
    techStack: ["React.js", "Next.js", "TypeScript", "Supabase", "Express.js", "PostgreSQL", "MongoDB"],
    impactMetrics: [
      { title: "School ERP System", subtitle: "Subsystem Operations", description: "Designed Transport Management systems containing full CRUD workflows." },
      { title: "Role-Based Security", subtitle: "Supabase & Postgres RBAC", description: "Integrated strict user permissions and encrypted token authentication." },
      { title: "Schema Optimization", subtitle: "Database Query Tuning", description: "Optimized database structures via indexing, driving faster API responses." }
    ],
    highlights: [
      "Collaborated with designers to deliver beautiful, responsive Next.js pages.",
      "Ensured backend stability for multi-role workflows and high concurrency.",
      "Participated in 15+ complex peer code reviews in an agile setup."
    ]
  },
  {
    id: 2,
    company: "Swabhiman Foundation",
    role: "Full Stack Web Developer Intern",
    duration: "Jun 2025 – Aug 2025",
    location: "Remote",
    techStack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "Postman"],
    impactMetrics: [
      { title: "Led 4 Developers", subtitle: "Platform Leadership", description: "Orchestrated sprints and task management to launch a rural employment site." },
      { title: "REST Backend Routing", subtitle: "Express.js & MongoDB", description: "Developed routing networks and endpoint schemas to improve service stability." },
      { title: "Email Automation", subtitle: "User Engagement Engine", description: "Programmed cron-triggered email status alerts to connect job seekers." }
    ],
    highlights: [
      "Directed team workflows using Git and Scrum methodologies.",
      "Conducted 10+ code reviews, mentoring junior engineers on clean structures."
    ]
  }
]

export function HorizontalTimeline() {
  const [activeExp, setActiveExp] = useState<number>(3) // Pipeline AI selected by default

  const current = experiences.find(e => e.id === activeExp) || experiences[0]

  return (
    <div className="space-y-8 w-full">
      {/* Enterprise Tabs Navigation */}
      <div className="grid grid-cols-3 gap-2 border-b border-[#EAEAEA] pb-1">
        {experiences.map(exp => {
          const isActive = exp.id === activeExp
          return (
            <button
              key={exp.id}
              onClick={() => setActiveExp(exp.id)}
              className={`
                pb-4 text-left outline-none active:scale-[0.97] active:translate-y-[0.5px] transition-all duration-200 cursor-pointer
                ${isActive 
                  ? "border-b-2 border-[#111111] text-[#111111] font-semibold" 
                  : "border-b border-transparent text-[#787774] hover:text-[#2F3437] font-medium"
                }
              `}
            >
              <div className={`text-sm uppercase tracking-wider font-bold ${isActive ? "text-[#111111]" : "text-[#787774]"}`}>{exp.company}</div>
              <div className="text-xs text-[#787774] mt-1">{exp.duration}</div>
            </button>
          )
        })}
      </div>

      {/* Main Experience Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeExp}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Metadata & Highlights Block */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#111111] tracking-tight">{current.company}</h3>
              <p className="text-sm font-semibold text-[#2F3437] mt-1">{current.role}</p>
              <p className="text-xs text-[#787774] mt-1 font-medium">{current.location} · Remote Operations</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">Key Focus Areas</h4>
              <ul className="space-y-3 text-sm text-[#2F3437] leading-relaxed list-none">
                {current.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-600 font-bold mt-0.5">▪</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">Engineered Stack</h4>
              <div className="flex flex-wrap gap-2">
                {current.techStack.map(stack => (
                  <span key={stack} className="px-2.5 py-1 rounded text-xs font-mono border border-[#EAEAEA] bg-white text-[#2F3437]">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {current.impactMetrics.map((metric, idx) => (
              <div 
                key={idx}
                className="glow-card rounded-xl p-5 border border-[#EAEAEA] bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#F7F6F3] border border-[#EAEAEA] flex items-center justify-center mb-4">
                    <FiActivity className="text-[#787774] text-sm" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111] tracking-tight">{metric.title}</h4>
                  <p className="text-xs font-mono text-[#787774] mt-1">{metric.subtitle}</p>
                </div>
                <p className="text-sm text-[#2F3437] mt-4 leading-relaxed font-light">{metric.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ----------------------------------------------------
// 3. ENGINEERING EXPERTISE (Capability Matrix)
// ----------------------------------------------------
export function CapabilityMatrix() {
  const blocks = [
    {
      title: "Frontend Architecture",
      icon: <FiLayout className="text-indigo-600 text-base" />,
      items: [
        { name: "Next.js 15/16", desc: "Server Actions, App Router, SSR/ISR paradigms" },
        { name: "React 19 Core", desc: "Concurrent rendering, hooks lifecycle, portals" },
        { name: "TypeScript", desc: "Strict type mapping, utility interfaces, safe contracts" },
        { name: "Component Systems", desc: "Design-system implementations, atomic structures" }
      ]
    },
    {
      title: "Data Layer Integrations",
      icon: <FiLayers className="text-emerald-600 text-base" />,
      items: [
        { name: "RESTful Gateways", desc: "Sleek FastAPI & Express endpoints routing" },
        { name: "TanStack Query", desc: "Centralized server states caching, prefetching" },
        { name: "Fast APIs", desc: "Type-safe query models, schema structure" },
        { name: "Redis Caching", desc: " DOM caching, endpoint buffering (85% query speedup)" }
      ]
    },
    {
      title: "Performance & Optimization",
      icon: <FiCpu className="text-amber-600 text-base" />,
      items: [
        { name: "Memoization", desc: "UseMemo, UseCallback controls, layout isolation" },
        { name: "State Curation", desc: "Zustand, Redux, clean micro-state models" },
        { name: "Dynamic Loading", desc: "Suspense, lazy components, debounced triggers" },
        { name: "Telemetry Metrics", desc: "Core Web Vitals tuning, payload minification" }
      ]
    },
    {
      title: "Full Stack & Core Systems",
      icon: <FiDatabase className="text-blue-600 text-base" />,
      items: [
        { name: "Express & FastAPI", desc: "Python, JS microservices routing, middleware logic" },
        { name: "Supabase & Auth", desc: "JWT integration, security triggers, schema mapping" },
        { name: "PostgreSQL Engine", desc: "Advanced indexing, JSONB data pools, foreign keys" },
        { name: "MongoDB Curation", desc: "Dynamic document schemas, search index aggregation" }
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {blocks.map((block, i) => (
        <div 
          key={i} 
          className="glow-card rounded-2xl border border-[#EAEAEA] bg-white p-6 flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-7 h-7 rounded-lg bg-[#F7F6F3] border border-[#EAEAEA] flex items-center justify-center">
                {block.icon}
              </div>
              <h3 className="text-base font-bold uppercase tracking-wider text-[#111111]">{block.title}</h3>
            </div>

            <div className="space-y-4">
              {block.items.map((item, idx) => (
                <div key={idx} className="border-l border-[#EAEAEA] pl-4 hover:border-neutral-400 transition-colors">
                  <h4 className="text-sm font-bold text-[#111111]">{item.name}</h4>
                  <p className="text-sm text-[#2F3437] mt-1 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="text-xs font-mono text-[#787774] mt-6 border-t border-[#EAEAEA] pt-3.5 text-right">
            SECURE // HIGH_PERFORMANCE
          </div> */}
        </div>
      ))}
    </div>
  )
}

// ----------------------------------------------------
// 4. FEATURED PROJECT (Shopify Lead Intelligence Platform)
// ----------------------------------------------------
export function FeaturedShopifyCaseStudy() {
  const [leadFilter, setLeadFilter] = useState<string>("all")
  
  const mockLeads = [
    { name: "EcoLiving Essentials", niche: "Organic Decor", location: "Canada", rating: 96, klaviyo: "MISSING", reviews: "MISSING", social: "ABSENT", status: "HIGH_POTENTIAL" },
    { name: "Aura Apparel", niche: "Minimalist Fashion", location: "USA", rating: 88, klaviyo: "DETECTED", reviews: "MISSING", social: "WEAK", status: "HIGH_POTENTIAL" },
    { name: "Vibe Tech Accessories", niche: "Gadgets", location: "UK", rating: 74, klaviyo: "MISSING", reviews: "DETECTED", social: "WEAK", status: "MEDIUM" },
    { name: "Luxe Glow Cosmetics", niche: "Beauty", location: "France", rating: 92, klaviyo: "MISSING", reviews: "MISSING", social: "WEAK", status: "HIGH_POTENTIAL" },
    { name: "Sprout Fitness", niche: "Supplements", location: "Germany", rating: 62, klaviyo: "DETECTED", reviews: "DETECTED", social: "WEAK", status: "LOW_POTENTIAL" }
  ]

  const filteredLeads = mockLeads.filter(lead => {
    if (leadFilter === "missing_email") return lead.klaviyo === "MISSING"
    if (leadFilter === "high_potential") return lead.status === "HIGH_POTENTIAL"
    return true
  })
  const handleclick = () => {
    window.open("https://glaro.org", "_blank")
  }
  return (
    <div className="space-y-12 w-full">
      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Featured Production Architecture</span>
            <h3 className="text-3xl font-extrabold text-[#111111] tracking-tight mt-1 cursor-pointer w-fit" onClick={handleclick}>Glaro</h3> 
            <h4>Shopify Lead Intelligence Platform</h4>
            <p className="text-sm text-[#2F3437] mt-2 font-light">
              A highly scalable B2B intelligence hub that crawls public ecommerce sites, derives signals (e.g. absent email tracking, review deficits), and aggregates highly targeted leads.
            </p>
          </div>

          <div className="space-y-4 text-sm text-[#2F3437] leading-relaxed font-light">
            <div>
              <h4 className="text-xs font-mono uppercase text-[#111111] font-bold tracking-wider mb-1">The Challenge</h4>
              <p>
                Sales developers waste hundreds of hours filtering static directories. Active platforms need fresh, accurate storefront data signals mapped in real-time, requiring a resilient distributed caching and crawling architecture.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase text-[#111111] font-bold tracking-wider mb-1">The Solution</h4>
              <p>
                An automated extraction workflow that runs headless browsers to capture store footprints, passes them through a rule-based signal matrix, and serves structured leads via a fast Next.js catalog interface.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-[#EAEAEA] pt-6">
            <div>
              <div className="text-lg font-bold text-[#111111]">~85%</div>
              <div className="text-xs font-mono text-[#787774] uppercase mt-0.5">Filter Latency Reduction</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#111111]">4 tables</div>
              <div className="text-xs font-mono text-[#787774] uppercase mt-0.5">JSONB PostgreSQL Structure</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#111111]">Proxy Pool</div>
              <div className="text-xs font-mono text-[#787774] uppercase mt-0.5">Anti-Rate Limit Workflows</div>
            </div>
          </div>
        </div>

        {/* Vertical Pipeline Diagram */}
        <div className="lg:col-span-1 rounded-2xl border border-[#EAEAEA] bg-white p-6 flex flex-col justify-between grid-bg-dense shadow-[0_1px_3px_rgba(0,0,0,0.01),0_2px_8px_rgba(0,0,0,0.015)]">
          <div className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold border-b border-[#EAEAEA] pb-2.5 mb-4">Pipeline Flow</div>
          
          <div className="relative flex-1 flex flex-col justify-between items-center gap-4 py-2">
            {/* Step 1 */}
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 rounded-lg bg-[#F7F6F3] border border-[#EAEAEA] flex items-center justify-center font-bold text-xs text-[#2F3437]">1</div>
              <div>
                <h5 className="text-[12px] font-bold text-[#111111]">Playwright</h5>
                <p className="text-xs text-[#787774] font-mono">Headless crawler cluster</p>
              </div>
            </div>
            
            <div className="h-4 border-l border-dashed border-[#EAEAEA]"></div>

            {/* Step 2 */}
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 rounded-lg bg-[#F7F6F3] border border-[#EAEAEA] flex items-center justify-center font-bold text-xs text-[#2F3437]">2</div>
              <div>
                <h5 className="text-[12px] font-bold text-[#111111]">Extraction Layer</h5>
                <p className="text-xs text-[#787774] font-mono">Celery data normalize</p>
              </div>
            </div>

            <div className="h-4 border-l border-dashed border-[#EAEAEA]"></div>

            {/* Step 3 */}
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 rounded-lg bg-[#F7F6F3] border border-[#EAEAEA] flex items-center justify-center font-bold text-xs text-[#2F3437]">3</div>
              <div>
                <h5 className="text-[12px] font-bold text-[#111111]">FastAPI Server</h5>
                <p className="text-xs text-[#787774] font-mono">Telemetry API gateway</p>
              </div>
            </div>

            <div className="h-4 border-l border-dashed border-[#EAEAEA]"></div>

            {/* Step 4 */}
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 rounded-lg bg-[#F7F6F3] border border-[#EAEAEA] flex items-center justify-center font-bold text-xs text-[#2F3437]">4</div>
              <div>
                <h5 className="text-[12px] font-bold text-[#111111]">Supabase / Postgres</h5>
                <p className="text-xs text-[#787774] font-mono">Relational leads registry</p>
              </div>
            </div>

            <div className="h-4 border-l border-dashed border-[#EAEAEA]"></div>

            {/* Step 5 */}
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 rounded-lg bg-[#E1F3FE] border border-[#b3dbf2] flex items-center justify-center font-bold text-xs text-[#1F6C9F] shadow-[0_2px_8px_rgba(31,108,159,0.08)]">5</div>
              <div>
                <h5 className="text-[12px] font-bold text-[#1F6C9F]">Next.js Client</h5>
                <p className="text-xs text-[#1F6C9F]/80 font-mono">Client segment interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Interactive Lead Dashboard Mockup */}
      <div className="rounded-2xl border border-[#EAEAEA] bg-white p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAEAEA] pb-4">
          <div>
            <h4 className="text-sm font-bold text-[#111111] flex items-center gap-2">
              <FiSliders className="text-indigo-600" />
              <span>Interactive Segment Console</span>
            </h4>
            <p className="text-xs text-[#787774] mt-1 font-light">Filter leads dynamically using derived storefront technology flags.</p>
          </div>

          <div className="flex items-center gap-2 bg-[#F7F6F3] p-1.5 rounded-lg border border-[#EAEAEA]">
            <button
              onClick={() => setLeadFilter("all")}
              className={`px-3 py-1 rounded text-xs font-medium active:scale-95 active:translate-y-[0.5px] transition-all cursor-pointer ${leadFilter === "all" ? "bg-white text-[#111111] border border-[#EAEAEA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]" : "text-[#787774] hover:text-[#2F3437]"}`}
            >
              All
            </button>
            <button
              onClick={() => setLeadFilter("missing_email")}
              className={`px-3 py-1 rounded text-xs font-medium active:scale-95 active:translate-y-[0.5px] transition-all cursor-pointer ${leadFilter === "missing_email" ? "bg-white text-[#111111] border border-[#EAEAEA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]" : "text-[#787774] hover:text-[#2F3437]"}`}
            >
              Email Absent
            </button>
            <button
              onClick={() => setLeadFilter("high_potential")}
              className={`px-3 py-1 rounded text-xs font-medium active:scale-95 active:translate-y-[0.5px] transition-all cursor-pointer ${leadFilter === "high_potential" ? "bg-white text-[#111111] border border-[#EAEAEA] shadow-[0_1px_2px_rgba(0,0,0,0.03)]" : "text-[#787774] hover:text-[#2F3437]"}`}
            >
              High Potential
            </button>
          </div>
        </div>

        {/* Lead Table / Interface Mockup */}
        <div className="overflow-x-auto rounded-lg border border-[#EAEAEA] bg-white">
          <table className="w-full text-left border-collapse text-xs font-mono text-[#2F3437]">
            <thead>
              <tr className="border-b border-[#EAEAEA] bg-[#F7F6F3]/55 text-[11px] font-mono uppercase tracking-wider text-[#787774] font-bold">
                <th className="py-3.5 px-4">Store Domain</th>
                <th className="py-3.5 px-4">Niche Category</th>
                <th className="py-3.5 px-4">Rating</th>
                <th className="py-3.5 px-4">Klaviyo Pixel</th>
                <th className="py-3.5 px-4">Review Widget</th>
                <th className="py-3.5 px-4">Social Presence</th>
                <th className="py-3.5 px-4 text-right">Potential</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filteredLeads.map((lead) => (
                  <motion.tr
                    key={lead.name}
                    layout
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="border-b border-[#EAEAEA] hover:bg-[#F7F6F3]/40 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-bold text-[#111111]">{lead.name}</td>
                    <td className="py-3.5 px-4 text-[#787774]">{lead.niche}</td>
                    <td className="py-3.5 px-4">
                      <span className="text-[#111111] font-bold">{lead.rating}</span>
                      <span className="text-[#787774]">/100</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${lead.klaviyo === "MISSING" ? "bg-[#FDEBEC] text-[#9F2F2D]" : "bg-[#EDF3EC] text-[#346538]"}`}>
                        {lead.klaviyo}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${lead.reviews === "MISSING" ? "bg-[#FDEBEC] text-[#9F2F2D]" : "bg-[#EDF3EC] text-[#346538]"}`}>
                        {lead.reviews}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${lead.social === "ABSENT" ? "bg-[#FDEBEC] text-[#9F2F2D]" : "bg-[#FBF3DB] text-[#956400]"}`}>
                        {lead.social}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${lead.status === "HIGH_POTENTIAL" ? "bg-[#E1F3FE] text-[#1F6C9F]" : "bg-[#F1F1EF] text-[#5A5A57]"}`}>
                        {lead.status.replace("_", " ")}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ----------------------------------------------------
// 5. SYSTEMS I BUILD
// ----------------------------------------------------
export function SystemsIBuild() {
  const cards = [
    {
      title: "Dashboard Systems",
      subtitle: "Metrics · Analytics · Management",
      desc: "Architecting dense operational portals complete with relational filtering, telemetry, active queues, and loading states.",
      metric: "LATENCY < 45ms"
    },
    {
      title: "API Platforms",
      subtitle: "REST · GraphQL · Dynamic Caching",
      desc: "Deploying high-speed routing engines with strict contract validations, caching states, and structured payload optimization.",
      metric: "90% REPEAT EFFICIENCY"
    },
    {
      title: "SaaS Products",
      subtitle: "Authentication · Payments · Subscriptions",
      desc: "Integrating role-based routing (RBAC), multi-tier token verifications, Stripe transaction layers, and robust webhooks.",
      metric: "JWT / RBAC ENABLED"
    },
    {
      title: "Automation Engines",
      subtitle: "Playwright · Data Pipelines · Headless",
      desc: "Developing scraping routines that parse storefront metadata safely, bypassing ant-bot limits using rotating proxy networks.",
      metric: "CELERY DISTRIBUTED"
    },
    {
      title: "Content Architectures",
      subtitle: "CMS · Dynamic Rendering · Config UI",
      desc: "Constructing modular component-first layouts rendered dynamically by server metadata schemas for maximum codebase agility.",
      metric: "CONFIG-DRIVEN RENDER"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cards.map((card, idx) => (
        <div 
          key={idx}
          className="glow-card rounded-2xl border border-[#EAEAEA] bg-white p-6 flex flex-col justify-between"
        >
          <div>
            <div className="text-[10px] font-mono text-[#787774] font-bold uppercase tracking-wider">{card.metric}</div>
            <h4 className="text-base font-bold text-[#111111] mt-3 tracking-tight">{card.title}</h4>
            <p className="text-xs font-mono text-[#787774] mt-1">{card.subtitle}</p>
            <p className="text-sm text-[#2F3437] mt-4 leading-relaxed font-light">{card.desc}</p>
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#EAEAEA]">
            <span className="text-xs font-mono text-[#787774]">PRODUCTION READY</span>
            <FiCheckCircle className="text-emerald-600 text-sm" />
          </div>
        </div>
      ))}
    </div>
  )
}

// ----------------------------------------------------
// 6. TECHNOLOGY ECOSYSTEM (Interactive network graph)
// ----------------------------------------------------
export function TechnologyEcosystemGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const techDetails: Record<string, string> = {
    "Next.js": "Primary framework. Applied at Pipeline AI for dashboard features, and built the Shopify Lead storefront.",
    "React": "Core frontend engine. Standardized modular layouts and custom hook hooks lifecycles.",
    "TypeScript": "Type-safety foundation. Enforced safe API data structures across all commercial systems.",
    "Redux": "Global state control. Used to coordinate multi-layer user preferences and dashboard parameters.",
    "TanStack Query": "Advanced server cache management. Standardized paginated queries and loader controls at Pipeline AI.",
    "Tailwind": "Grid styling system. Constructed beautiful Vercel-like high-contrast layouts.",
    "FastAPI": "High-performance Python backend server. Structured background scraping tasks and database APIs.",
    "Express": "JavaScript routing server. Programmed job-seeking networks and payment hooks.",
    "MongoDB": "NoSQL document hub. Configured dynamic profiles and unstructured ERP indices.",
    "PostgreSQL": "Relational data core. Built optimized tables with JSONB flags and security indices.",
    "Supabase": "Serverless identity & database backend. Deployed encrypted sessions and role authentication."
  }

  // Node coordinates inside a 300x300 viewport (center is Next.js at 150, 150)
  const nodes = [
    { name: "Next.js", x: 150, y: 150, isCenter: true, icon: <SiNextdotjs className="text-[#111111] text-base" /> },
    { name: "React", x: 60, y: 70, icon: <SiReact className="text-[#0ea5e9] text-xs" /> },
    { name: "TypeScript", x: 240, y: 70, icon: <SiTypescript className="text-[#2563eb] text-xs" /> },
    { name: "Redux", x: 45, y: 150, icon: <SiRedux className="text-[#764abc] text-xs" /> },
    { name: "TanStack Query", x: 90, y: 225, icon: <FiLayers className="text-[#ff4154] text-xs" /> },
    { name: "Tailwind", x: 210, y: 225, icon: <SiTailwindcss className="text-[#06b6d4] text-xs" /> },
    { name: "FastAPI", x: 255, y: 150, icon: <SiFastapi className="text-[#10b981] text-xs" /> },
    { name: "Express", x: 150, y: 40, icon: <SiExpress className="text-[#111111] text-xs" /> },
    { name: "MongoDB", x: 150, y: 260, icon: <SiMongodb className="text-[#47a248] text-xs" /> },
    { name: "PostgreSQL", x: 100, y: 100, icon: <SiPostgresql className="text-[#336791] text-xs" /> },
    { name: "Supabase", x: 200, y: 100, icon: <SiSupabase className="text-[#3ecf8e] text-xs" /> }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center">
      {/* Narrative Panel */}
      <div className="lg:col-span-1 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Interactive Engineering Graph</span>
          <h3 className="text-2xl font-bold text-[#111111] tracking-tight mt-1">Technology Ecosystem</h3>
          <p className="text-sm text-[#2F3437] mt-2 leading-relaxed font-light">
            Hover over any connected node to trace where and how each technology has been applied across different production-grade projects and internships.
          </p>
        </div>

        <div className="min-h-[110px] rounded-xl border border-[#EAEAEA] bg-white p-4 relative overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.01),0_2px_8px_rgba(0,0,0,0.015)]">
          <AnimatePresence mode="wait">
            {hoveredNode ? (
              <motion.div
                key={hoveredNode}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ type: "spring", stiffness: 450, damping: 26 }}
                className="space-y-1.5"
              >
                <div className="text-xs font-mono uppercase text-indigo-600 font-bold">{hoveredNode} Application</div>
                <p className="text-sm text-[#2F3437] leading-relaxed font-light">{techDetails[hoveredNode]}</p>
              </motion.div>
            ) : (
              <div className="text-[#787774] text-sm italic flex items-center justify-center h-full font-light">
                Hover over a node to read engineering application context.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* SVG Canvas network graph */}
      <div className="lg:col-span-2 flex justify-center bg-[#F7F6F3]/30 rounded-2xl border border-[#EAEAEA] p-4 md:p-6 overflow-hidden">
        <svg viewBox="0 0 300 300" className="w-full max-w-[360px] h-auto">
          {/* Connection Lines */}
          {nodes.map((node) => {
            if (node.isCenter) return null
            const isHighlighted = hoveredNode === node.name || hoveredNode === "Next.js"
            return (
              <line
                key={node.name}
                x1={150}
                y1={150}
                x2={node.x}
                y2={node.y}
                stroke={isHighlighted ? "#2563eb" : "rgba(0, 0, 0, 0.06)"}
                strokeWidth={isHighlighted ? 1.5 : 1}
                strokeDasharray={node.name === "FastAPI" || node.name === "MongoDB" ? "3,3" : undefined}
                className="transition-all duration-300"
              />
            )
          })}

          {/* Node Circles */}
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.name
            const isCenter = node.isCenter

            return (
              <g
                key={node.name}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.name)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Glow Overlay */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isCenter ? 24 : 14}
                  fill={isCenter ? "rgba(0, 0, 0, 0.02)" : "rgba(0, 0, 0, 0.01)"}
                  stroke={isHovered ? "#2563eb" : isCenter ? "rgba(0, 0, 0, 0.15)" : "rgba(0, 0, 0, 0.06)"}
                  strokeWidth={isHovered ? 1.5 : 1}
                  className="transition-all duration-300"
                />

                {/* Micro Icon Representation inside SVG */}
                <foreignObject
                  x={node.x - 8}
                  y={node.y - 8}
                  width={16}
                  height={16}
                  className="pointer-events-none"
                >
                  <div className="w-full h-full flex items-center justify-center opacity-90">
                    {node.icon}
                  </div>
                </foreignObject>

                {/* SVG Node Text Labels - Crisp sizing (9px & 12px) */}
                <text
                  x={node.x}
                  y={node.y + (isCenter ? 36 : 24)}
                  textAnchor="middle"
                  fill={isHovered ? "#111111" : "#787774"}
                  fontSize={isCenter ? 12 : 9}
                  fontFamily="monospace"
                  fontWeight={isCenter ? "bold" : "normal"}
                  className="transition-all duration-300 select-none"
                >
                  {node.name}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

// ----------------------------------------------------
// 7. ENGINEERING PRINCIPLES
// ----------------------------------------------------
export function EngineeringPrinciples() {
  const principles = [
    {
      title: "Scalability",
      subtitle: "Designing systems that grow.",
      desc: "Writing modular routing architectures, utilizing multi-tier key-value caching (Redis), and establishing strict REST interfaces to support heavy user query scaling."
    },
    {
      title: "Reusability",
      subtitle: "Component-first engineering.",
      desc: "Standardizing dynamic metadata component models (config-driven rendering) and centralizing repetitive backend operations into standardized custom hooks layers."
    },
    {
      title: "Performance",
      subtitle: "Speed and optimized rendering.",
      desc: "Executing memoization boundaries, preventing redundant rendering, tracking Core Web Vitals, and using server caching to shrink dashboard latency below ~45ms."
    },
    {
      title: "Maintainability",
      subtitle: "Feature-driven code schemas.",
      desc: "Drafting highly structured, strongly typed TypeScript files. Organizing folders by logical systems and maintaining detailed static API document schemas (like Zod maps)."
    },
    {
      title: "User Experience",
      subtitle: "Engineering with product thinking.",
      desc: "Building intuitive dashboards, real-time segment tables, loading indicators, and securing platform actions to connect technical code to commercial B2B success."
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {principles.map((pr, idx) => (
        <div 
          key={idx}
          className="glow-card rounded-2xl border border-[#EAEAEA] bg-white p-6 flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
        >
          <div>
            <div className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider">PRINCIPLE 0{idx + 1}</div>
            <h4 className="text-base font-bold text-[#111111] mt-3 tracking-tight">{pr.title}</h4>
            <p className="text-xs font-mono text-[#787774] mt-1 font-medium">{pr.subtitle}</p>
            <p className="text-sm text-[#2F3437] mt-4 leading-relaxed font-light">{pr.desc}</p>
          </div>
          <div className="text-xs font-mono text-[#787774] mt-6 border-t border-[#EAEAEA] pt-3 text-right">
            0{idx + 1} 
          </div>
        </div>
      ))}
    </div>
  )
}
