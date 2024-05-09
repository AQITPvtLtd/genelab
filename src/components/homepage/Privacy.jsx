import React from "react";
import Image from "next/image";
import "animate.css";

const Privacy = () => {
  return (
    <div className=" overflow-x-clip">
      <div className="relative">
        <Image
          src="/privacy.png"
          height={2000}
          width={2000}
          className="lg:h-full w-full h-[500px] object-cover"
          alt="privacy"
        />
        <div className="absolute inset-0 lg:grid grid-cols-2">
          <h1
            className={`animate__animated animate__pulse animate__infinite animate__slower col-start-2 mt-20 ml-4 text-5xl lg:text-7xl font-bold bg-gradient-to-r from-darkgreen inline-block to-white text-transparent bg-clip-text`}
          >
            You are in control of your DNA and your data.
          </h1>
          <p className="text-white col-start-2 lg:ml-4 lg:mx-0 mx-3">
            We believe you should have a safe place to explore and understand
            your genes. That&apos;s why Privacy and Security are woven into
            everything we do. We also believe in choice. So you&apos;re opted
            out of sharing unless you choose to opt in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
