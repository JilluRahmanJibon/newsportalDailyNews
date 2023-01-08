import React, { useEffect, useState } from "react";
import Card from "../HomeFixedData/Card";

const MainHome = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ApiUrl}news/category/World`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  // console.log(news);
  return (
    <div className="">
      {news.map((newsData, uxi) => (
        <Card key={uxi} newsData={newsData} />
      ))}
    </div>
  );
};

export default MainHome;
