import React from "react";
import RelativeCard from "./RelativeCard";

const RelativePost = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mx-auto ">
      <RelativeCard />
      <RelativeCard />
      <RelativeCard />
      <RelativeCard />
      <RelativeCard />
      <RelativeCard />
    </div>
  );
};

export default RelativePost;
