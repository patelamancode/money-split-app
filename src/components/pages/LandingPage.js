import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-screen flex flex-col items-center space-y-28">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 rounded-xl">
            <img
              className="h-full w-full object-cover"
              src="https://cdn.onlinewebfonts.com/svg/img_446673.png"
              alt="split-logo"
            />
          </div>
          <h1 className="text-3xl font-extrabold mt-6">Split-Wisely</h1>
        </div>
        <div className="w-[80%] flex flex-col space-y-5">
          <Link
            className="px-4 py-2 bg-black text-white border border-white rounded-xl inline-block text-center"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="px-4 py-2 bg-white text-black border border-black rounded-xl inline-block text-center"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
