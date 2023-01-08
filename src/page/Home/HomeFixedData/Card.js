import React from "react";
import { Link } from "react-router-dom";

const Card = ({ newsData }) => {
  // console.log(newsData);
  return (
    <Link to={`news/${newsData?._id}`} className="pb-5 ">
      <div>
        <img src={newsData?.picture} alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-bold pt-2">
          {newsData?.title?.slice(0, 50)}
        </h1>
        <p className="py-2">{newsData?.description?.slice(0, 100)}</p>
      </div>
    </Link>
  );
};

export default Card;
