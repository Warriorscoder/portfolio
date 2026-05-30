"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LiaPrayingHandsSolid } from "react-icons/lia"
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi"

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Overview", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2.5 rounded-lg border border-[#EAEAEA] bg-white/90 backdrop-blur-md text-[#2F3437] hover:bg-[#F7F6F3] hover:text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-colors cursor-pointer"
        >
          <HiOutlineMenuAlt2 size={18} />
        </button>
      </div>

      {/* Backdrop (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 z-45 bg-[#2F3437]/20 backdrop-blur-xs md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64 bg-[#F7F6F3] border-r border-[#EAEAEA]
          p-6 flex flex-col justify-between
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div>
          {/* Header & Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={() => setOpen(false)}>
              <div className="text-lg font-semibold text-[#111111] flex items-center gap-2 tracking-tight">
                <span>Namaste</span>
                <LiaPrayingHandsSolid className="text-amber-600 text-xl animate-pulse" />
              </div>
            </Link>

            {/* Close button (mobile) */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="md:hidden text-[#787774] hover:text-[#111111] p-1 rounded-md hover:bg-[#EAEAEA] transition-colors cursor-pointer"
            >
              <HiX size={18} />
            </button>
          </div>

          <div className="text-[11px] uppercase tracking-wider text-[#787774] font-bold mb-4 px-3">
            Navigation
          </div>

          {/* Nav links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#EAEAEA] text-[#111111] font-semibold"
                        : "text-[#787774] hover:text-[#111111] hover:bg-[#EAEAEA]/50"
                    }
                  `}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer info & Socials */}
        <div className="mt-10 pt-6 border-t border-[#EAEAEA] text-xs">
          <div className="mb-4 px-3">
            <div className="text-[#787774] font-medium mb-1">Get in Touch</div>
            <a 
              href="mailto:aniketbharane2004@gmail.com" 
              className="text-[#2F3437] hover:text-[#111111] font-medium transition-colors break-all"
            >
              aniketbharane2004@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 px-3 mt-2">
            <a
              href="https://github.com/Warriorscoder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#787774] hover:text-[#111111] transition-all hover:scale-105"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://x.com/bharane_aniket"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-[#787774] hover:text-[#111111] transition-all hover:scale-105"
            >
              <FaXTwitter size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/aniket-bharane/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#787774] hover:text-[#111111] transition-all hover:scale-105"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
