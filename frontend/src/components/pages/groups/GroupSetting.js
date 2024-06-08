import React, { useState } from "react";
import MobileWrapper from "../../common/MobileWrapper";
import { useNavigate } from "react-router";

const GroupSetting = () => {
  const [groupNameEdit, setGroupNameEdit] = useState(true);
  const navigate = useNavigate();
  const handleEdit = () => {
    setGroupNameEdit(!groupNameEdit);
  };
  const handleEditConfirm = () => {
    setGroupNameEdit(!groupNameEdit);
  };

  return (
    <MobileWrapper>
      <div className="flex justify-between mb-6">
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
        <h1 className="text-lg font-semibold">Group Setting</h1>
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
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between mb-6">
        {groupNameEdit ? (
          <p className="text-md font-bold">Trip to Rishikesh</p>
        ) : (
          <p className="text-md font-bold">New group name</p>
        )}

        {groupNameEdit ? (
          <button onClick={handleEdit}>
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
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              />
            </svg>
          </button>
        ) : (
          <button onClick={handleEditConfirm}>
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
        )}
      </div>
      <div className="flex gap-3 mb-3">
        <button
          className="text-xs  px-2 py-1 bg-black text-white border border-white rounded-xl"
          onClick={() => {
            navigate("/add-member");
          }}
        >
          + Add Member
        </button>
        <button className="flex justify-between items-center gap-2 text-sm  px-2 py-1 bg-white text-red-500 border border-black rounded-xl">
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
              d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
            />
          </svg>
          Leave
        </button>
      </div>
      <p className="text-xs font-thin mb-10">
        You can't leave this group until all outstanding amounts between you and
        your group members are settle
      </p>
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

export default GroupSetting;
