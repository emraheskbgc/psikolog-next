import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import datas from "../../data/howToUse.json";
function Section2() {
  return (
    <section className="flex md:flex-row flex-col justify-center  items-center bg-white ">
      <div>
        <h2 className="text-textColor text-center md:text-left text-[30px]  mb-20 mt-5">
          Nasıl Kullanırım ?
        </h2>
        <div className="flex flex-row md:flex-col">
          {datas.map((data) => (
            <Link href={`/nasilKullanirim/${data.id}`}>
              <div
                className={` flex text-center md:text-left md:flex-col flex-row md:pl-4 md:pt-3 rounded-lg hover:bg-gray-100 hover:text-btnBg hover:font-[500] hover:cursor-pointer ${styles.hoverContainer}`}
              >
                <div className="flex  flex-col md:flex-row  items-center md:mb-4  ">
                  <span className="mr-4  text-2xl border rounded-full h-10 w-10 p-2 bg-socialBg opacity-25 transition-all">
                    {data.id === 1 && <IoChatbubblesSharp />}
                    {data.id === 2 && <BsCalendarDate />}
                    {data.id === 3 && <BsCameraVideoFill />}
                  </span>
                  <h2 className="text-xl  ">{data.title}</h2>
                </div>
                <div className="mb-4 hidden md:block">
                  <p className="max-w-sm opacity-60">{data.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:ml-36 mb-5">
        <Image
          src="/images/appointment.png"
          alt="appointment iamge"
          width={300}
          height={40}
        />
        <p className="text-center text-purple text-xl md:hidden">
          Terapi seansın için en uygun tarih ve saati, seansler sekmesinden
          kolayca seçerek oluşturun. Seansınıza 24 saaat kalana kadar iptal
          edebilirsiniz
        </p>
      </div>
    </section>
  );
}

export default Section2;
