"use client";

import Image from "next/image";
import React, { useState } from "react";
import "animate.css";
import ScrollTrigger from "react-scroll-trigger";
import { PiDna } from "react-icons/pi";
import { FaBrain } from "react-icons/fa6";
import { FaBalanceScaleRight } from "react-icons/fa";

const HomeBanner = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="overflow-x-clip">
      <div className="relative">
        <Image
          src="/banner.png"
          width={10000}
          height={1000}
          className="w-full"
          alt="home"
        />
        <div className="absolute inset-0 bg-white bg-opacity-60 opacity-30 z-20"></div>

        <h1 className=" absolute inset-0 mt-[200px]">
          <ScrollTrigger
            onEnter={() => setAnimate(true)}
            onExit={() => setAnimate(false)}
          >
            <div
              className={`${
                animate && "animate__animated animate__slideInDown"
              }`}
            >
              <h1 className={`font-bold text-5xl flex justify-center`}>
                Discover Your Genetic Blueprint
              </h1>
              <h2 className="font-bold text-3xl flex justify-center">
                Unlocking Insights for a Healthier Future
              </h2>
            </div>
            <div className="grid grid-cols-8 mt-10">
              <div
                className={`col-span-2 ml-3 shadow-2xl bg-white p-7 bg-opacity-50 rounded-full ${
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
                className={`col-span-2 shadow-2xl col-start-4 bg-white p-5 bg-opacity-50 rounded-full ${
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
                className={`col-span-2 mr-3 shadow-2xl col-start-7 bg-white p-7 lr-3 bg-opacity-50 rounded-full ${
                  animate && "animate__animated animate__slideInRight"
                }`}
              >
                <div className="flex justify-center">
                  <FaBalanceScaleRight className="text-white bg-blue rounded-full p-4 w-[100px] h-[100px]" />
                </div>
                <h2 className="text-blue font-bold p-2 pt-0 text-3xl flex justify-center">
                  DECIDE
                </h2>
                <p className=" text-center font-bold">
                  Make more-informed health decisions for individualized care.
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </h1>
      </div>
    </div>
  );
};

export default HomeBanner;
