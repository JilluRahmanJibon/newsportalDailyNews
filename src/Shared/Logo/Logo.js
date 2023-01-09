import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="pb-4">
      <h1 className="text-center italic font-extrabold md:text-5xl text-2xl font-serif">
        <Link to='/'>
          Daily News
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
