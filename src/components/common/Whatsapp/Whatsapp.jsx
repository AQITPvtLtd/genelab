"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "animate.css";
import Model from "./Model";
export default function Whatsapp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="fixed bottom-24 right-8 z-[99]">
      <div className="relative">
        {/* <Link
        href="https://alvo.chat/4C9O"
        
      >
        
      </Link> */}
        {isHovered && (
          <div
            data-popover-target="popover-default"
            role="tooltip"
            className="bottom-[62px] absolute z-10 right-1 mt-2 transition-opacity duration-300 shadow-sm w-[300px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Model />
            {/* <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Popover title
              </h3>
            </div>
            <div className="px-3 py-2">
              <p>And here's some amazing content. It's very engaging. Right?</p>
            </div>
            <div data-popper-arrow></div> */}
          </div>
        )}
        <button
          type="button"
          className="flex animate__animated animate__pulse shadow-primary shadow-lg animate__infinite  cursor-pointer items-center justify-center rounded-md bg-[#25d366] text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaWhatsapp className=" w-[25px] h-[40px]" />
        </button>
      </div>
    </div>
  );
}
