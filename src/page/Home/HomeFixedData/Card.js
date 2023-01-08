import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="pb-5 ">
      <div>
        <img
          src="https://static01.nyt.com/images/2023/01/05/multimedia/05Well-DynamicWarmUp-final-1-11b4/05Well-DynamicWarmUp-final-1-11b4-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          alt=""
        />
      </div>
      <div>
        <Link className="text-3xl font-bold pt-2">
          The Best Warm-Up Is a Dynamic Warm-Up
        </Link>
        <p className="py-2">
          Enthusiastically promote resource maximizing alignments with superior
          information. Rapidiously fashion high-payoff benefits and parallel
          e-commerce. Credibly deliver.
        </p>
      </div>
    </div>
  );
};

export default Card;
