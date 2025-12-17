"use client"

import { useState } from "react"
import Link from "next/link"
import { LiaPrayingHandsSolid } from "react-icons/lia"
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi"

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-md border border-gray-300 bg-white"
        >
          <HiOutlineMenuAlt2 size={20} />
        </button>
      </div>

      {/* Backdrop (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-full w-64 bg-white border-r border-gray-200
          p-6
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile) */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-gray-500 hover:text-gray-900"
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Nav content */}
        <nav>
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-2xl font-semibold mb-6 flex gap-1">
              Namaste <LiaPrayingHandsSolid className="mt-1" />
            </h1>
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block mb-2 hover:underline"
          >
            About
          </Link>

          <Link
            href="/experience"
            onClick={() => setOpen(false)}
            className="block mb-2 hover:underline"
          >
            Experience
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mb-2 hover:underline"
          >
            Contact
          </Link>

          {/* Socials */}
          <div className="mt-10 text-sm text-gray-500">
            <p className="mb-4">aniketbharane2004@gmail.com</p>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Warriorscoder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-gray-900 hover:scale-110"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://x.com/bharane_aniket"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="transition hover:text-gray-900 hover:scale-110"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/aniket-bharane/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-gray-900 hover:scale-110"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
