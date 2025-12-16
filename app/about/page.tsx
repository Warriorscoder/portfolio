"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <section className="container-wide mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-4xl md:text-6xl font-semibold mb-12
          bg-linear-to-r from-gray-500 via-gray-600 to-gray-900
          bg-clip-text text-transparent
        "
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            Hi, I’m <span className="font-medium text-gray-900">Aniket</span>. I
            am a Full Stack Developer who lives and breathes code. My journey
            started at IIIT Kota, and since then, I’ve realized that my natural
            habitat is my desk.
            <br />
            <br />
            Whether I am architecting a Next.js application or managing a
            database schema, I have the patience and focus to sit for hours and
            grind through problems until they are solved.
            <br />
            <br />
            Outside of development, my routine is simple but focused. I
            don&apos;t have a long list of hobbies; instead, I dedicate my free
            time to competitive gaming—particularly Valorant—which satisfies my
            need for competition and strategy.
            <br />
            <br />
            I’ve also recently discovered a love for reading, which is quickly
            becoming a new passion. I am an exceptionally quick learner when I
            am engaged with the subject matter—this trait has helped me pick up
            new tech stacks and lead teams effectively during my internships. I
            keep things balanced with light exercise, just enough to keep the
            energy up for my next project.
          </p>
        </motion.div>

        <div className="space-y-6">
          <InfoCard title="Location" value="Pune, Maharashtra" />

          <InfoCard
            title="Education"
            value="B.Tech CSE — IIIT Kota (2022–2026)"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <WobbleCard className=" bg-linear-to-r from-gray-100 via-gray-200 to-gray-300 py-2 px-5">
        <h3
          className="
          text-sm uppercase tracking-widest mb-2
          bg-linear-to-r from-gray-400 via-gray-500 to-gray-900
          bg-clip-text text-transparent
        "
        >
          {title}
        </h3>
        <p className="text-gray-800 font-medium">{value}</p>
      </WobbleCard>
    </motion.div>
  );
}
