import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryData = () => {
  const alldata = useLoaderData();
  console.log(alldata);
  return (
    <div>
      <h1>this is category</h1>
      {/* <h1>this is category</h1> */}
    </div>
  );
};

export default CategoryData;
