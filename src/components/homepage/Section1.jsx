"use client";

import React, { useState } from "react";
import Image from "next/image";
import "animate.css";
import ScrollTrigger from "react-scroll-trigger";
const Section1 = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className=" overflow-x-clip xl:mt-0 mt-[50px]">
      <ScrollTrigger
        onEnter={() => setAnimate(true)}
        onExit={() => setAnimate(false)}
      >
        <div className="relative">
          <Image
            src="/section1.png"
            width={10000}
            height={1000}
            className="xl:h-full w-full object-cover h-[500px]"
            alt="section1"
          />

          <div className={`absolute inset-0 xl:grid grid-cols-12 grid-rows-8 `}>
            <h1
              className={`flex justify-center col-start-4 row-start-3 col-span-5 bg-gradient-to-r from-blue to-darkgreen xl:inline-block text-transparent bg-clip-text text-4xl xl:text-7xl font-bold ${
                animate && "animate__animated animate__slideInLeft"
              }`}
            >
              WELCOME
            </h1>
            <h1
              className={`flex justify-center col-start-5 row-start-4 col-span-5 bg-gradient-to-r from-blue to-darkgreen xl:inline-block text-transparent bg-clip-text text-4xl xl:text-7xl font-bold ${
                animate && "animate__animated animate__slideInLeft"
              }`}
            >
              TO
            </h1>
            <h1
              className={`flex justify-center text-4xl xl:text-7xl col-span-4 col-start-6 ml-2 row-start-4 font-bold bg-gradient-to-r from-blue xl:inline-block to-darkgreen text-transparent bg-clip-text ${
                animate && "animate__animated animate__slideInLeft"
              }`}
            >
              GENELAB
            </h1>
            <h1
              className={`xl:mt-0 xl:ml-0 mt-3 ml-2 flex justify-center row-start-5 col-span-4 text-center col-start-6 text-2xl xl:text-3xl 2xl:text-4xl font-bold bg-gradient-to-r from-blue xl:inline-block to-darkgreen text-transparent bg-clip-text ${
                animate && "animate__animated animate__slideInRight"
              }`}
            >
              YOUR PREMIER GENETIC TESTING LABORATORY
            </h1>
            <p
              className={`bg-white bg-opacity-50 font-bold flex justify-center xl:mx-0 mx-5 xl:mt-4 mt-4 xl:font-semibold col-span-4 row-start-6 col-start-6 ${
                animate && "animate__animated animate__slideInUp"
              }`}
            >
              At GeneLab, we are dedicated to revolutionizing healthcare through
              cutting-edge genetic testing solutions. Our mission is to empower
              individuals, healthcare providers, and researchers with
              comprehensive insights into genetic predispositions, disease
              risks, and personalized treatment options.
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Section1;
