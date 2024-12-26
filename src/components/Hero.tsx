// import Image from 'next/image';
import React from 'react';
// import { BackgroundLines } from './ui/background-lines';
import { DirectionAwareHover } from './ui/direction-aware-hover';
// import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
// import { BackgroundBeams } from './ui/background-beams';
// import { motion } from "framer-motion";
import { AuroraBackground } from './ui/aurora-background';

function Hero() {
    const words = ` Hi, I'm Aniket, a college student excelling in React.js. I specialize in crafting web applications with a focus on seamless user experiences. While I've got a solid grasp on React.js, Next.js, Zod, Shadcn and designing web applications using Figma, I'm constantly learning and exploring new concepts to stay ahead in the ever-evolving tech landscape. With effective communication and collaboration skills, I'm ready to bring my passion for web development to your project on Upwork. Let's build something great together!`;

    return (
      <AuroraBackground>
        <div className='md:grid md:grid-cols-2'>

            <div className='flex m-auto justify-center align-middle p-3'>
            
                <span className={`md:pl-20`}>
                <TextGenerateEffect words={words} duration={0.001}/>
                </span>

            </div>

            <div className='hidden sm:flex m-auto justify-center align-middle p-3'>
                <DirectionAwareHover imageUrl={"/temp.jpeg"}>
                <p className="font-bold text-xl">Aniket</p>
                <p className="font-normal text-md">Bharane</p>
                </DirectionAwareHover>
            </div>
        </div> 
        </AuroraBackground>
    );
}

export default Hero;
