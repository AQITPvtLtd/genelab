import React from "react";
import { tests } from "./tests";
import Image from "next/image";
import Link from "next/link";
const Test = () => {
  return (
    <div className="mt-[220px] lg:mt-[190px]">
      <div className="mb-10 font-bold text-5xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
        <h1>FIND TESTS</h1>
      </div>
      <div className="lg:grid grid-cols-3 gap-4 mx-6">
        {tests.map((t) => (
          <Link
            href={`tests/${t.id}`}
            key={t.id}
            className="lg:border-2 lg:border-gray-400 rounded-xl hover:bg-black/10"
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
    </div>
  );
};

export default Test;
