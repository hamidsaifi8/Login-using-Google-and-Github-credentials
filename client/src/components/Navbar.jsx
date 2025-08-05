import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import axios from "axios";

const Navbar = () => {
  const [userdata, setUserdata] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3007/login/success", {
        withCredentials: true,
        credentials: "include",
      });
      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <h1>GoogleAuth</h1>
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center space-x-4 text-gray-700 font-medium">
            {Object?.keys(userdata)?.length > 0 ? (
              <>
                <li>
                  <NavLink to="/profile">
                    <img
                      src={userdata?.photo || "/default-profile.png"}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 hover:scale-105 transition-transform duration-200"
                    />
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className=" transition-colors duration-200 hover:bg-blue-700 bg-blue-600 text-white px-4 py-2 rounded-full text-md   font-bold"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
