import React from "react";
import Card from "./Card";

const HomeFixedData = () => {
  return (
    <>
      <div className="pr-2 h-full w-full lg:w-[400px] hidden xl:flex">
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default HomeFixedData;
