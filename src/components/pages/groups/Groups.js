import React from "react";
import MobileWrapper from "../../common/MobileWrapper";
import { useNavigate } from "react-router";

const Groups = () => {
  const navigate = useNavigate();
  const goToGroupdetail = () => {
    navigate("/groups/1");
  };
  return (
    <MobileWrapper>
      <div className="flex justify-between ">
        <h1 className="text-3xl font-extrabold">Groups</h1>
        <button className="text-sm  px-2 bg-black text-white border border-white rounded-xl">
          + Add Groups
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <div className="bg-slate-200 flex flex-col col-span-1 p-3 rounded-2xl">
          <p className="font-bold">Trip to Rishikesh</p>
          <div className="flex justify-between mb-4">
            <p className="text-opacity-40 text-xs">Rishi, Aman, Zafar, Karan</p>
            <button
              className=" border rounded-full border-black"
              onClick={goToGroupdetail}
            >
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-opacity-40 text-xs font-semibold">4 Members</p>
            <p className="text-opacity-40 text-xs">
              You get back{" "}
              <span className="text-green-500 font-bold">$1265.71</span>
            </p>
          </div>
        </div>
        {/* -------------- */}

        <div className="bg-slate-200 flex flex-col col-span-1 p-3 rounded-2xl">
          <p className="font-bold">Trip to Rishikesh</p>
          <div className="flex justify-between mb-4">
            <p className="text-opacity-40 text-xs">Rishi, Aman, Zafar, Karan</p>
            <button className=" border rounded-full border-black">
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-opacity-40 text-xs font-semibold">4 Members</p>
            <p className="text-opacity-40 text-xs">
              You get back{" "}
              <span className="text-green-500 font-bold">$1265.71</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-200 flex flex-col col-span-1 p-3 rounded-2xl">
          <p className="font-bold">Trip to Rishikesh</p>
          <div className="flex justify-between mb-4">
            <p className="text-opacity-40 text-xs">Rishi, Aman, Zafar, Karan</p>
            <button className=" border rounded-full border-black">
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-opacity-40 text-xs font-semibold">4 Members</p>
            <p className="text-opacity-40 text-xs">
              You get back{" "}
              <span className="text-green-500 font-bold">$1265.71</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-200 flex flex-col col-span-1 p-3 rounded-2xl">
          <p className="font-bold">Trip to Rishikesh</p>
          <div className="flex justify-between mb-4">
            <p className="text-opacity-40 text-xs">Rishi, Aman, Zafar, Karan</p>
            <button className=" border rounded-full border-black">
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-opacity-40 text-xs font-semibold">4 Members</p>
            <p className="text-opacity-40 text-xs">
              You get back{" "}
              <span className="text-green-500 font-bold">$1265.71</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-200 flex flex-col col-span-1 p-3 rounded-2xl">
          <p className="font-bold">Trip to Rishikesh</p>
          <div className="flex justify-between mb-4">
            <p className="text-opacity-40 text-xs">Rishi, Aman, Zafar, Karan</p>
            <button className=" border rounded-full border-black">
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-opacity-40 text-xs font-semibold">4 Members</p>
            <p className="text-opacity-40 text-xs">
              You get back{" "}
              <span className="text-green-500 font-bold">$1265.71</span>
            </p>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default Groups;
