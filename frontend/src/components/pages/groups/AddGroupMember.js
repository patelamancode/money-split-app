import React from "react";
import MobileWrapper from "../../common/MobileWrapper";
import { useNavigate } from "react-router";

const AddGroupMember = () => {
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
        <p className="text-md">Add Group Member</p>
        <button>
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
              d="M5 11.917 9.724 16.5 19 7.5"
            />
          </svg>
        </button>
      </div>
      <h1 className="text-xl font-bold mb-6">Trip to Rishikesh</h1>

      <div className="mb-5 flex flex-row gap-6">
        <div className="flex flex-col col-span-1 justify-center items-center">
          <p className="rounded-full h-8 w-8 border border-black text-center">
            KP
          </p>
          <div className="flex flex-col text-sm leading-tight">
            <p className="text-sm">Karan</p>
            <button className="flex justify-center items-center p-3">
              <svg
                className="w-3 h-3 text-red-700 bg-white dark:text-white rounded-full border border-red-700"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* --------------- */}
        <div className="flex flex-col col-span-1 justify-center items-center">
          <p className="rounded-full h-8 w-8 border border-black text-center">
            AP
          </p>
          <div className="flex flex-col text-sm leading-tight">
            <p>Aman</p>
            <button className="flex justify-center items-center p-3">
              <svg
                className="w-3 h-3 text-red-700 bg-white dark:text-white rounded-full border border-red-700"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col col-span-1 justify-center items-center">
          <p className="rounded-full h-8 w-8 border border-black text-center">
            ZI
          </p>
          <div className="flex flex-col text-sm leading-tight">
            <p>Zafar</p>
            <button className="flex justify-center items-center p-3">
              <svg
                className="w-3 h-3 text-red-700 bg-white dark:text-white rounded-full border border-red-700"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-5">
        <button
          className="flex justify-between items-center gap-2 text-sm  px-2 py-1 bg-black text-white border border-black rounded-xl"
          onClick={() => {
            navigate("/add-contact");
          }}
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
              d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          Add new contact to splitter
        </button>
      </div>

      <div>
        <p className="text-sm font-bold text-gray-400 mb-6">Group members</p>
        <div className="flex gap-3 flex-col col-span-1">
          <div className="flex gap-6 justify-start items-center">
            <p className="rounded-full h-8 w-8 border border-black text-center">
              KP
            </p>
            <div className="flex flex-col text-sm leading-tight">
              <p className="font-bold">Karan Patel</p>
              <p>karanpatel@gmail.com</p>
            </div>
          </div>
          {/* ---------- */}
          <div className="flex gap-6 justify-start items-center">
            <p className="rounded-full h-8 w-8 border border-black text-center">
              RM
            </p>
            <div className="flex flex-col text-sm leading-tight">
              <p className="font-bold">Karan Patel</p>
              <p>Rishimishra@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-6 justify-start items-center">
            <p className="rounded-full h-8 w-8 border border-black text-center">
              Ap
            </p>
            <div className="flex flex-col text-sm leading-tight">
              <p className="font-bold">Karan Patel</p>
              <p>Amanpatel@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default AddGroupMember;
