import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import datas from "../../data/howToUse.json";
function Section2() {
  return (
    <section className="flex flex-row justify-center items-center bg-white ">
      <div>
        <h2 className="text-textColor text-[30px]  mb-20">
          Nasıl Kullanırım ?
        </h2>

        {datas.map((data) => (
          <div
            className={`flex flex-col  pl-4 pt-3 rounded-lg hover:bg-gray-100 hover:text-btnBg hover:font-[500] hover:cursor-pointer ${styles.hoverContainer}`}
          >
            <div className="flex flex-row  items-center mb-4  ">
              <span className="mr-4 text-2xl border rounded-full h-10 w-10 p-2 bg-socialBg opacity-25 transition-all">
                {data.id === 1 && <IoChatbubblesSharp />}
                {data.id === 2 && <BsCalendarDate />}
                {data.id === 3 && <BsCameraVideoFill />}
              </span>
              <h2 className="text-xl ">{data.title}</h2>
            </div>
            <div className="mb-4">
              <p className="max-w-sm opacity-60">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-36 mb-5 ">
        <Image
          src="/images/appointment.png"
          alt="appointment iamge"
          width={300}
          height={40}
        />
      </div>
    </section>
  );
}

export default Section2;
