import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="lg:mx-28 md:20 mx-10">
      <div className="flex justify-between items-center ">
        <div className="">
          <label htmlFor="sidenav" className=" drawer-button">
            <FiMenu className="mr-2 cursor-pointer"></FiMenu>
          </label>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xs cursor-pointer">
            <li>
              <a>U.S</a>
            </li>

            <li>
              <a>ASIA</a>
            </li>
            <li>
              <a>INTERNATIONAL</a>
            </li>
            <li>
              <a>CANADA</a>
            </li>
          </ul>
        </div>
        <div className="">
          <Link
            to="/login"
            className="text-white font-bold py-1 px-2 bg-blue-500 hover:bg-blue-700 rounded text-xs"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
