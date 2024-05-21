"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import UserContext from "@/context/UserContext";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { getAllArticles } from "@/services/articles";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const t = async () => {
      const x = await getAllArticles();
      setArticles(x.result);
    };
    t();
  }, []);
  // const [inputSearch, setInputSearch] = useState("");
  // const [isNameEmpty, setIsNameEmpty] = useState(false);
  // const [file, setFile] = useState(null);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   description: "",
  // });
  // const handleSearch = (e) => {
  //   setInputSearch(e.target.value);
  // };
  // let filteredData = tests;
  // if (inputSearch.trim() !== "") {
  //   filteredData = tests.filter((d) =>
  //     d.name.toLowerCase().includes(inputSearch.toLowerCase())
  //   );
  // }

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!file) return;
  //   const fileData = new FormData();
  //   fileData.append("myFile", file);
  //   // Append other form data fields to fileData
  //   Object.entries(formData).forEach(([key, value]) => {
  //     fileData.append(key, value);
  //   });
  //   const response = await addTest(fileData);
  //   if (response.success) {
  //     setFormData({
  //       name: "",
  //       description: "",
  //     });
  //     swal({
  //       title: "Done",
  //       text: "Test Added",
  //       icon: "success",
  //     });
  //   } else {
  //     toast.error(response.message, {
  //       position: "bottom-left",
  //     });
  //   }
  // };
  return (
    <div className="mt-[220px] lg:mt-[190px]">
      {/* {m != undefined && m === mail && (
        <form onSubmit={handleSubmit} className="mx-20">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 text-golden block text-sm text-dark"
            >
              Name of Test
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter title of test"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
              value={formData.name}
              onChange={handleChange}
            />
            {isNameEmpty && (
              <p className="text-sm text-red-600">Name Cant be empty</p>
            )}
          </div>
          <div className="mb-8">
            <label
              htmlFor="description"
              className="mb-3 block text-sm font-medium text-dark"
            >
              Description
            </label>
            <textarea
              name="description"
              rows={5}
              placeholder="Enter Description"
              className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-8">
            <label
              htmlFor="image"
              className="mb-3 block text-golden text-sm text-dark"
            >
              Image
            </label>
            <input
              type="file"
              id="myFile"
              name="image"
              accept="image/*"
              onChange={({ target }) => {
                if (target.files) {
                  const file = target.files[0];

                  setFile(file);
                }
              }}
            />
          </div>
          <div className="mb-6">
            <button className="hover:bg-blue/90 flex w-full items-center justify-center rounded-sm bg-blue px-9 py-4 text-base font-medium text-white shadow-submit duration-300">
              Fill Test
            </button>
          </div>
        </form>
      )} */}

      <div className="mb-10 font-bold text-5xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
        <h1>CHECK OUT OUR LATEST UPDATES</h1>
      </div>
      {/* search */}
      {/* <div className="w-full">
        <div className="w-[80%] mx-auto text-black">
          <div className="w-full mb-10">
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="search tests by title..."
                onChange={handleSearch}
                className="w-full text-md font-semibold px-4 py-3 text-black my-4 border-gray-700 bg-gray-100 shadow-lg outline-none"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="lg:grid grid-cols-3 gap-4 mx-6">
        {articles.map((t) => (
          <Link
            href={`articles/${t.id}`}
            key={t.id}
            className="lg:border-2 lg:border-gray-400 rounded-xl hover:bg-black/10"
          >
            <Image
              src={`/blog/${t.image}`}
              width={2000}
              height={1000}
              alt="tests"
              className="rounded-t-xl w-full h-[200px]"
            />
            <div className="text-center font-bold text-xl mt-2 text-blue">
              {t.title}
            </div>
            <div
              className="px-3 pt-3 mb-2 line-clamp-3 text-gray-600"
              dangerouslySetInnerHTML={{ __html: t.content }}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
