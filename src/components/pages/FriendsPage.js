import React from "react";
import MobileWrapper from "../common/MobileWrapper";
import { useNavigate } from "react-router";

const FriendsPage = () => {
  const navigate = useNavigate();
  return (
    <MobileWrapper>
      <div className="flex justify-between mb-12 ">
        <h1 className="text-3xl font-extrabold">Friends</h1>
        <button
          className="text-sm  px-2 bg-black text-white border border-white rounded-xl"
          onClick={() => navigate("/add-contact")}
        >
          + Add Friends
        </button>
      </div>
      <p className="text-sm font-bold mb-8">
        Overall you lent {""} <span className="text-green-500">$1265.71</span>
      </p>
      <p className="font-bold mb-4">Friend's List</p>
      <div className="flex flex-col col-span-1 gap-3">
        <div className="flex justify-between ">
          <div className="flex gap-6 justify-start">
            <p className="rounded-full h-8 w-8 border border-black text-center">
              KP
            </p>
            <p className="font-bold">Karan Patel</p>
          </div>
          <div className="justify-end text-green-500 text-xs ">
            <p className="text-black">You lent</p>
            <p>$1200.98</p>
          </div>
        </div>
        {/* --------------- */}
        <div className="flex justify-between">
          <div className="flex gap-6 justify-start">
            <p className="rounded-full h-8 w-8 border border-black text-center">
              AP
            </p>
            <p className="font-bold">Aman Patel</p>
          </div>
          <div className="justify-end text-green-500 text-xs ">
            <p className="text-black">You lent</p>
            <p>$1200.98</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-6 justify-start">
            <p className="rounded-full h-8 w-8 border border-black text-center">
              NP
            </p>
            <p className="font-bold">Nikhil Patel</p>
          </div>
          <div className="justify-end text-green-500 text-xs ">
            <p className="text-black">You lent</p>
            <p>$1200.98</p>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default FriendsPage;
