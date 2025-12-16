import HighlightCard from "./HighlightCard"
import { Project } from "@/data/projects"

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {projects.map(p => (
        <HighlightCard key={p.id} project={p} />
      ))}
    </div>
  )
}
