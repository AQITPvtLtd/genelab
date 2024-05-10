import React from "react";
import Image from "next/image";
import Link from "next/link";
import { tests } from "@/app/tests/tests";

const Tests = () => {
  const t = tests.slice(0, 3);

  return (
    <div className="overflow-x-clip">
      <div className="relative">
        <Image
          src="/tests.png"
          height={10000}
          width={10000}
          className="w-full lg:h-full opacity-50 h-[1400px] object-cover"
          alt="tests"
        />
        <div className="absolute inset-0 mt-24">
          <div className="flex justify-center mb-10 text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-darkgreen inline-block to-blue text-transparent bg-clip-text">
              EXPLORE OUR RANGE OF TESTS
            </div>
          </div>
          <div className="bg-white lg:bg-transparent lg:grid grid-cols-3 gap-8 lg:mx-10 mx-3">
            {t.map((t) => (
              <Link
                href={`tests/${t.id}`}
                key={t.id}
                className="lg:border-2 bg-white rounded-xl hover:scale-105"
              >
                <Image
                  src={`/tests/${t.img}`}
                  width={2000}
                  height={1000}
                  alt="tests"
                  className="rounded-t-xl w-full h-[200px]"
                />
                <div className="text-center font-bold text-xl mt-2 text-blue">
                  {t.title}
                </div>
                <div className="px-3 pt-3 mb-2 line-clamp-3 text-gray-600">
                  {t.content}
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/tests"
            className="bg-blue flex justify-center text-white p-3 lg:mx-10 mx-3 mt-8 rounded-xl text-xl hover:bg-blue/90"
          >
            Find More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tests;
