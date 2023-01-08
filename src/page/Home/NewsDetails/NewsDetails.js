import React from "react";
import { useLoaderData } from "react-router";

const NewsDetails = () => {
  const detailsData = useLoaderData();
  console.log(detailsData);
  return (
    <div>
      <h1 className="text-[28px] font-semibold">{detailsData?.title}</h1>
      <img src={detailsData?.picture} alt="" />
      <h1 className="text-[18px]">{detailsData?.description}</h1>
    </div>
  );
};

export default NewsDetails;
