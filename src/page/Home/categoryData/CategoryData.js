import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryDataCard from "./CategoryDataCard";

const CategoryData = () => {
  const alldata = useLoaderData();
  //   console.log(alldata);

  return (
    <div className=" xl:w-4/5 w-11/12 mx-auto py-5 ">
      {alldata.map((newsData, uxi) => (
        <CategoryDataCard key={uxi} newsData={newsData} />
      ))}
    </div>
  );
};

export default CategoryData;
