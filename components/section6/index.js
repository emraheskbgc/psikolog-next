"use client";
import React, { useState } from "react";
import datas from "../../data/question.json";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

function Section6() {
  const [showDesc, setShowDesc] = useState(null);
  const handleClik = (id) => {
    setShowDesc(showDesc === id ? null : id);
  };
  return (
    <div className="flex flex-col md:flex-row  justify-around  bg-sssBg pb-10">
      <div className="text-center md:text-left">
        <h1 className="font-bold text-3xl mt-20 mb-5">
          Sıkça sorulan <br /> sorular
        </h1>
        <p className="opacity-50 mb-5">
          BulutKlinik Hakkında sık sorulan <br /> sorular
        </p>
        <button className="hidden md:block text-white bg-sssBtn p-2 rounded-3xl mb-10 hover:bg-sssBtnHover">
          Tümünü Gör
        </button>
      </div>

      <div className="flex flex-col justify-center ">
        {datas.map((data) => (
          <div key={data.id}>
            <div
              className="flex flex-row justify-between p-5 items-center"
              onClick={() => handleClik(data.id)}
            >
              <h2 className="font-bold text-sssTitle hover:text-black cursor-pointer">
                {data.title}
              </h2>
              <span className="border p-2 rounded-full bg-white hover:bg-gray-200 ml-10">
                {showDesc === data.id ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {showDesc === data.id && (
              <p className="text-[11px] ml-5 opacity-60 duration-500">
                {data.desc}
              </p>
            )}
            <hr />
          </div>
        ))}
      </div>
      <button className="block md:hidden text-white bg-sssBtn p-2 rounded-3xl mb-10 hover:bg-sssBtnHover">
        Tümünü Gör
      </button>
    </div>
  );
}

export default Section6;
