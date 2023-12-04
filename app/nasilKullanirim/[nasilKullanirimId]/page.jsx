import React from "react";
import datas from "../../../data/howToUse.json";

function page({ params }) {
  const findHowToUse = datas.find(
    (item) => item.id.toString() === params.nasilKullanirimId
  );
  console.log(findHowToUse);

  return (
    <div className="h-screen flex justify-center items-center font-bold">
      <div>
        Nasıl Kullanırım {params.nasilKullanirimId}
        <p>{findHowToUse.title}</p>
      </div>
    </div>
  );
}

export default page;
