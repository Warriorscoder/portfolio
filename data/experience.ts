
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
