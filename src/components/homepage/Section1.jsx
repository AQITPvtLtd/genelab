"use client";

import React, { useState } from "react";
import Image from "next/image";
import "animate.css";
import ScrollTrigger from "react-scroll-trigger";
const Section1 = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className=" overflow-x-clip lg:mt-0 mt-[900px]">
      <ScrollTrigger
        onEnter={() => setAnimate(true)}
        onExit={() => setAnimate(false)}
      >
        <div className="relative">
          <Image
            src="/section1.png"
            width={10000}
            height={1000}
            className="lg:h-full w-full object-cover h-[400px]"
            alt="section1"
          />

          <div className={`absolute inset-0 lg:grid grid-cols-12 grid-rows-8 `}>
            <h1
              className={`flex justify-center col-start-4 row-start-3 col-span-4 bg-gradient-to-r from-blue to-darkgreen lg:inline-block text-transparent bg-clip-text text-5xl lg:text-7xl font-bold ${
                animate && "animate__animated animate__slideInLeft"
              }`}
            >
              UNLOCKING
            </h1>
            <h1
              className={`flex justify-center text-5xl lg:text-7xl col-span-4 col-start-5 row-start-4 font-bold bg-gradient-to-r from-blue lg:inline-block to-darkgreen text-transparent bg-clip-text ${
                animate && "animate__animated animate__slideInRight"
              }`}
            >
              GENETIC
            </h1>
            <h1
              className={`flex justify-center row-start-4 col-span-4 lg:ml-4 col-start-8 text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue lg:inline-block to-darkgreen text-transparent bg-clip-text ${
                animate && "animate__animated animate__slideInRight"
              }`}
            >
              POTENTIAL
            </h1>
            <h1
              className={`flex justify-center row-start-5 col-span-4 col-start-6 text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue lg:inline-block to-darkgreen text-transparent bg-clip-text ${
                animate && "animate__animated animate__slideInRight"
              }`}
            >
              TOGETHER
            </h1>
            <p
              className={`bg-white bg-opacity-50 font-bold flex justify-center lg:mx-0 mx-5 text-center lg:mt-0 mt-4 lg:font-semibold col-span-4 row-start-6 col-start-6 ${
                animate && "animate__animated animate__slideInUp"
              }`}
            >
              And you should be able to access, understand and benefit from the
              endlessly interesting and diverse things your genetics can tell
              you. How you choose to explore your DNA is up to you. With that
              welcome to this extra-ordinary journey”
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Section1;
