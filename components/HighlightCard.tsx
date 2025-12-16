"use client"

import { Project, projectDetails } from "@/data/projects"
import { useRef, useState } from "react"
import { CometCard } from "./ui/comet-card"
import ProjectDetailsDialog from "./ProjectDetailsDialog"

export default function HighlightCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [open, setOpen] = useState(false)

  // ✅ find matching project details by id
  const details =
    projectDetails.find((item) => item.id === project.id) ?? null

  const handleMouseEnter = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    video.muted = true
    video.play().catch(() => {})
  }

  const handleMouseLeave = () => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  return (
    <>
      <CometCard>
        <article
          className="card card-hover cursor-pointer hover:shadow-lg transition-shadow"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setOpen(true)}
        >
          <div className="relative h-80 overflow-hidden rounded media-grayscale">
            <video
              ref={videoRef}
              src={project.videoPreview}
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <h3 className="mt-4 font-semibold">{project.title}</h3>

          <p
            className="
              mt-2
              bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900
              bg-clip-text text-transparent
            "
          >
            {project.description}
          </p>
        </article>
      </CometCard>

      {/* ✅ pass single object, not array */}
      <ProjectDetailsDialog
        project={details}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
