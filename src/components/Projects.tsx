"use client"

import Image from 'next/image';
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

function Projects() {
    const content = [
         {
            title: "Scrapper",
            description:
                "It is a simple job search web application that scrapes job listings from multiple websites based on user-defined criteria.",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                    <Image
                        src="/scrapper.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Curalink",
            description:
                "It is a healthcare web application that allows users to book appointments with doctors, view their medical history, and research publication using Next.js, Tailwind CSS. ",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                    <Image
                        src="/curalink.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "MystryMessage",
            description:
                "An anonymous messaging platform enabling users to send and receive messages with additional features..",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/mystrymessage.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
       
    ];
    return (
        <div className='' id='projects'>
            <StickyScroll content={content} />
        </div>
    )
}

export default Projects