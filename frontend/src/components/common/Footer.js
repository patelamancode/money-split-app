import React, { useState } from "react";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");
  const footerIconList = [
    {
      _icon:
        "M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z",
      name: "Home",
    },
    {
      _icon:
        "M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z",
      name: "Groups",
    },
    {
      _icon:
        "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z",
      name: "Expense",
    },
    {
      _icon:
        "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z",
      name: "Activity",
    },
    {
      _icon:
        "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z",
      name: "Profile",
    },
  ];
  const handleIconClick = (name) => {
    if (name === "Home") {
      navigate("/friends");
    } else if (name === "Groups") {
      navigate("/groups");
    } else if (name === "Expense") {
      navigate("/expense");
    } else if (name === "Activity") {
      navigate("/activity");
    } else if (name === "Profile") {
      navigate("/profile");
    }
  };

  return (
    <div className="flex justify-between fixed bottom-0 left-0 w-full bg-white z-10 px-5 py-3">
      {footerIconList.map(({ _icon, name }) => (
        <div
          key={name}
          className="flex flex-col justify-center item-center w-10 h-10 cursor-pointer"
          onClick={() => {
            handleIconClick(name);
            setActiveTab(name);
          }}
        >
          <div className="flex justify-center">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" d={_icon} clipRule="evenodd" />
            </svg>
          </div>
          <p
            className={
              activeTab === name
                ? "text-sm font-bold text-gray-800 dark:text-white border-b-2 border-gray-900"
                : "text-sm text-gray-800 dark:text-white"
            }
          >
            {name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
