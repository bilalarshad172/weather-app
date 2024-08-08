import React from "react";
import Sidebar from "./Sidebar";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="h-32 border flex justify-between items-center">
        <div className="flex gap-4 w-1/3">
          <Sidebar />
          <img src={Logo} className="w-14 h-14" />
        </div>
        <div className="w-1/3">city data</div>
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
