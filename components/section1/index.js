import React from "react";
import Image from "next/image";

function Section1() {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center pt-20 ">
      <div>
        <h1 className="text-darkPurple text-[20px] md:text-[50px] font-bold">
          Online terapi ile değişimi başlat !
        </h1>
        <p className="text-darkPurple font-bold mt-5 mb-5">
          Hemen sana en uygun online psikolog ile <br /> eşleş ve değişime başla
        </p>
        <button className=" hidden md:block  w-48 h-[55px] px-5 rounded-2xl bg-darkPurple text-lg text-white">
          Hemen Başla
        </button>
      </div>
      <div className="md:ml-20">
        <Image
          src="/images/psikologofisi.webp"
          alt="bitmap"
          width={400}
          height={40}
        />
      </div>
    </section>
  );
}

export default Section1;
