import React from "react";
import { useLoaderData } from "react-router";

const NewsDetails = () => {
  const detailsData = useLoaderData();
  console.log(detailsData);
  return (
    <div>
      <h1>this is NewsDetails</h1>
    </div>
  );
};

export default NewsDetails;
