import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryDataCard from "./CategoryDataCard";

const CategoryData = () => {
  const alldata = useLoaderData();
  //   console.log(alldata);

  return (
    <div className="max-w-[1440px] mx-auto">
      {alldata.map((newsData, uxi) => (
        <CategoryDataCard key={uxi} newsData={newsData} />
      ))}
    </div>
  );
};

export default CategoryData;