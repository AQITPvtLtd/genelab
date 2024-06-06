"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllArticles } from "@/services/articles";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllArticles();
      setArticles(data.result);
    }
    fetchData();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  function splitText(str) {
    const x = str.split("(");
    return x[0];
  }
  return (
    <div className="relative overflow-x-clip xl:mt-[300px] lg:mt-[500px] md:mt-[0px] mt-[780px]">
      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      <div className="absolute w-full mt-14">
        <h1 className="mb-2 font-bold lg:text-5xl text-4xl text-white text-center">
          CHECK OUT OUR LATEST NEWS
        </h1>
        {/* <p className="text-center text-white text-xl my-2 pb-10">
          know everything abo
        </p> */}
        <div className="mx-10">
          <Slider {...settings}>
            {articles?.map((d) => (
              <Link href={`articles/${d.id}`} key={d.id} className="">
                <div className="p-5 h-56 bg-opacity-70 text-black">
                  <div className="flex flex-col items-center justify-center">
                    {/* image */}
                    <div className="rounded-full p-5 bg-white bg-opacity-60">
                      <Image
                        src={`/blog/${d.image}`}
                        width={1000}
                        height={1000}
                        alt="testimonialImg"
                        className="rounded-full w-[200px] h-[200px] object-fit"
                      />
                    </div>
                  </div>
                </div>
                <h1
                  className="text-xl font-semibold mx-5 text-center mt-[50px] px-4 text-white"
                  dangerouslySetInnerHTML={{ __html: splitText(d.title) }}
                ></h1>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
      <Image
        src="/blog/article.png"
        width={10000}
        height={10000}
        className="lg:h-[550px] h-[650px] w-full object-cover"
        alt="testimonialImg"
      />
    </div>
  );
};

export default Articles;
