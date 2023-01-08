import React from "react";
import { Link } from "react-router-dom";

const CategoryDataCard = ({ newsData }) => {
  //   console.log(newsData);
  return (
    <div className="sm:w-10/12 mx-auto md:flex  py-5 px-2">
      <div>
        <h1 className="text-sm font-bold w-[150px] pt-2">{newsData?.author?.published_date}</h1>
      </div>
      <div className=" md:flex">
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