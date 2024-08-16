import React from "react";
import { FaBars } from "react-icons/fa";
import Card from "./Card";

const Sidebar = () => {
  return (
    <div className="z-10">
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
        <div className="menu bg-base-200 relative z-20 text-base-content min-h-full w-80 p-4 ">
          <input
            type="text"
            placeholder="Search Added cities"
            className="input input-bordered w-full max-w-xs"
          />
          <Card/>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
