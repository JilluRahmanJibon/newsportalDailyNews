import React from "react";
import HomeCulture from "../HomeCulture/HomeCulture";
import HomeFixedData from "../HomeFixedData/HomeFixedData";
import MainHome from "../MainHome/MainHome";
import RelativePost from "../RelativePost/RelativePost";

const Home = () => {
  return (
    <div className=" xl:w-9/12 w-11/12 mx-auto py-5 ">
      <div className="flex">
        <MainHome />
        <HomeFixedData />
      </div>
      <RelativePost />
      <HomeCulture />
      <h1>hello</h1>
    </div>
  );
};

export default Home;
