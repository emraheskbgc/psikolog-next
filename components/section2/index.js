"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import datas from "../../data/howToUse.json";
function Section2() {
  const [selectImage, setSelectImage] = useState("/images/step1.jpg");
  const [selectItemId, setSelectItemId] = useState(datas[0].id);

  const handleDivClick = (data) => {
    setSelectImage(data.image);
    setSelectItemId(data.id);
  };
  return (
    <section className="flex md:flex-row flex-col justify-center  items-center bg-white ">
      <div>
        <h2 className="text-textColor text-center md:text-left text-[30px]  mb-14 mt-5">
          Nasıl Kullanırım ?
        </h2>
        <div className="flex flex-row md:flex-col">
          {datas.map((data) => (
            <div
              key={data.id}
              onClick={() => handleDivClick(data)}
              className={`md:mb-4 flex text-center md:text-left md:flex-col flex-row md:pl-4 md:pt-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 hover:text-btnBg ${
                selectItemId === data.id ? styles.hoverContainer : ""
              }`}
            >
              <div className="flex  flex-col md:flex-row  items-center md:mb-4  ">
                <span className="mr-4  text-2xl border rounded-full h-10 w-10 p-2 bg-socialBg opacity-25 transition-all">
                  {data.id === 1 && <IoChatbubblesSharp />}
                  {data.id === 2 && <BsCalendarDate />}
                  {data.id === 3 && <BsCameraVideoFill />}
                </span>
                <h2 className="text-xl  ">{data.title}</h2>
              </div>
              <div className="mb-8 hidden md:block">
                <p className="max-w-sm opacity-60">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:ml-36 mb-10 mt-10">
        <Image
          src={selectImage}
          alt="appointment iamge"
          width={500}
          height={500}
        />
        <p className="text-center text-purple text-xl md:hidden mt-10">
          Terapi seansın için en uygun tarih ve saati, seansler sekmesinden
          kolayca seçerek oluşturun. Seansınıza 24 saaat kalana kadar iptal
          edebilirsiniz
        </p>
      </div>
    </section>
  );
}

export default Section2;
