import Link from "next/link";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <nav>
      <Link href="/">
        <h1 className="text-2xl font-semibold mb-6 flex gap-1">
          Namaste <LiaPrayingHandsSolid className="mt-1" />
        </h1>
      </Link>

      <Link href="/about" className="block mb-2 hover:underline">
        About
      </Link>
      <Link href="/experience" className="block mb-2 hover:underline">
        Experience
      </Link>
      <Link href="/contact" className="block mb-2 hover:underline">
        Contact
      </Link>

      <div className="mt-10 text-sm text-gray-500">
        <p className="mb-4">aniketbharane2004@gmail.com</p>

        <div className="flex items-center gap-5">
          {/* GitHub */}
          <a
            href="https://github.com/Warriorscoder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
        transition
        text-gray-500
        hover:text-gray-900
        hover:scale-110
      "
          >
            <FaGithub size={18} />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/bharane_aniket"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="
        transition
        text-gray-500
        hover:text-gray-900
        hover:scale-110
      "
          >
            <FaXTwitter size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aniket-bharane/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
        transition
        text-gray-500
        hover:text-gray-900
        hover:scale-110
      "
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
