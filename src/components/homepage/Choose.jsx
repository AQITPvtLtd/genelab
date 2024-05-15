import React from "react";
import Image from "next/image";
const Choose = () => {
  return (
    <div>
      <div className="lg:mt-[300px] mt-[1100px]">
        <div className="mb-10 font-bold text-4xl lg:text-5xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
          <h1>WHY CHOOSE US ?</h1>
        </div>
        <div className="lg:grid grid-cols-3 gap-3 mx-10">
          <div className="border-2 text-gray-700 p-3 rounded-xl">
            <div className="flex justify-center">
              <Image src="/who/6.png" width={100} height={100} alt="who" />
            </div>
            <div className="">
              <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                Accuracy and Reliability
              </h3>
              <p className="p-2 font-bold">
                Our state-of-the-art laboratory facilities and stringent quality
                control measures ensure accurate and reliable results.
              </p>
            </div>
          </div>
          <div className="border-2 text-gray-700 p-3 rounded-xl">
            <div className="flex justify-center">
              <Image src="/who/5.png" width={100} height={100} alt="who" />
            </div>
            <div className="">
              <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                Personalized Solutions
              </h3>
              <p className="p-2 font-bold">
                We offer tailored genetic testing services to meet the unique
                needs of each client, whether it&apos;s risk assessment,
                treatment guidance, or research purposes.
              </p>
            </div>
          </div>
          <div className="border-2 text-gray-700 p-3 rounded-xl">
            <div className="flex justify-center">
              <Image src="/who/4.png" width={100} height={100} alt="who" />
            </div>
            <div className="">
              <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                Expertise and Support
              </h3>
              <p className="p-2 font-bold">
                Our team of geneticists, laboratory technicians, and genetic
                counselors provide expertise and support throughout the testing
                process, from sample collection to result interpretation.
              </p>
            </div>
          </div>
          <div className="border-2 text-gray-700 p-3 rounded-xl">
            <div className="flex justify-center">
              <Image src="/who/3.png" width={100} height={100} alt="who" />
            </div>
            <div className="">
              <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                Confidentiality and Security
              </h3>
              <p className="p-2 font-bold">
                We prioritize the confidentiality and security of genetic
                information, adhering to strict data protection protocols to
                ensure client privacy.
              </p>
            </div>
          </div>
          <div className="border-2 text-gray-700 p-3 rounded-xl">
            <div className="flex justify-center">
              <Image src="/who/2.png" width={100} height={100} alt="who" />
            </div>
            <div className="">
              <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                Mission
              </h3>
              <p className="p-2 font-bold">
                Genelab empowers with precise genetic insights, advancing
                healthcare and research.
              </p>
            </div>
          </div>
          <div className="border-2 text-gray-700 p-3 rounded-xl">
            <div className="flex justify-center">
              <Image src="/who/1.png" width={100} height={100} alt="who" />
            </div>
            <div className="">
              <h3 className=" text-blue p-2 font-semibold text-xl flex justify-center">
                Vision
              </h3>
              <p className="p-2 font-bold">
                Genelab envisions a future where personalized genetic testing
                transforms lives and healthcare globally
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
