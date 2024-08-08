import React from "react";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center">
        {/* Page content here */}
        <label htmlFor="my-drawer" className=" mt-2 ml-4 p-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer inline-flex items-center justify-center">
          <FaBars />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
