import React from "react";
import Image from "next/image";
import "animate.css";
const Contact = () => {
  return (
    <div className="relative">
      <Image
        src="/darkbg.png"
        height={1000}
        width={10000}
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex-auto px-4 lg:px-10 py-10 pt-0 text-white">
        <div className="flex justify-center mb-10">
          <div className="animate__animated animate__heartBeat animate__infinite animate__slower text-5xl font-bold  bg-gradient-to-r from-darkgreen inline-block to-white mt-10 text-transparent bg-clip-text">
            REACH OUT TO US
          </div>
        </div>
        <div className="relative">
          <Image
            src="/contactDesign2.png"
            height={10000}
            width={10000}
            className="h-[440px] w-full absolute inset-0 mt-10"
          />
          <form className="mx-32">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value="Lucky"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value="Jesse"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value="lucky jesse"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value="jesse@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="email"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value="New York"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value="United States"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value="Postal Code"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlfor="grid-password"
                  >
                    How Can We Help ?
                  </label>
                  <textarea
                    type="text"
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
