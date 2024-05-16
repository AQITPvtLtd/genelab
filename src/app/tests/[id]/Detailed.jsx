"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllTests } from "@/services/tests";

const Detailed = ({ id }) => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllTests();
        setTests(response.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const obj = tests.find((t) => id == t.id);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

  if (!obj) {
    return <div>Test not found</div>; // Render message if test with specified ID is not found
  }

  return (
    <div className="mt-[190px]">
      <div className="lg:flex justify-evenly">
        <Image
          src={`/tests/${obj.image}`}
          width={1000}
          height={1000}
          className="lg:w-1/2 lg:mx-4 lg:h-[400px] h-[200px]"
          alt="Test Image"
        />
        <div className="lg:mt-[100px] mt-10">
          <div className="mb-4 font-bold text-4xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
            <h1 className="uppercase text-center">{obj.name}</h1>
          </div>
          <p className="font-semibold text-gray-500 p-3 pt-0">{obj.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
