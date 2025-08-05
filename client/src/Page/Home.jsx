import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to Our App!
      </h1>
      <p className="text-gray-700 text-lg mb-6 text-center max-w-xl">
        This is a simple authentication-based app using Google OAuth. Sign in to
        explore your dashboard and access personalized features.
      </p>
      <Link
        to="/login"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
