import React, { useEffect } from "react";
import Card from "./Card";

const MainHome = () => {
  const [news, setNews] = React.useState([]);
  useEffect(() => {
    fetch("https://daily-news-server-nu.vercel.app/news/category/World")
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