import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../Shared/Logo/Logo";
import Navbar from "../Shared/Navbar/Navbar";
import SecondNavbar from "../Shared/SecondNavbar/SecondNavbar";

const Main = () => {
  return (
    <div>
      <div className="drawer">
        <input id="sidenav" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <Logo/>
          <SecondNavbar/>
          <Outlet></Outlet>

        </div>
        <div className="drawer-side ">
          <label htmlFor="sidenav" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-white font-bold">
            <li>
              <Link>Home Page</Link>
            </li>
            <li>
              <Link>World</Link>
            </li>
            <li>
              <Link>Business</Link>
            </li>
            <li>
              <Link>Politics</Link>
            </li>
            <li>
              <Link>U.S</Link>
            </li>
            <li>
              <Link>Sports</Link>
            </li>
            <li>
              <Link>Health</Link>
            </li>
            <li>
              <Link>N.Y</Link>
            </li>
            <li>
              <Link>Opinion</Link>
            </li>
            <li>
              <Link>Tech</Link>
            </li>
            <li>
              <Link>Science</Link>
            </li>
            <li>
              <Link>Games</Link>
            </li>
            <li>
              <Link>Newsletters</Link>
            </li>
            <li>
              <Link>The Learning Network</Link>
            </li>
            <li>
              <Link>Podcasts</Link>
            </li>
            <li>
              <Link>Times Store</Link>
            </li>
            <li>
              <Link>School of NYT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
