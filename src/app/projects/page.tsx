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
    // {
    //   title: "Walmart",
    //   value: "product",
    //   content: (
    //     <div className="w-full overflow-hidden relative rounded-2xl p-4 md:p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <Link
    //         href={"https://walmart-frontend-three.vercel.app/"}
    //         target="_blank"
    //       >
    //         <p className="font-semibold text-xl md:text-4xl animate-bounce">
    //           Walmart tab
    //         </p>{" "}
    //       </Link>
    //       <DummyContent
    //         content={
    //           "Walmart Hackathon: Developed an inventory management system using React.js, Tailwind CSS, GraphQL, Prisma, and JWT. Led frontend development, working closely with backend and data science teams for seamless integration. Implemented secure authentication with JWT and a global context for efficient session management. Designed and integrated GraphQL APIs with Prisma for data handling, ensuring error handling and smooth user experience. Collaborated with the data science team to integrate a machine learning model for predicting product pricing and forecasting stock needs, displaying actionable insights within the frontend."
    //         }
    //         image={"/walmart.png"}
    //       />
    //     </div>
    //   ),
    // },
    {
      title: "Scrapper",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-4 md:p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link
            href={
              "https://web-scrapper-dg7gz6vu4-warriors-projects-7af56d98.vercel.app/"
            }
            target="_blank"
          >
            {" "}
            <p className="font-semibold text-xl md:text-4xl animate-bounce ">
              Scrapper
            </p>{" "}
          </Link>
          <DummyContent
            content={
              'This project is an intelligent, job-specific web scraping platform that transforms simple, natural language job search queries into a structured, downloadable Excel file of relevant job openings. Instead of relying on fragile, site-specific rules, it uses a multi-stage AI pipeline to autonomously handle the entire workflow. First, an AI "Planner" analyzes a user\'s job search prompt (e.g., "Find remote SDE fresher jobs") to create a strategic search plan. A "Scout" then uses this plan to find relevant job boards and career pages from across the web. Next, a "Field Agent," powered by a Playwright headless browser, scrapes the full content of those pages. Finally, an AI "Analyst" reads this raw content and extracts key job details like company name, job title, and application link into a clean format, which is then presented in a table and can be downloaded as an Excel file. The entire application is built on a modern, scalable stack including Next.js, LangChain, and Upstash Redis for caching and rate-limiting'
            }
            image={"/scrapper.png"}
          />
        </div>
      ),
    },
    {
      title: "Curalink",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-4 md:p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link
            href={"https://curalink-five.vercel.app/"}
            target="_blank"
          >
            <p className="font-semibold text-xl md:text-4xl animate-bounce">
              Curalink
            </p>{" "}
          </Link>
          <DummyContent
            content={
              "It is a healthcare web application that allows users to book appointments with doctors, view their medical history, and research publication. Built with Next.js, Tailwind CSS. It is a UI representation of the application"
            }
            image={"/curalink.png"}
          />
        </div>
      ),
    },
    {
      title: "MystryMessage",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-4 md:p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link href={"https://mistrymessage-pi.vercel.app/"} target="_blank">
            {" "}
            <p className="font-semibold text-xl md:text-4xl animate-bounce">
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

const DummyContent = ({
  content,
  image,
}: {
  content: string;
  image: string;
}) => {
  return (
    <div>
      <div className="grid md:grid-row-2 relative m-0">
        <div className="flex justify-center align-middle mt-10 mx-5">
          <span
            className={`${ysabeauSC.className} text-sm md:text-xl lg:text-2xl`}
          >
            {content}
          </span>
        </div>

        <div className=" hidden sm:flex justify-center align-middle">
          <img src={image} alt="image" className="h-fit mt-12" />
        </div>
      </div>
    </div>
  );
};
