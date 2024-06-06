"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllArticles } from "@/services/articles";
import Link from "next/link";
import { FaPen } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import Moment from "react-moment";
import "animate.css";

const Detailed = ({ id }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllArticles();
        setArticle(response.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const obj = article.find((t) => id == t.id);
  if (!obj) {
    return <div>Article not found</div>; // Render message if test with specified ID is not found
  }

  return (
    <div className="mt-[230px] lg:mt-[190px]">
      <div className="mb-4 lg:mx-4 font-bold text-4xl flex justify-center bg-gradient-to-t from-blue to-darkgreen text-transparent bg-clip-text">
        <h1 className="uppercase text-center">{obj.title}</h1>
      </div>
      <div className="flex justify-center mb-2">
        <div className="flex">
          <FaPen className="text-blue mt-1 mr-1" />
          <h3 className="font-semibold">Author:</h3>
          <p>Team Genelab</p>
        </div>
        <div className="flex ml-3">
          <MdDateRange className="text-blue mt-1 mr-1" />
          <h3 className="font-semibold">Date:</h3>
          <p>
            <Moment format="DD-MM-YYYY">{obj.date}</Moment>
          </p>
        </div>
      </div>
      <div className="lg:grid grid-cols-4">
        <div className="col-span-3">
          <Image
            src={`/blog/${obj.image}`}
            width={1000}
            height={1000}
            className="lg:mx-4 lg:h-[500px] h-[200px]"
            alt={obj.alt}
          />
          <div className="mt-4">
            <p
              className="p-3 pt-0"
              dangerouslySetInnerHTML={{ __html: obj.content }}
            ></p>
          </div>
        </div>
        <div className="mx-5 p-5 border-gray-400 border-2">
          <h1 className="animate__animated animate__jackInTheBox animate__infinite animate__slower font-semibold text-xl text-blue text-center mb-2">
            Related Topics
          </h1>
          {article.map((t) => (
            <div key={t.key} className="mb-3 hover:underline hover:text-blue">
              <ul className=" list-disc ml-3">
                <li>
                  <Link href={`/articles/${t.id}`} className="flex">
                    {t.title}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detailed;
