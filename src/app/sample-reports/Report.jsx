"use client";

import React, { useState } from "react";
import Image from "next/image";
import { report } from "./reportdata"; // Ensure this is the correct import path
import Link from "next/link";
const Report = () => {
  return (
    <div className="mt-[220px] lg:mt-[150px]" s>
      <div className="mb-10 font-bold text-4xl text-center flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
        <h1>Sample Reports</h1>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mx-20 space-4">
        {report.map((r) => (
          <Link
            href={r.url}
            target="__blank"
            key={r.id}
            className="flex mt-2 ml-2 justify-center border-gray-300 border-2 p-3 rounded-xl hover:scale-105 cursor-pointer"
          >
            <div>
              <div className="flex justify-center">
                <Image src="/pdf.png" width={100} height={100} />
              </div>
              <div className="text-center text-lg font-medium mt-3">
                {r.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Report;
