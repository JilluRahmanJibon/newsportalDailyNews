import React from "react";
import { Link } from "react-router-dom";

const RelativeCard = () => {
  return (
    <div>
      <h1 className="font-bold">Hot Topic</h1>
      <div>
        <div className="w-full lg:py-2  flex  ">
          <div>
            <Link className="text-3xl font-bold">Listen To 'Popcast'</Link>
            <p className="py-2 pr-2">
              Quickly mesh vertical synergy via magnetic niche markets.
              Dynamically expedite team driven manufactured products whereas
              worldwide "outside.
            </p>
          </div>
          <div className="px-2">
            <img
              className="w-[500px] h-full object-cover"
              src="https://static01.nyt.com/images/2022/01/04/multimedia/04popcast-1-dd6d/04popcast-1-dd6d-square320.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
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
