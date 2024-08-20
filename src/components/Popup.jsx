"use client";

import { sendFormData } from "@/services/formData";
import React, { useState } from "react";
import swal from "sweetalert";

const Popup = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      scrollToTop();
      swal({
        title: "Done",
        text: response.message,
        icon: "success",
      });
    } else {
      swal({
        title: "Oops!",
        text: response.message,
        icon: "error",
      });
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-blue/40 p-5 rounded-lg shadow-lg">
        <div className="relative bg-gray-100 rounded-lg pb-2 shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
            <h3 className="ml-5 text-xl font-semibold text text-gray-900 dark:text-white">
              Connect With Us
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <button className="sr-only" onClick={onClose}>
                Close modal
              </button>
            </button>
          </div>
          <form className="max-w-sm mx-10" onSubmit={handleSubmit}>
            <div className="mb-5">
              <div className="flex">
                <div className="mr-3">
                  <label
                    className="block uppercase text-sm text-blueGray-600 font-bold"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    className="text-black border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block uppercase text-sm text-blueGray-600 font-bold"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    className="text-black border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mb-5"></div>
            <div className="mb-5">
              <label
                className="block uppercase text-sm text-blueGray-600 font-bold"
                htmlFor="grid-password"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                className="text-black border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                className="block uppercase text-sm text-blueGray-600 font-bold"
                htmlFor="grid-password"
              >
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="text-black border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                className="block uppercase text-sm text-blueGray-600 font-bold"
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
            <div>
              <label
                className="block uppercase text-sm text-blueGray-600 font-bold"
                htmlFor="grid-password"
              >
                How Can We Help ?
              </label>
              <textarea
                type="text"
                className="text-black border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green text-black font-bold hover:bg-green/90 p-2 rounded-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
