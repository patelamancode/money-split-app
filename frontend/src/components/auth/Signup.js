import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    consfirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-screen w-full">
      <div className="mx-8 my-8">
        <div className="flex gap-4">
          <div className="h-8 w-8 rounded-xl">
            <img
              className="h-full w-full object-cover"
              src="https://cdn.onlinewebfonts.com/svg/img_446673.png"
              alt="split-logo"
            />
          </div>
          <h2 className="text-2xl font-bold">Sign me up !</h2>
        </div>
        <div className="mt-8">
          <label className="text-md font-bold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-black rounded-lg px-4 py-2 mb-6"
            placeholder="Your name please..."
            onChange={handleChange}
          />
          <label className="text-md font-bold">Email</label>
          <input
            type="text"
            name="email"
            className="w-full border border-black rounded-lg px-4 py-2 mb-6"
            placeholder="Email"
            onChange={handleChange}
          />
          <label className="text-md font-bold">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border border-black rounded-lg px-4 py-2 mb-6"
            placeholder="Password"
            onChange={handleChange}
          />
          <label className="text-md font-bold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full border border-black rounded-lg px-4 py-2"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="mt-1">
          <div className="text-xs mb-6">
            <p>Password criteria</p>
            <li>At least 8 characters</li>
            <li>At least 1 number</li>
            <li>At least 1 special character</li>
          </div>
          <Link to="/login">
            <p className="text-sm mb-5">
              Already have an account ? <span className="font-bold">Login</span>
            </p>
          </Link>
          <button
            className="px-4 py-2 bg-black text-white border border-white rounded-xl"
            onClick={handleSignupSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
