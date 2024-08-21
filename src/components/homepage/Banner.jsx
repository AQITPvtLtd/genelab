import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative ">
      <Image
        src="/banner2.png"
        width={10000}
        height={1000}
        className="w-full h-full lg:p-10"
      />
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-4">
        <div className="lg:col-start-2 col-start-2 -ml-5 col-span-5 lg:text-lg text-sm lg:col-span-2 row-start-3 font-bold">
          <div className="hidden lg:flex text-lg">Call Now At</div>

          <Link
            href="tel:+91-981 172 4700"
            className="flex text-white border px-3 bg-darkgreen hover:bg-darkgreen/90 rounded-lg py-2"
          >
            <FaPhoneAlt className="mt-1 mr-1" />
            +91-981 172 4700
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
