"use client";

import React, { useState } from "react";
import Image from "next/image";
import "animate.css";
const page = () => {
  return (
    <div className="mt-[220px] lg:[190px]">
      <div>
        <div className="lg:flex justify-around">
          <Image
            src="/aboutus2.png"
            width={550}
            height={100}
            alt="about"
            className="lg:h-[400px] w-[550px] animate__animated animate__slideInLeft"
          />
          <div className="mx-10 lg:mt-0 mt-4">
            <div className="mb-10 font-bold text-4xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
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
      <div className="mt-20">
        <div className="lg:flex justify-around">
          <Image
            src="/who/who.png"
            width={550}
            height={100}
            alt="who"
            className="h-[300px] lg:w-[550px] animate__animated animate__slideInLeft mt-20"
          />
          <div className="mx-10">
            <div className="mb-10 font-bold text-4xl lg:text-5xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
              <h1>WHY CHOOSE US ?</h1>
            </div>
            <div className="lg:grid grid-cols-2 gap-3 lg:space-y-0 space-y-3">
              <div className="border-2 text-gray-700 p-3 rounded-xl">
                <div className="flex justify-center">
                  <Image src="/who/6.png" width={100} height={100} alt="who" />
                </div>
                <div className="">
                  <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                    Accuracy and Reliability
                  </h3>
                  <p className="p-2 font-bold">
                    Our state-of-the-art laboratory facilities and stringent
                    quality control measures ensure accurate and reliable
                    results.
                  </p>
                </div>
              </div>
              <div className="border-2 text-gray-700 p-3 rounded-xl">
                <div className="flex justify-center">
                  <Image src="/who/5.png" width={100} height={100} alt="who" />
                </div>
                <div className="">
                  <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                    Personalized Solutions
                  </h3>
                  <p className="p-2 font-bold">
                    We offer tailored genetic testing services to meet the
                    unique needs of each client, whether it&apos;s risk
                    assessment, treatment guidance, or research purposes.
                  </p>
                </div>
              </div>
              <div className="border-2 text-gray-700 p-3 rounded-xl">
                <div className="flex justify-center">
                  <Image src="/who/4.png" width={100} height={100} alt="who" />
                </div>
                <div className="">
                  <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                    Expertise and Support
                  </h3>
                  <p className="p-2 font-bold">
                    Our team of geneticists, laboratory technicians, and genetic
                    counselors provide expertise and support throughout the
                    testing process, from sample collection to result
                    interpretation.
                  </p>
                </div>
              </div>
              <div className="border-2 text-gray-700 p-3 rounded-xl">
                <div className="flex justify-center">
                  <Image src="/who/3.png" width={100} height={100} alt="who" />
                </div>
                <div className="">
                  <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                    Confidentiality and Security
                  </h3>
                  <p className="p-2 font-bold">
                    We prioritize the confidentiality and security of genetic
                    information, adhering to strict data protection protocols to
                    ensure client privacy.
                  </p>
                </div>
              </div>
              <div className="border-2 text-gray-700 p-3 rounded-xl">
                <div className="flex justify-center">
                  <Image src="/who/2.png" width={100} height={100} alt="who" />
                </div>
                <div className="">
                  <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                    Mission
                  </h3>
                  <p className="p-2 font-bold">
                    Genelab empowers with precise genetic insights, advancing
                    healthcare and research.
                  </p>
                </div>
              </div>
              <div className="border-2 text-gray-700 p-3 rounded-xl">
                <div className="flex justify-center">
                  <Image src="/who/1.png" width={100} height={100} alt="who" />
                </div>
                <div className="">
                  <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                    Vision
                  </h3>
                  <p className="p-2 font-bold">
                    Genelab envisions a future where personalized genetic
                    testing transforms lives and healthcare globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
