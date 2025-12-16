'use client'

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-gray-900">Hello there!</p>
      <p
        className="text-md font-semibold mt-4 max-w-4xl  bg-linear-to-r 
        from-gray-500 
        via-gray-600 
        to-gray-900 
        bg-clip-text 
        text-transparent"
      >
        Hi, I am Aniket Anand Bharane, a final-year Computer Science student at
        IIIT Kota. I have practical experience as a Full Stack Developer, having
        worked remotely with DreamsCloud Tech and the Swabhiman Foundation. My
        technical expertise lies in the MERN stack, Next.js, and TypeScript,
        along with databases like PostgreSQL and MongoDB. During my internships,
        I successfully led a team of four to build a social platform for rural
        workers and developed a comprehensive School ERP system to streamline
        administrative operations. I am passionate about building scalable web
        solutions and thrive in Agile environments where I can leverage both my
        coding skills and leadership experience.
      </p>
    </motion.header>
  );
}
