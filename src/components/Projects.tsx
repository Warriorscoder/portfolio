"use client"

import Image from 'next/image';
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

function Projects() {
    const content = [
        {
            title: "Walmart",
            description:
                "Walmart Hackathon: Developed an inventory management system using React.js, Tailwind CSS, GraphQL, Prisma, and JWT. ",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                    <Image
                        src="/walmart.png"
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
        {
            title: "To-Do List",
            description:
                "It is a simple application in which user can add task to be performed of different categories ",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                    <Image
                        src="/To-do.png"
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