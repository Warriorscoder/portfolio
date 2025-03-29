/* eslint-disable @next/next/no-img-element */
"use client";

import { Tabs } from "@/components/ui/tabs";
import { Ysabeau_SC } from "next/font/google";
import Link from "next/link";

const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["100", "700"],
});

export default function Page() {
  const tabs = [
    {
      title: "Walmart",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-4 md:p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link href={"https://walmart-frontend-three.vercel.app/"} target="_blank"><p className="font-semibold text-xl md:text-4xl animate-bounce">Walmart tab</p> </Link>
          <DummyContent
            content={
              "Walmart Hackathon: Developed an inventory management system using React.js, Tailwind CSS, GraphQL, Prisma, and JWT. Led frontend development, working closely with backend and data science teams for seamless integration. Implemented secure authentication with JWT and a global context for efficient session management. Designed and integrated GraphQL APIs with Prisma for data handling, ensuring error handling and smooth user experience. Collaborated with the data science team to integrate a machine learning model for predicting product pricing and forecasting stock needs, displaying actionable insights within the frontend."
            }
            image={"/walmart.png"}
          />
        </div>
      ),
    },
    {
      title: "MystryMessage",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-4 md:p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
         <Link href={"https://mistrymessage-pi.vercel.app/"} target="_blank"> <p className="font-semibold text-xl md:text-4xl animate-bounce">
            MystryMessage tab
          </p>
          </Link>
          <DummyContent
            content={
              "MystryMessage is an anonymous messaging platform that allows users to send and receive messages with customizable privacy settings. Built with Next.js, TypeScript, Tailwind CSS, MongoDB, JWT, and Gemini AI, it features secure JWT-based authentication with verification via Resend. Debouncing ensures efficient validation of usernames and emails during registration, while Zod handles data validation. Users can share unique URLs to receive anonymous messages and manage their messaging status. A clean interface organizes received messages, and Gemini AI enhances engagement by suggesting questions to simplify message creation."
            }
            image={"/mystrymessage.png"}
          />
        </div>
      ),
    },
    {
      title: "To-do",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-4 md:p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link href={"https://quadb-tech-silk.vercel.app/"}> <p className="font-semibold text-xl md:text-4xl animate-bounce ">To-do List</p> </Link>
          <DummyContent
            content={
              "This To-Do List project is a sleek and efficient task management application built with Next.js and TypeScript, ensuring high performance and type safety. It operates entirely on the client side, with no backend, leveraging Redux Toolkit for state management. To provide persistence across sessions, it utilizes Redux Persist, ensuring tasks remain saved even after page reloads. A standout feature of this application is the Ask AI functionality, powered by the Gemini API, which intelligently suggests 5-6 actionable steps to help users achieve their tasks more efficiently. This enhances productivity by breaking down goals into manageable steps. The application follows a clean and minimalistic UI, offering a seamless user experience while maintaining state consistency and persistence effortlessly."
            }
            image={"/To-do.png"}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-grid-white/[0.2] h-screen [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content Wrapper with Scrollable Area */}
      <div className="relative flex flex-col w-[80vw] max-w-full mx-auto items-start justify-start my-40 z-10">
        {/* Scrollable Tabs Container */}
        <div className="h-[80vh] overflow-y-auto w-[100%] scrollbar-hide">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}

const DummyContent = ({ content, image }: { content: string; image: string }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 relative m-0">
        <div className="flex justify-center align-middle mt-10 mx-5">
          <span className={`${ysabeauSC.className} text-sm md:text-xl lg:text-2xl`}>{content}</span>
        </div>

        <div className=" hidden sm:flex justify-center align-middle">
          <img src={image} alt="image" className="h-fit mt-12" />
        </div>
      </div>
    </div>
  );
};
