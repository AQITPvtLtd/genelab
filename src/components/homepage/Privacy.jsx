import React from "react";
import Image from "next/image";
import "animate.css";

const Privacy = () => {
  return (
    <div className=" overflow-x-clip">
      <div className="relative">
        <Image
          src="/darkbg.png"
          height={2000}
          width={2000}
          className=" w-full h-[800px] lg:h-[500px] object-cover"
          alt="privacy"
        />
        <div className="absolute inset-0 lg:grid grid-cols-2">
          <div className="border-2 border-white rounded-xl lg:m-20 m-10 p-10 shadow-white shadow-lg animate__animated animate__pulse animate__infinite animate__slower">
            <Image src="/who/2.png" width={100} height={100} />
            <div className="text-white font-bold text-2xl">Our Mission</div>
            <p className="text-white text-lg">
              Genelab empowers with precise genetic insights, advancing
              healthcare and research.
            </p>
          </div>
          <div className="border-2 border-white rounded-xl lg:m-20 m-10 p-10 shadow-white shadow-lg animate__animated animate__pulse animate__infinite animate__slower">
            <Image src="/who/1.png" width={100} height={100} />
            <div className="text-white font-bold text-2xl">Our Vision</div>
            <p className="text-white text-lg">
              Genelab envisions a future where personalized genetic testing
              transforms lives and healthcare globally
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
