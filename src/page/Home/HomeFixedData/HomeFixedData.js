import React, { useEffect, useState } from "react";
import Card from "./Card";

const HomeFixedData = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ApiUrl}news/category/Sports`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  // console.log(news);
  return (

    <div className="pr-2 h-full w-full lg:w-[400px] hidden xl:flex">
      <div>
        {news.map((newsData, uxi) => (
          <Card key={uxi} newsData={newsData} />
        ))}
      </div>
    </div>

  );
};

export default HomeFixedData;
