/* eslint-disable @next/next/no-img-element */
"use client";

import { Tabs } from "@/components/ui/tabs";
import { Ysabeau_SC } from "next/font/google";

const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["100", "700"],
});

export default function Page() {
  const tabs = [
    {
      title: "Codeswear.com",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="font-semibold text-xl md:text-4xl">Codeswear.com tab</p>
          <DummyContent
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio ratione maxime debitis..."
            }
            image={"/codeswear.png"}
          />
        </div>
      ),
    },
    {
      title: "MystryMessage",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-xl font-Ysabeau text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="font-semibold text-xl md:text-4xl">
            MystryMessage tab
          </p>
          <DummyContent
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio ratione maxime debitis..."
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
          <p className="font-semibold text-xl md:text-4xl">Lost&Found tab</p>
          <DummyContent
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio ratione maxime debitis..."
            }
            image={"/codeswear.png"}
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
