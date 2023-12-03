import Image from "next/image";
import React from "react";
import datas from "../../data/about.json";

function Section3() {
  return (
    <div className="bg-section3Bg flex flex-col justify-center items-center ">
      <div className="text-center text-white font-bold mt-3">
        <h4 className="text-md">BİZİM HAKKIMIZDA BİRAZ</h4>
        <h1 className="text-[40px]">yapmayı seviyoruz</h1>
      </div>
      <div className=" p-10 w-[60%] flex flex-wrap justify-center">
        {datas.map((data) => (
          <div className=" bg-white rounded-b-2xl  m-3 w-1/5" key={data.id}>
            <div className="bg-cartBg h-1"></div>
            <div className="flex flex-col justify-center items-center">
              <Image src={data.image} alt="114" width={100} height={150} />
              <h2 className="pb-5 text-section3Bg font-[500]">{data.title}</h2>
              <p className="mb-4 text-[10px] underline underline-offset-8 hover:text-cartBg hover:cursor-pointer hover:font-bold ">
                DAHA FAZLA
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
