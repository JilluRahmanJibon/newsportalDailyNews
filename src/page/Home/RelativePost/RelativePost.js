import React, { useEffect } from "react";
import RelativeCard from "./RelativeCard";

const RelativePost = () => {
  const [news, setNews] = React.useState([]);
  useEffect(() => {
    fetch("https://daily-news-server-nu.vercel.app/news/category/hotTopic")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  // console.log(news);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mx-auto ">
      {news.map((newsData, uxi) => (
        <RelativeCard key={uxi} newsData={newsData} />
      ))}
    </div>
  );
};

export default RelativePost;
