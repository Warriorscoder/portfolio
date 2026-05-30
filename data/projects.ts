export interface Project {
  id: number;
  title: string;
  description: string;
  videoPreview: string;
  videoFull?: string;
}

export interface ProjectDetails {
  id: number;
  title: string;
  date: string;
  link?: string;
  github?: string;
  techStack: string[];

  overview: string;
  workflow: string[];
  optimizations: string[];

  // Rich extensions
  problemStatement?: string;
  solution?: string;
  features?: { title: string; items: string[] }[];
  hldImage?: string;
  databaseDesign?: { table: string; fields: string[]; description?: string }[];
  challengesSolved?: string[];
  businessImpact?: string[];
  futureRoadmap?: { phase: string; items: string[] }[];
}

export const projectDetails: ProjectDetails[] = [
  {
    id: 1,
    title: "Scrapper: AI-Powered Job Search & Aggregation Agent",
    date: "Sep 2025",
    link: "https://web-scrapper-dg7gz6vu4-warriors-projects-7af56d98.vercel.app/",
    github: "https://github.com/Warriorscoder/web-scrapper",
    techStack: [
      "Next.js",
      "TypeScript",
      "LangChain",
      "Groq (Llama-3)",
      "Upstash Redis",
      "Puppeteer",
      "Zod",
      "Google Custom Search API",
      "Tailwind CSS"
    ],
    overview:
      "An intelligent web automation platform that transforms natural language user queries (e.g., \"Remote React jobs\") into structured, downloadable Excel datasets by autonomously navigating and analyzing the web.",
    workflow: [
      "AI Planner: An LLM analyzes user intent to generate strategic search queries and extraction schemas.",
      "Smart Discovery: Uses Google Custom Search API to locate high-relevance career pages and job boards.",
      "Serverless Scraping: Deploys a lightweight headless browser optimized for Vercel’s serverless environment.",
      "Intelligent Extraction: Sanitizes HTML, chunks content safely, and extracts structured fields into valid JSON.",
    ],
    optimizations: [
      "Hybrid Caching: Integrated Redis to cache DOM content, reducing latency by ~90% for repeated queries.",
      "Binary Optimization: Used Brotli-compressed Chromium (@sparticuz/chromium) to meet serverless size limits.",
      "Data Reliability: Implemented Zod validation and auto-healing parsing to guarantee strict typing.",
    ],
  },
  {
    id: 2,
    title: "AutoDoc: AI-Powered GitHub Documentation Generator",
    date: "Dec 2025",
    link: "https://autodoc-eo86mz019-warriors-projects-7af56d98.vercel.app/",
    github: "https://github.com/Warriorscoder/autodoc",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "LangChain",
      "Groq (Llama-3.1)",
      "Zod",
      "GitHub API (Octokit)",
      "Upstash Redis",
      "Tailwind CSS",
      "shadcn/ui"
    ],
    overview:
      "An AI-driven developer tool that automatically generates structured, validated documentation from a GitHub repository URL by analyzing the codebase, architecture, and API surface—without requiring write access to the repository.",
    workflow: [
      "Repository Ingestion: Fetches repository metadata, commit hash, and file structure using the GitHub API.",
      "Static Analysis Stage: Analyzes file paths and code roles to build a high-level semantic understanding of the project.",
      "AI Orchestration: Uses LangChain with a schema-driven prompt to generate structured documentation via Groq-hosted LLMs.",
      "Validation & Delivery: Validates output with Zod and returns frontend-ready JSON for rendering or README generation."
    ],
    optimizations: [
      "Schema-Enforced Generation: Zod-backed structured parsing eliminates hallucinations and guarantees deterministic output.",
      "Cache-Aware Design: Optional Redis caching keyed by commit hash avoids redundant analysis and AI calls.",
      "Permission-Free UX: Designed a trust-first workflow by avoiding GitHub write scopes and automated commits."
    ],
  },
  {
    id: 3,
    title: "AI-Assisted Shopify Lead Intelligence Platform",
    date: "Mar 2026",
    techStack: [
      "Next.js",
      "FastAPI",
      "TypeScript",
      "Python",
      "Playwright",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Tailwind CSS",
      "Supabase"
    ],
    overview:
      "Designed and developed a highly scalable lead intelligence platform that discovers, analyzes, and categorizes Shopify stores using publicly available ecommerce data. By extracting storefront metadata and running it through a rule-based intelligence engine, the system generates deep business signals (e.g. missing marketing tools, weak social presence) to provide agencies and startups with high-potential B2B lead segments.",
    problemStatement:
      "Sales teams, agencies, and Shopify app developers waste massive hours manually searching, browsing, and researching e-commerce stores to find potential leads. Existing solutions either provide static, outdated databases, focus exclusively on generic contact lists, or charge exorbitant prices that are out of reach for smaller agencies and startups.",
    solution:
      "A complete pipeline that automated Shopify store discovery, extracts rich storefront metadata, derives actionable business signals via an intelligent engine, organizes stores into highly targeted segments, and enables seamless lead search, preview, and CSV purchases.",
    workflow: [
      "Automated Store Discovery: Leverages custom scraping workflows and Playwright browsers to dynamically discover active Shopify domains.",
      "Metadata Extraction: Gathers crucial public storefront information including product catalogs, themes, social media handles, and installed technologies.",
      "Signal Generation: Runs rule-based evaluations to flag strategic issues like missing email marketing, poor trust signals, or lacking review widgets.",
      "Enrichment & Storage: Normalizes and writes high-value parsed leads to PostgreSQL databases for instant searchability."
    ],
    optimizations: [
      "Distributed Task Processing: Used Celery workers paired with Redis message queues to scale scraping and processing pipelines independently.",
      "Anti-Bot Workflows: Integrated browser proxy rotation and custom headless Playwright routines to avoid rate limits and capture dynamic scripts.",
      "Smart Signal Engine: Devised a deterministic, rule-based reasoning engine that maps technological gaps into structured opportunity flags.",
      "Faceted Query Caching: Layered Redis memory caching to speed up user searches and segmented filtering operations by ~85%."
    ],
    features: [
      {
        title: "Lead Discovery",
        items: [
          "Shopify storefront detection and domain indexing",
          "Comprehensive store metadata extraction (URLs, countries, product counts)",
          "Deep product catalog analysis",
          "Publicly available contact information scraping"
        ]
      },
      {
        title: "Signal Engine",
        items: [
          "Missing Email Marketing: Alerts if no Klaviyo/marketing tools are detected",
          "Low Trust Indicators: Flags stores lacking customer review systems",
          "Weak Social Presence: Identifies missing social profile networks",
          "Optimization Opportunities: Detects outdated themes and slow loading frameworks"
        ]
      },
      {
        title: "Lead Marketplace",
        items: [
          "Granular niche, country, and signal-based filtering",
          "Secure lead list preview portal",
          "On-demand CSV exports"
        ]
      },
      {
        title: "Authentication & Payments",
        items: [
          "Secure user sign-up and authentication",
          "Stripe payments integrated for custom list purchases",
          "Purchase validation and secure download keys"
        ]
      }
    ],
    hldImage: "/shopify-lead-generator-hld.png",
    databaseDesign: [
      {
        table: "users",
        fields: ["id (UUID)", "email (VARCHAR)", "created_at (TIMESTAMP)", "tier (VARCHAR)"],
        description: "Stores user accounts, subscription tiers, and overall platform access privileges."
      },
      {
        table: "stores",
        fields: ["id (INT)", "store_url (VARCHAR)", "store_name (VARCHAR)", "country (VARCHAR)", "product_count (INT)", "theme (VARCHAR)", "social_links (JSONB)", "scraped_at (TIMESTAMP)"],
        description: "Contains raw scraped store metadata and technical footprints extracted from storefronts."
      },
      {
        table: "leads",
        fields: ["id (INT)", "store_id (INT)", "signals (JSONB)", "classification (VARCHAR)", "is_high_potential (BOOLEAN)", "updated_at (TIMESTAMP)"],
        description: "Holds the derived business signals (e.g., Klaviyo missing, review system absent) mapped to specific stores."
      },
      {
        table: "purchases",
        fields: ["id (UUID)", "user_id (UUID)", "lead_segment_filters (JSONB)", "amount_paid (INT)", "download_token (VARCHAR)", "purchased_at (TIMESTAMP)"],
        description: "Tracks transactions, purchased lists, and lists available for download."
      }
    ],
    challengesSolved: [
      "Data Standardization: Deployed robust sanitization layers that normalize storefront fields collected from highly diverse layouts and themes.",
      "Lead Quality Control: Implemented signal filtering algorithms that reject low-value, inactive, or password-protected pages to deliver only premium leads.",
      "Scalability Design: Built a clear pathway for scheduled automated crawls, message queues, and future AI-driven scoring."
    ],
    businessImpact: [
      "Eliminates hours of manual market research for agencies and SaaS sales teams, transforming manual scraping into clicks.",
      "Provides highly qualified niche business opportunities rather than raw, noisy databases.",
      "Lays out a scalable SaaS architecture covering scraping, caching, secure backend retrieval, and premium payment flow."
    ],
    futureRoadmap: [
      {
        phase: "Phase 2: Automation & Freshness",
        items: [
          "Fully automated scraping pipelines with scheduled recurring intervals",
          "Incremental crawl updates and lead freshness score tracking",
          "Advanced rabbitmq/celery queue throttling and worker scaling"
        ]
      },
      {
        phase: "Phase 3: AI Intelligence",
        items: [
          "AI-powered lead capability scoring and high-conversion opportunity ranking",
          "Natural language semantic search for leads (e.g. 'Stores selling makeup in France lacking reviews')",
          "Store intelligence dashboards and automated pitch generator integration"
        ]
      }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Scrapper",
    description:
      "AI-Powered Job Scraper An automated tool that transforms simple natural language queries into a curated, downloadable spreadsheet of relevant job postings, eliminating the need for manual searching and data entry.",
    videoPreview:
      "https://res.cloudinary.com/dyg15ikh2/video/upload/q_auto:low,f_auto,so_0,eo_8,w_1280/small-scrapper-video_jtdfyh.mp4",
    videoFull:
      "https://res.cloudinary.com/dyg15ikh2/video/upload/q_auto,f_auto/small-scrapper-video_jtdfyh.mp4",
  },
  {
    id: 2,
    title: "AutoDoc",
    description:
      "AI-powered GitHub documentation generator that analyzes a repository’s structure, APIs, and architecture to produce clean, structured, and validated documentation automatically—removing the need for manual README writing.",
    videoPreview:
      "https://res.cloudinary.com/dyg15ikh2/video/upload/q_auto:low,f_auto,so_0,eo_8,w_1280/autodoc_x9qhrz.mp4",
    videoFull:
      "https://res.cloudinary.com/dyg15ikh2/video/upload/q_auto,f_auto/autodoc_x9qhrz.mp4",
  },
  {
    id: 3,
    title: "AI-Assisted Shopify Lead Intelligence Platform",
    description:
      "A smart scraping and signal generation platform that discovers Shopify stores, parses public metadata, and runs an intelligence engine to extract actionable leads (e.g. stores missing email marketing or reviews).",
    videoPreview: "/shopify-lead-generator-hld.png",
    videoFull: "/shopify-lead-generator-hld.png"
  }
];
