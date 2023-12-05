import Image from "next/image";
import React from "react";
import datas from "../../data/about.json";
import Link from "next/link";

function Section3() {
  return (
    <div className="bg-section3Bg flex flex-col justify-center items-center ">
      <div className="text-center text-white font-bold mt-3">
        <h4 className="text-md">BİZİM HAKKIMIZDA BİRAZ</h4>
        <h1 className="text-[40px]">yapmayı seviyoruz</h1>
      </div>
      <div className=" p-10 md:w-[50%] grid md:grid-cols-4 grid-cols-3 gap-x-4 gap-y-4 justify-center">
        {datas.map((data) => (
          <div className=" bg-white rounded-b-2xl  " key={data.id}>
            <div className="bg-cartBg h-1"></div>
            <div className="flex flex-col justify-center items-center">
              <Image src={data.image} alt="114" width={100} height={150} />
              <h3 className="pb-5 text-center text-section3Bg font-[500] text-sm md:text-lg">
                {data.title}
              </h3>
              <Link href={`/service/${data.id}`}>
                <p className="mb-4 text-[10px] underline underline-offset-8 hover:text-cartBg hover:cursor-pointer hover:font-bold ">
                  DAHA FAZLA
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
