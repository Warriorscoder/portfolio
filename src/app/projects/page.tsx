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
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
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
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
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
      title: "Lost&Found",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link href={""}> <p className="font-semibold text-xl md:text-4xl animate-bounce">Lost&Found tab</p> </Link>
          <DummyContent
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. "
            }
            image={"/lost&found.png"}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-grid-white/[0.2] h-screen [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content */}
      <div className="relative h-[20rem] md:h-[40rem] flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 z-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const DummyContent = ({ content, image }: { content: string; image: string }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 relative">
        <div className="flex justify-center align-middle mt-10 mx-5">
          <span className={`${ysabeauSC.className}`}>{content}</span>
        </div>

        <div className=" hidden sm:flex justify-center align-middle">
          <img src={image} alt="image" className="h-fit mt-12" />
        </div>
      </div>
    </div>
  );
};
