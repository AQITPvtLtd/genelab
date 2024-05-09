import React from "react";
import Image from "next/image";
import "animate.css";
import Link from "next/link";
const Book = () => {
  return (
    <div>
      <div className="relative mb-10">
        <div className="grid grid-cols-8">
          <Image
            src="/random2.png"
            width={200}
            height={200}
            className="mt-7 lg:h-[180px] h-[200px] object-cover"
            alt="random"
          />
          <div className="col-span-4 col-start-3">
            <div className="flex justify-center mb-3">
              <div className=" text-5xl font-bold  bg-gradient-to-r from-blue inline-block to-darkgreen mt-10 text-transparent bg-clip-text">
                REACH OUT TO US
              </div>
            </div>
            <p className="flex justify-center lg:text-center">
              With cutting-edge technology and experienced geneticists, we offer
              accurate and personalized genetic testing services
            </p>
            <Link href="/">
              <div className="text-center animate__animated animate__pulse animate__infinite animate__slower shadow-xl flex justify-center bg-blue text-white rounded-xl p-3 mt-3 text-xl font-bold">
                Book An Appointment Now
              </div>
            </Link>
          </div>
          <Image
            src="/random2.png"
            width={300}
            height={300}
            className="col-start-8 mt-7 lg:h-[180px] h-[200px] object-cover"
            alt="random"
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
