"use client";
import React, { useState } from "react";
import datas from "../../data/specialist.json";
import Slider from "react-slick";

import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#33a2a4",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#33a2a4",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

function Section5() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidestoScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // 768 piksel ve daha küçük ekranlarda aşağıdaki ayarlar geçerli olacak
        settings: {
          slidesToShow: 1, // Mobilde 1 slayt göster
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [selectCategory, setSelectCategory] = useState("All");
  const handleSelectCategory = (category) => {
    setSelectCategory(category);
  };
  const filteredData =
    selectCategory !== "All"
      ? datas.filter((data) => data.category === selectCategory)
      : datas;
  return (
    <div>
      <h1 className="text-center text-lg font-bold bg-white pt-20">
        İhtiyacına En Uygun Uzmanı Seç
      </h1>
      <div className="flex flex-row bg-white justify-center p-2">
        <div
          className={`mr-2 hover:cursor-pointer hover:text-gray-400  ${
            selectCategory === "All" ? "font-bold" : ""
          }`}
          onClick={() => handleSelectCategory("All")}
        >
          Tüm
        </div>
        <div
          className={`mr-2 hover:cursor-pointer hover:text-gray-400 ${
            selectCategory === "Psikolog" ? "font-bold" : ""
          }`}
          onClick={() => handleSelectCategory("Psikolog")}
        >
          Psikolog
        </div>
        <div
          className={`mr-2 hover:cursor-pointer hover:text-gray-400 ${
            selectCategory === "Diyetisyen" ? "font-bold" : ""
          }`}
          onClick={() => handleSelectCategory("Diyetisyen")}
        >
          Diyetisyen
        </div>
        <div
          className={` hover:cursor-pointer hover:text-gray-400 ${
            selectCategory === "Fitness" ? "font-bold" : ""
          }`}
          onClick={() => handleSelectCategory("Fitness")}
        >
          Fitness
        </div>
      </div>
      <div className="bg-white p-20  flex justify-center items-center">
        <div className="  w-[100%] bg-white  p-10">
          <Slider {...settings}>
            {filteredData.map((data) => (
              <div
                className="flex flex-col justify-center items-center  p-5"
                key={`${data.id} - ${data.category}`}
              >
                <div className="text-center ">
                  <div className="relative flex justify-center items-center  ">
                    <Image
                      alt="image"
                      src={data.image}
                      width={100}
                      height={20}
                      className="border border-slideColor rounded-full"
                    />
                    <span
                      className={`${styles.dot} ${styles.mobileDot}`}
                    ></span>
                    <p className={`${styles.online} bg-opacity-10 `}>
                      Çevrim İçi
                    </p>
                  </div>

                  <div className="flex flex-row mt-3 text-slideColor justify-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="font-semibold mt-2">{data.name}</p>
                  <p className="text-[10px] opacity-70">{data.department}</p>
                </div>
                <div className="flex flex-row justify-center p-4">
                  <div className="flex flex-row justify-center items-center mr-3 ">
                    <BsCameraVideo className="opacity-50" />
                    <p className="text-xs ml-1 opacity-50">{data.camera}</p>
                  </div>
                  <div className="flex flex-row justify-center items-center mr-3">
                    <BsTelephone className="opacity-50" />
                    <p className="text-xs ml-1 opacity-50">{data.phone}</p>
                  </div>
                  <div className="flex flex-row justify-center items-center ">
                    <TfiWorld className="opacity-50" />
                    <p className="text-xs ml-1 opacity-50">{data.language}</p>
                  </div>
                </div>

                {data.skils &&
                  data.skils.map((skil, index) => (
                    <div
                      className="grid grid-row grid-cols-3 mb-10 opacity-60"
                      key={index}
                    >
                      <div className="border border-green-900 bg-gray-200 rounded-3xl  p-1 md:text-[10px] text-[5px] text-center mr-1">
                        {skil.skil1}
                      </div>
                      <div className="border border-green-900 bg-gray-200 rounded-3xl p-1 md:text-[10px] text-[5px] text-center mr-1">
                        {skil.skil2}
                      </div>
                      <div className="border border-green-900 bg-gray-200 rounded-3xl p-1 md:text-[10px] text-[5px] text-center mr-1">
                        {skil.skil3}
                      </div>
                    </div>
                  ))}

                <div>
                  <p className="flex flex-row justify-center items-center text-sm mb-5">
                    Eğitim ve Sertifikaları Gör{" "}
                    <FaAngleRight className="ml-1 mt-1" />
                  </p>
                  <hr />
                  <p className="text-center mt-4 mb-3">
                    {data.price} TL/seans (minimum tutar)
                  </p>
                  <button className="border bg-green-400 rounded-3xl p-1 w-full">
                    Hemen Başla
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Section5;
