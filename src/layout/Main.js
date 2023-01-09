import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Logo from "../Shared/Logo/Logo";
import Navbar from "../Shared/Navbar/Navbar";
import SecondNavbar from "../Shared/SecondNavbar/SecondNavbar";

const Main = () => {
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
  // console.log(uniqueCategory);
  return (
    <div>
      <div className="drawer">
        <input id="sidenav" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <Logo />
          <SecondNavbar />
          <Outlet></Outlet>
          <Footer />
        </div>
        <div className="drawer-side ">

          <label htmlFor="sidenav" className="drawer-overlay "></label>

          <ul className="menu p-4 sm:w-80 bg-white font-bold">
            <label htmlFor="sidenav" className="absolute btn btn-sm btn-circle z-50 right-2 top-2 cursor-pointer font-bold drawer-button">
              X
            </label>
            {uniqueCategory.map((category, uxi) => (
              <li key={uxi}>
                <Link to={`/news/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
