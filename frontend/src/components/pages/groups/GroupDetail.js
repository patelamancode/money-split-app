import React from "react";
import MobileWrapper from "../../common/MobileWrapper";
import { useNavigate } from "react-router";
const GroupDetail = () => {
  const navigate = useNavigate();
  return (
    <MobileWrapper>
      <div className="flex justify-between mb-5">
        <button onClick={() => window.history.back()}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold">Trip to Rishikesh</h1>
        <button onClick={() => navigate("/groups/1/edit")}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z" />
          </svg>
        </button>
      </div>
      <div className="mb-5">
        <p className="text-opacity-40 text-xs">
          Rishi owes you{""}{" "}
          <span className="text-green-500 font-bold">$1265.71</span>
        </p>
        <p className="text-opacity-40 text-xs">
          Rishi owes you{""}{" "}
          <span className="text-green-500 font-bold">$1265.71</span>
        </p>
        <p className="text-opacity-40 text-xs">
          Rishi owes you{""}{" "}
          <span className="text-green-500 font-bold">$1265.71</span>
        </p>
      </div>
      <div className="flex gap-3 mb-5">
        <button className="text-xs  px-2 py-1 bg-black text-white border border-white rounded-xl">
          Settle Up
        </button>
        <button className="text-xs  px-2 py-1 bg-black text-white border border-white rounded-xl">
          Calculation
        </button>
        <button className="text-xs  px-2 py-1 bg-black text-white border border-white rounded-xl">
          History
        </button>
      </div>
      <div className="flex flex-col col-span-1 gap-3">
        <div className="flex justify-between">
          <div className="flex justify-start gap-2 text-xs">
            <div>
              <p>Dec</p>
              <p>17</p>
            </div>
            <div>logo</div>
            <div>
              <p className="font-semibold">Food and chips</p>
              <p className="text-opacity-75">you paid $1200.98</p>
            </div>
          </div>
          <div className="text-green-500 text-xs ">
            <p className="text-black">You lent</p>
            <p>$1200.98</p>
          </div>
        </div>
        {/* ----------------- */}
        <div className="flex justify-between">
          <div className="flex justify-start gap-2 text-xs">
            <div>
              <p>Dec</p>
              <p>17</p>
            </div>
            <div>logo</div>
            <div>
              <p className="font-semibold">Food and chips</p>
              <p className="text-opacity-75">you paid $1200.98</p>
            </div>
          </div>
          <div className="text-green-500 text-xs ">
            <p className="text-black">You lent</p>
            <p>$1200.98</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start gap-2 text-xs">
            <div>
              <p>Dec</p>
              <p>17</p>
            </div>
            <div>logo</div>
            <div>
              <p className="font-semibold">Food and chips</p>
              <p className="text-opacity-75">you paid $1200.98</p>
            </div>
          </div>
          <div className="text-green-500 text-xs ">
            <p className="text-black">You lent</p>
            <p>$1200.98</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start gap-2 text-xs">
            <div>
              <p>Dec</p>
              <p>17</p>
            </div>
            <div>logo</div>
            <div>
              <p className="font-semibold">Food and chips</p>
              <p className="text-opacity-75">you paid $1200.98</p>
            </div>
          </div>
          <div className="text-green-500 text-xs ">
            <p className="text-black">You lent</p>
            <p>$1200.98</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start gap-2 text-xs">
            <div>
              <p>Dec</p>
              <p>17</p>
            </div>
            <div>logo</div>
            <div>
              <p className="font-semibold">Food and chips</p>
              <p className="text-opacity-75">you paid $1200.98</p>
            </div>
          </div>
          <div className="text-green-500 text-xs ">
            <p className="text-black">You lent</p>
            <p>$1200.98</p>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default GroupDetail;
