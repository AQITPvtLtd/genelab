import React from "react";
import Image from "next/image";
import { tests } from "../tests";
const Detailed = ({ id }) => {
  const obj = tests.find((t) => id == t.id);
  return (
    <div className="mt-[190px]">
      <div className="lg:flex justify-evenly">
        <Image
          src={`/tests/${obj.img}`}
          width={1000}
          height={1000}
          className="lg:w-1/2 lg:mx-4 lg:h-[400px] h-[200px]"
          alt="tests"
        />
        <div className="lg:mt-[100px] mt-10">
          <div className="mb-4 font-bold text-4xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
            <h1 className=" uppercase text-center">{obj.title}</h1>
          </div>
          <p className="font-semibold text-gray-500 p-3 pt-0">{obj.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
