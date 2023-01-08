import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/news")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  // console.log(category);
  // category name
  const categoryNames = category.map((category) => category.category);

  //unique category name
  const uniqueCategory = [...new Set(categoryNames)];
  console.log(uniqueCategory);

  return (
    <div>
      <ul className="lg:flex gap-5 px-1 text-xs cursor-pointer justify-center items-center font-semibold mb-2 hidden ">
        {uniqueCategory.map((category, uxi) => (
          <li key={uxi}>
            <Link>{category}</Link>
          </li>
        ))}
      </ul>
      <hr className="w-[80%] mx-auto border-1 border-black mb-1" />
      <hr className="w-[80%] mx-auto border-1 border-black" />
    </div>
  );
};

export default SecondNavbar;
