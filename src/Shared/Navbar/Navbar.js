import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mx-28">
      <div className="navbar ">
        <label htmlFor="sidenav" className=" drawer-button">
          <FiMenu className="mr-2"></FiMenu>
        </label>
        <div className="navbar-start">
          <Link to="/" className="text-lg font-bold">
            Daily News
          </Link>
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
        <div className="navbar-end">
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
