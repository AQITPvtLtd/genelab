"use client";

import React, { useState } from "react";
import Image from "next/image";
import "animate.css";
const page = () => {
  return (
    <div className="mt-[190px]">
      <div>
        <div className="flex justify-around">
          <Image
            src="/aboutus2.png"
            width={550}
            height={100}
            alt="about"
            className="h-[400px] w-[550px] animate__animated animate__slideInLeft"
          />
          <div className="mx-10">
            <div className="mb-10 font-bold text-5xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
              <h1>ABOUT GENELAB</h1>
            </div>
            <h1 className="font-semibold text-3xl text-blue animate__animated animate__slideInDown">
              Welcome to GeneLab: Your Premier Genetic Testing Laboratory
            </h1>
            <p className=" text-justify mt-2 animate__animated animate__slideInUp">
              At GeneLab, we are dedicated to revolutionizing healthcare through
              cutting-edge genetic testing solutions. Our mission is to empower
              individuals, healthcare providers, and researchers with
              comprehensive insights into genetic predispositions, disease
              risks, and personalized treatment options.
            </p>
            <div className="flex justify-center">
              <Image
                src="/aboutus.png"
                width={400}
                height={100}
                className="w-[400px]"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
