import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10 px-5 py-3 mb-40">
      <div className="flex justify-between">
        <div className="h-8 w-8 rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.onlinewebfonts.com/svg/img_446673.png"
            alt="split-logo"
          />
        </div>
        <button className="px-2 text-sm bg-white text-red-600 border border-black rounded-xl">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
