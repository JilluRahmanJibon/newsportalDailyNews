import React from "react";
import { Link } from "react-router-dom";

const Card = ({ newsData }) => {
  // console.log(newsData);
  return (
    <Link to={`news/${newsData?._id}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full h-full xl:w-[500px] lg:pr-20">
          <Link className="text-3xl font-bold pt-2">{newsData?.title}</Link>
          <p className="py-3">{newsData?.description?.slice(0, 200)}</p>
          <hr />
        </div>
        <div>
          <img
            className="lg:w-[600px] w-full h-full lg:h-[350px] object-cover"
            src={newsData?.picture}
            alt=""
          />
        </div>
        <div className=" bg-black w-px mx-2"></div>
      </div>
      <div className=" bg-black h-px my-2 mr-5"></div>
    </Link>
  );
};

export default Card;
