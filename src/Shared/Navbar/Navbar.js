import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from 'react-icons/fa';

import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext)
  const [userRole, setUserRole] = useState({});
  const [checkRole, setCheckRole] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_ApiUrl}current/user?email=${user?.email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('access-token')}`
      },
    }).then(res => {
      setUserRole(res.data);
    })

  }, [user?.email], checkRole, userRole?.role);
  console.log(user);



  
  return (
    <div className="lg:mx-28 md:20 mx-10 relative">
      <div className="flex justify-between items-center ">
        <div className="">
          <label htmlFor="sidenav" className=" drawer-button">
            <FiMenu className="mr-2 cursor-pointer"></FiMenu>
          </label>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xs cursor-pointer">
            <li>
              <Link>U.S</Link>
            </li>

            <li>
              <Link>ASIA</Link>
            </li>
            <li>
              <Link>INTERNATIONAL</Link>
            </li>
            <li>
              <Link>CANADA</Link>
            </li>
            {userRole?.role === 'publisher' && <li>
              <Link to='/news/addnews'>Add News</Link>
            </li>}
          </ul>
        </div>
        <div className="">
          {user?.uid ?
            <div>
              {/* publisher check and profile  */}
              {userRole?.email === user?.email && userRole?.role === 'publisher' && <div>

                <div onClick={() => setCheckRole(!checkRole)} className="w-8 h-8 rounded-full cursor-pointer">
                  {user?.photoURL ? <FaUserCircle className="w-8 h-8 rounded-full border-red-400 border-2" /> : <FaUserCircle className="w-8 h-8 rounded-full border-red-400 border-2" />}
                </div>
                {
                  checkRole && <div className="absolute right-0 bg-blue-500 w-[150px] p-3 rounded-tr-none rounded-lg text-white">
                    <h1>Profile </h1>
                    <button onClick={() => userLogOut()} className="">Log out</button>
                  </div>
                }
              </div>}

              {/* admin check and profile  */}
              {userRole?.role === 'admin' && <div>

                <div onClick={() => setCheckRole(!checkRole)} className="w-8 h-8 rounded-full cursor-pointer">
                  {user?.photoURL ? <img src={user?.photoURL} className='w-8 h-8 border-2 border-red-400 rounded-full' alt="" /> : <FaUserCircle className="w-8 h-8 rounded-full border-red-400 border-2" />}
                </div>
                {
                  checkRole && <div>admin</div>
                }
              </div>}
            </div>
            : <Link
              to="/login"
              className="text-white font-bold py-1 px-2 bg-blue-500 hover:bg-blue-700 rounded text-xs"
            >
              LOGIN
            </Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
