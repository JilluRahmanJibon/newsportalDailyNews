import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full h-full xl:w-[500px] lg:pr-20">
          <Link className="text-3xl font-bold pt-2">
            In Speaker Fight's Final Hours, Arm-Twisting, Flaring Tempers and
            Calls From Trump
          </Link>
          <p className="py-3">
            Compellingly build holistic total linkage through installed base
            e-commerce. Distinctively administrate standardized testing
            procedures rather than dynamic intellectual capital. Collaboratively
            matrix web-enabled customer service.
          </p>
          <hr />
        </div>
        <div>
          <img
            className="lg:w-[600px] w-full h-full lg:h-[350px] object-cover"
            src="https://static01.nyt.com/images/2023/01/07/multimedia/07vid-House-Speaker-Rogers-1-f247/07vid-House-Speaker-Rogers-1-f247-videoSixteenByNine1050.jpg?quality=75&auto=webp"
            alt=""
          />
        </div>
        <div className=" bg-black w-px mx-2"></div>
      </div>
      <div className=" bg-black h-px my-2 mr-5"></div>
    </>
  );
};

export default Card;
