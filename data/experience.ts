
export interface Experience {
  id: number
  company: string
  role: string
  duration: string
  location: string
  description: string[]
  techStack: string[]
}

export const experiences: Experience[] = [
  {
    id: 3,
    company: "Pipeline AI",
    role: "Frontend Developer Intern",
    duration: "Jan 2026 – Jul 2026",
    location: "Remote",
    description: [
      "Developed scalable, production-ready frontend applications from Figma designs using Next.js, TypeScript, and Tailwind CSS, focusing on responsive, maintainable, and user-centric experiences.",
      "Built reusable frontend systems including config-driven rendering, modular feature-based architecture, and standardized API integration layers, enabling dynamic page generation and improved scalability.",
      "Implemented structured API integration workflows using TanStack Query, custom hooks, and service layers, leveraging caching strategies, centralized data handling, and optimized loading-state management.",
      "Improved application performance through React memoization techniques, debounced search interactions, efficient state management patterns, and scalable data-fetching workflows.",
      "Developed internal dashboard experiences for operational workflows, including metrics visualization, filtering systems, status monitoring, and content-management interfaces for business users.",
      "Implemented pagination and infinite-scroll experiences for large datasets, improving usability and frontend performance across data-intensive workflows.",
      "Collaborated across the full feature development lifecycle, including requirement analysis, technical planning, UX discussions, backend API coordination, prototyping, and production deployment within Agile sprint cycles."
    ],
    techStack: [
      "Next.js",
      "Redux",
      "TanStack Query",
      "TypeScript",
      "Tailwind CSS"
    ]
  },
  {
    id: 1,
    company: "DreamsCloud Tech",
    role: "Web Developer Intern",
    duration: "May 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Designed and developed a School ERP System used by faculty and administration to streamline daily operations.",
      "Built a Transport Management subsystem with complete CRUD APIs and a React-based UI to improve scheduling efficiency.",
      "Collaborated with designers to create a responsive AI Course Website using Next.js and Tailwind CSS.",
      "Integrated Supabase Authentication and PostgreSQL with role-based access control.",
      "Optimized API performance through indexing and efficient schema design.",
      "Participated in Agile sprints and contributed to 15+ peer code reviews."
    ],
    techStack: [
      "React.js",
      "Redux",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase"
    ]
  },
  {
    id: 2,
    company: "Swabhiman Foundation",
    role: "Full Stack Web Developer Intern",
    duration: "Jun 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Led a team of 4 developers to build “Aapna Network”, a platform connecting rural workers with job opportunities.",
      "Implemented RESTful APIs with Express.js and MongoDB, reducing backend response times.",
      "Designed and integrated frontend-backend service routing for improved system stability.",
      "Conducted 10+ structured code reviews and mentored junior developers.",
      "Built an automated email notification service to increase user engagement.",
      "Managed sprint planning and task coordination using Agile methodologies."
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Postman"
    ]
  }
]
