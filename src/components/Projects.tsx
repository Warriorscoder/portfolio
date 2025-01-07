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
            title: "Lost&Found",
            description:
                "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                    To be soon
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