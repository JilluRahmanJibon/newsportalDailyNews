import React from "react";
import { Link } from "react-router-dom";

const RelativeCard = ({ newsData }) => {
  console.log(newsData);
  return (
    <div>
      <h1 className="font-bold">{newsData?.category}</h1>
      <div>
        <div className="w-full lg:py-2  flex  ">
          <div>
            <Link className="text-2xl font-bold">
              {newsData?.title.slice(0, 25) + "..."}
            </Link>
            <p className="py-2 pr-2">{newsData?.description?.slice(0, 70)}</p>
          </div>
          <div className="px-2">
            <img
              className="w-[400px] object-cover h-[200px] "
              src={newsData?.picture}
              alt="/"
            />
          </div>
          <div className=" w-px bg-black "></div>
        </div>
        <div className="w-full h-px bg-black mr-20"></div>
      </div>
    </div>
  );
};

export default RelativeCard;
