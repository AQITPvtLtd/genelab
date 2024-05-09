import React from "react";
import Image from "next/image";
import Link from "next/link";
const Tests = () => {
  return (
    <div className=" overflow-x-clip">
      <div className="relative">
        <Image
          src="/tests.png"
          height={10000}
          width={10000}
          className="w-full lg:h-full opacity-50 h-[2000px] object-cover"
          alt="tests"
        />
        <div className=" absolute inset-0 mt-24">
          <div className="flex justify-center mb-10 text-center">
            <div className="text-5xl font-bold  bg-gradient-to-r from-darkgreen inline-block to-blue text-transparent bg-clip-text">
              EXPLORE OUR RANGE OF TESTS
            </div>
          </div>
          <div className="lg:grid grid-cols-3 gap-8 mx-10">
            <Link
              href={`/`}
              className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:scale-105 hover:cursor-pointer md:max-w-xl hover:bg-gray-100"
            >
              <Image
                className="object-cover h-[250px] w-full rounded-lg"
                src="/tests/test1.jpg"
                alt=""
                width={280}
                height={200}
              />
              <div className="flex flex-col justify-between leading-normal">
                <div className="bg-primary text-center p-2">
                  <h5 className=" text-2xl font-bold tracking-tight">
                    Genetic Sequencing Test
                  </h5>
                </div>
                <p className="mb-3 font-bold lg:text-gray-700 line-clamp-6 p-5">
                  This test analyzes an individual&apos;s DNA sequence to
                  identify genetic variations that may be associated with
                  certain diseases or conditions.
                </p>
              </div>
            </Link>
            <Link
              href={`/`}
              className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:scale-105 hover:cursor-pointer md:max-w-xl hover:bg-gray-100"
            >
              <Image
                className="object-cover h-[250px] w-full rounded-lg"
                src="/tests/test2.jpg"
                alt=""
                width={280}
                height={200}
              />
              <div className="flex flex-col justify-between leading-normal">
                <div className="bg-primary text-center p-2">
                  <h5 className=" text-2xl font-bold tracking-tight">
                    Genetic Sequencing Test
                  </h5>
                </div>
                <p className="mb-3 font-bold lg:text-gray-700 line-clamp-6 p-5">
                  This test analyzes an individual&apos;s DNA sequence to
                  identify genetic variations that may be associated with
                  certain diseases or conditions.
                </p>
              </div>
            </Link>
            <Link
              href={`/`}
              className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:scale-105 hover:cursor-pointer md:max-w-xl hover:bg-gray-100"
            >
              <Image
                className="object-cover h-[250px] w-full rounded-lg"
                src="/tests/test3.jpg"
                alt=""
                width={280}
                height={200}
              />
              <div className="flex flex-col justify-between leading-normal">
                <div className="bg-primary text-center p-2">
                  <h5 className=" text-2xl font-bold tracking-tight">
                    Genetic Sequencing Test
                  </h5>
                </div>
                <p className="mb-3 font-bold lg:text-gray-700 line-clamp-6 p-5">
                  This test analyzes an individual&apos;s DNA sequence to
                  identify genetic variations that may be associated with
                  certain diseases or conditions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
