export interface Project {
  id: number;
  title: string;
  description: string;
  videoPreview: string;
  videoFull?: string;
}
export interface ProjectDetails {
  id: number
  title: string
  date: string
  link?: string
  github?: string
  techStack: string[]

  overview: string
  workflow: string[]
  optimizations: string[]
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
]


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
];
