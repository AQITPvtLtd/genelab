"use client";

import { sendFormData } from "@/services/formData";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const ContactForm = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const fileData = new FormData();
    fileData.append("myFile", file);
    // Append other form data fields to fileData
    Object.entries(formData).forEach(([key, value]) => {
      fileData.append(key, value);
    });
    const response = await sendFormData(fileData);
    if (response.success) {
      toast.success(response.message, {
        position: "bottom-left",
      });
      router.push("/");
    } else {
      toast.error(response.message, {
        position: "bottom-left",
      });
    }
  };
  return (
    <div>
      <form className="lg:mx-32" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                htmlFor="grid-password"
              >
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                htmlFor="grid-password"
              >
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                htmlFor="grid-password"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                htmlFor="grid-password"
              >
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                htmlFor="grid-password"
              >
                Upload Prescription
              </label>
              <input
                type="file"
                id="myFile"
                name="prescription"
                accept="image/*, .pdf"
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];

                    setFile(file);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-lg font-bold mb-2"
                htmlFor="grid-password"
              >
                How Can We Help ?
              </label>
              <textarea
                type="text"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <button
            type="submit"
            className="bg-green text-black font-bold hover:bg-green/90 p-2 rounded-xl"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
