import React from "react";
import MobileWrapper from "../common/MobileWrapper";

const Profile = () => {
  return (
    <MobileWrapper>
      <h1 className="text-3xl font-extrabold mb-3">Account Settings</h1>
      <div className="mt-8 pb-10 border-b-2 border-gray-300">
        <label className="text-md font-bold text-gray-400">Name</label>
        <input
          type="text"
          className="w-full border border-black rounded-lg px-4 py-1 mb-4"
          placeholder="New Name"
        />
        <label className="text-md font-bold text-gray-400">Email</label>
        <input
          type="text"
          className="w-full border border-black rounded-lg px-4 py-1"
          placeholder="New Email"
        />
      </div>
      <div>
        <p className="font-light text-opacity-90">
          Enter current and new password to change it.
        </p>
        <div className="my-6">
          <div className="mt-8">
            <label className="text-md font-bold text-gray-400">
              Current Password
            </label>
            <input
              type="text"
              className="w-full border border-black rounded-lg px-4 py-1 mb-4"
            />
            <label className="text-md font-bold text-gray-400">
              New Password
            </label>
            <input
              type="password"
              className="w-full border border-black rounded-lg px-4 py-1 mb-4"
              placeholder="new password"
            />
            <label className="text-md font-bold text-gray-400">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full border border-black rounded-lg px-4 py-1"
              placeholder="confirm newPassword"
            />
          </div>
          <div className="mt-1">
            <div className="text-xs mb-6">
              <p>Password criteria</p>
              <li>At least 8 characters</li>
              <li>At least 1 number</li>
              <li>At least 1 special character</li>
            </div>
            <button className="px-4 py-2 bg-black text-white border border-white rounded-xl">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default Profile;
