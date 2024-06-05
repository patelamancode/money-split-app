import React, { useState } from "react";
import MobileWrapper from "../../common/MobileWrapper";

const NewContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
        <p className="text-md">Add New Contact</p>
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
      <div className="mt-8">
        <label className="text-md font-bold">Name</label>
        <input
          type="text"
          className="w-full border border-black rounded-lg px-4 py-2 mb-6"
          placeholder="Your name please..."
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text-md font-bold">Email</label>
        <input
          type="text"
          className="w-full border border-black rounded-lg px-4 py-2 mb-6"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-md font-bold">{`Select group (optional)`}</label>
        <input
          type="text"
          className="w-full border border-black rounded-lg px-4 py-2 mb-1"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <p className="text-xs font-thin  pl-3">
        select group if you want to add this new contact to any existing group
      </p>
    </MobileWrapper>
  );
};

export default NewContact;
