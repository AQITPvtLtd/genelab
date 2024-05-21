"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import "animate.css";
import ScrollTrigger from "react-scroll-trigger";
import { PiDna } from "react-icons/pi";
import { FaBrain } from "react-icons/fa6";
import { FaBalanceScaleRight } from "react-icons/fa";

const HomeBanner = () => {
  const videoRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  return (
    <div className="overflow-x-clip lg:mt-0 mt-[200px]">
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className=" inset-0 w-full h-full object-cover z-10"
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className=" brightness-150 absolute inset-0 bg-gradient-to- from-blue to-carrot bg-opacity-90 opacity-30 z-20"></div> */}

        {/* <div className="absolute inset-0 bg-white bg-opacity-60 opacity-30 z-20"></div> */}

        <div className=" absolute inset-0 lg:mt-[240px] mt-[15px] lg:ml-0 ml-5">
          <ScrollTrigger
            onEnter={() => setAnimate(true)}
            onExit={() => setAnimate(false)}
          >
            <div
              className={`${
                animate && "animate__animated animate__slideInDown"
              }`}
            >
              <h1
                className={`font-bold lg:text-6xl text-2xl flex justify-center text-white text-center`}
              >
                YOUR PREMIER
                <br /> GENETIC TESTING LABORATORY
              </h1>
            </div>
            <div
              className={`${animate && "animate__animated animate__slideInUp"}`}
            >
              <h2 className="font-semibold lg:text-4xl text-md flex justify-center text-white text-center lg:mt-10">
                Personalized genetic testing <br /> transforming lives and
                healthcare globally
              </h2>
            </div>
            {/* <div className="lg:grid grid-cols-8 lg:mt-10 mt-14 lg:mr-0 mr-7">
              <div
                className={`col-span-2 ml-3 shadow-2xl bg-white p-7 bg-opacity-50 rounded-full lg:mb-0 mb-3 ${
                  animate && "animate__animated animate__slideInLeft"
                }`}
              >
                <div className="flex justify-center">
                  <PiDna className="text-white bg-blue rounded-full p-2 w-[100px] h-[100px]" />
                </div>
                <h2 className="text-blue font-bold p-2 pt-0 text-3xl flex justify-center">
                  TEST
                </h2>
                <p className=" text-center font-bold">
                  Measure fetal, tumor, or donor cfDNA at the molecular level
                  with a noninvasive test.
                </p>
              </div>
              <div
                className={`col-span-2 shadow-2xl col-start-4 bg-white p-5 bg-opacity-50 rounded-full lg:mb-0 mb-3 ${
                  animate && "animate__animated animate__slideInUp"
                }`}
              >
                <div className="flex justify-center">
                  <FaBrain className="text-white bg-blue rounded-full p-4 w-[100px] h-[100px]" />
                </div>
                <h2 className="text-blue font-bold p-2 pt-0 text-3xl flex justify-center">
                  KNOW
                </h2>
                <p className=" text-center font-bold">
                  Identify risk of disease, detect recurrence, and understand
                  treatment responses.
                </p>
              </div>
              <div
                className={`col-span-2 mr-3 shadow-2xl col-start-7 bg-white p-7 lr-3 bg-opacity-50 rounded-full lg:mb-0 mb-3 ${
                  animate && "animate__animated animate__slideInRight"
                }`}
              >
                <div className="flex justify-center">
                  <FaBalanceScaleRight className="text-white bg-blue rounded-full p-4 w-[100px] h-[100px]" />
                </div>
                <h2 className="text-blue font-bold p-2 pt-0 text-3xl flex justify-center">
                  DECIDE
                </h2>
                <p className=" text-center font-bold p-1">
                  Make more-informed health decisions for individualized care.
                </p>
              </div>
            </div> */}
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
