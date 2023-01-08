import React from "react";
import { Link } from "react-router-dom";

const CategoryDataCard = ({ newsData }) => {
  //   console.log(newsData);
  return (
    <div className=" md:flex  py-5 px-2">
      <div>
        <h1 className="w-[150px] pt-2 text-sm font-bold">{newsData?.author?.published_date}</h1>
      </div>
      <div className="lg:flex md:flex">
        <div className="w-full h-full  ">
          <Link className="text-[22px] font-bold pt-2">{newsData?.title}</Link>
          <p className="py-3 text-[16px]">{newsData?.description}</p>
        </div>
        <div className="">
          <img
            src={newsData?.picture}
            className="w-[420px] h-[235px] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryDataCard;
