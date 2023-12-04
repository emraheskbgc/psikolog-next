import React from "react";
import datas from "../../../data/about.json";

function page({ params }) {
  const findService = datas.find(
    (item) => item.id.toString() === params.serviceId
  );
  console.log(findService);
  return (
    <div className="h-screen flex justify-center items-center font-bold">
      <div>
        Servislerimiz {params.serviceId}
        <p>{findService.title}</p>
      </div>
    </div>
  );
}

export default page;
