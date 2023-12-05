"use client";
import React, { useState } from "react";
import datas from "../../data/specialist.json";
import Slider from "react-slick";

import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaStar } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

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
    <div className="bg-white pt-10">
      <h1 className="text-center text-lg md:text-3xl text-nameColor font-semibold">
        İhtiyacına En Uygun Uzmanı Seç
      </h1>
      <div className="flex flex-row bg-white justify-center md:text-lg text-xs p-4 font-[500] text-nameColor">
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
      <div className="bg-white px-20 flex justify-center items-center">
        <div className="  w-full bg-white">
          <Slider {...settings}>
            {filteredData.map((data) => (
              <div
                className="border mt-8 mb-8 border-[#e4e4ec] rounded-xl flex justify-center items-center flex-col max-w-[85%] ml-8"
                key={`${data.id} - ${data.category}`}
              >
                <div className="flex flex-col justify-center items-center  p-3">
                  <div className={`${styles.mainDiv}`}>
                    <img src={data.image} alt="" className="rounded-full" />
                    <div className={styles.dot}></div>
                    <span className="ml-2 w-[78px] h-[24px] -mt-[12px] text-slideColor relative border border-slideColor bg-onlineBg rounded-full text-[0.75rem] flex justify-center text-center ">
                      Çevrimiçi
                    </span>
                  </div>

                  <div className="flex flex-row mt-3 text-slideColor justify-center ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="flex justify-center text-nameColor text-center mb-1 text-lg font-[600]">
                    {data.name}
                  </div>
                  <div className="flex justify-center text-center text-nameColor text-sm ">
                    {data.department}
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
                    data.skils.map((skill, index) => (
                      <div
                        className="w-[250px] md:w-[350px] h-[90px] p-2 md:mb-8 font-semibold relative flex flex-wrap justify-center gap-1"
                        key={index}
                      >
                        <div className="md:text-[12px] text-[6px] text-nameColor bg-gray-200 rounded-3xl p-1 h-5 md:h-8 md:p-2  mx-1 text-center">
                          {skill.skil1}
                        </div>
                        <div className="md:text-[12px] text-[6px] text-nameColor bg-gray-200 rounded-3xl p-1 h-5 md:h-8 md:p-2  mx-1 text-center">
                          {skill.skil2}
                        </div>
                        <div className="md:text-[12px] text-[6px] text-nameColor bg-gray-200 rounded-3xl p-1 h-5 md:h-8 md:p-2  mx-1 text-center">
                          {skill.skil3}
                        </div>
                        <div className="md:text-[12px] text-[6px] text-nameColor bg-gray-200 rounded-3xl p-1 h-5 md:h-8 md:p-2  mx-1 text-center">
                          {skill.skil4}
                        </div>
                        <div className="md:text-[12px] text-[6px] text-nameColor bg-gray-200 rounded-3xl p-1 h-5 md:h-8 md:p-2  mx-1 text-center">
                          {skill.skil5}
                        </div>
                      </div>
                    ))}

                  <div className="text-nameColor border-b pb-4 md:mt-2 font-semibold border-black flex flex-row justify-center items-center">
                    <p className="md:text-xl text-xs">
                      {" "}
                      Eğitim ve Sertifikaları Gör{" "}
                    </p>
                    <FaChevronRight className="text-xs mt-1 ml-2" />
                  </div>
                  <div className="mt-3 text-[15px] text-nameColor">
                    ₺ 320 (minimum tutar)
                  </div>
                  <div className="w-full flex justify-center items-center  my-5">
                    <button className="w-[90%] h-[32px] bg-speBtnColor flex justify-center text-center rounded-3xl p-2 text-white text-[0.75rem]">
                      Hemen Başla
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <Link href="/">
            <div className="flex flex-row justify-center items-center font-[700] hover:underline hover:cursor-pointer text-center mb-10">
              <div>Tüm Psikologlar</div>
              <div className="ml-2 mt-1">
                <FaArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section5;
