import React from "react";
import Image from "next/image";
import "animate.css";
import ContactForm from "../common/ContactForm";
const Contact = () => {
  return (
    <div className="relative mt-[50px]">
      <Image
        src="/darkbg.png"
        height={10000}
        width={10000}
        className="w-full lg:h-[600px] h-[760px]"
        alt="bg"
      />
      <div className="absolute inset-0 flex-auto px-4 lg:px-10 py-10 pt-0 text-white">
        <div className="flex justify-center mb-10">
          <div className="animate__animated animate__heartBeat animate__infinite animate__slower text-4xl lg:text-5xl font-bold  bg-gradient-to-r from-darkgreen inline-block to-white mt-10 text-transparent bg-clip-text">
            CONTACT US
          </div>
        </div>
        <div className="relative">
          {/* <Image
            src="/contactDesign2.png"
            height={10000}
            width={10000}
            className="opacity-50 lg:h-[440px] h-[300px] lg:w-full w-[100px] absolute inset-0 mt-10 object-cover"
            alt="contact"
          /> */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
