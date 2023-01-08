import React from "react";
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  return (
    <div>
      <ul className="lg:flex gap-5 px-1 text-xs cursor-pointer justify-center items-center font-semibold mb-2 hidden ">
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
          <Link>Podcasts</Link>
        </li>
        <li>
          <Link>Times Store</Link>
        </li>
      </ul>
      <hr className="w-[80%] mx-auto border-1 border-black mb-1" />
      <hr className="w-[80%] mx-auto border-1 border-black" />
    </div>
  );
};

export default SecondNavbar;
