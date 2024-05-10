import ContactForm from "@/components/common/ContactForm";
import React from "react";
const page = () => {
  return (
    <div className="lg:mt-[190px] mt-[220px] overflow-x-clip">
      <div className="text-center mb-8 font-bold text-5xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
        <h1>Reach Out To Us</h1>
      </div>
      <div className="relative">
        <div className=" text-white mt-10 bg-gradient-to-t from-blue to-darkgreen p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
