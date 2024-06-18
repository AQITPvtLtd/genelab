import React from "react";
import { report } from "./report";
import Image from "next/image";
import Link from "next/link";
const Report = () => {
  return (
    <div className="mt-[220px] lg:mt-[150px]">
      <div className="mb-10 font-bold text-4xl text-center flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
        <h1 className="">Sample Reports</h1>
      </div>
      <div className="grid grid-cols-4 mx-20 space-x-4">
        {report.map((r) => (
          <div
            key={r.id}
            className="flex justify-center border-gray-300 border-2 p-3 rounded-xl hover:scale-105"
          >
            <Link href={`/sample-reports/${r.name}`} target="__blank">
              <Image src="/pdf.png" width={100} height={100} alt="pdf image" />
              <div className="text-center text-lg font-medium mt-3">
                {r.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
