import React, { useState } from "react";
import WeatherDetails from "./utils/WeatherDetails";
import { FiClock } from 'react-icons/fi';
import { WiDaySunny } from 'react-icons/wi';
import HourlyForecast from "./utils/HourlyForecast";

const WeatherTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 

  return (
    <div className="flex flex-col items-center mb-20">
      <div
        role="tablist"
        className="tabs tabs-lifted border w-[80%] mx-20 mt-10 rounded-md"
      >
        <div className="flex">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`tab w-[25%] text-center cursor-pointer border-r-2 h-20 ${
              activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-200"
            } hover:bg-blue-400 transition duration-300`}
          >
            <div className="flex gap-2 justify-center items-center">
              <WiDaySunny className="w-10 h-10" /> <p> Todays Weather</p>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`tab w-[25%] text-center cursor-pointer border-r-2 h-20 ${
              activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-200"
            } hover:bg-blue-400 transition duration-300`}
          >
            <div className="flex gap-2 justify-center items-center">
              <FiClock className="w-10 h-10" /> <p> Hourly Weather</p>
              </div>
          </button>
          <button
            onClick={() => setActiveTab("tab3")}
            className={`tab w-[25%] text-center cursor-pointer border-r-2 h-20 ${
              activeTab === "tab3" ? "bg-blue-500 text-white" : "bg-gray-200"
            } hover:bg-blue-400 transition duration-300`}
          >
            Tab 3
          </button>
          <button
            onClick={() => setActiveTab("tab4")}
            className={`tab w-[25%] text-center cursor-pointer  h-20 ${
              activeTab === "tab4" ? "bg-blue-500 text-white" : "bg-gray-200"
            } hover:bg-blue-400 transition duration-300`}
          >
            Tab 4
          </button>
        </div>
      </div>

      <div className="tab-content-container border  p-6 w-[80%] mx-20">
        {activeTab === "tab1" && (
          <div role="tabpanel" >
            <WeatherDetails/>
          </div>
        )}
        {activeTab === "tab2" && <div role="tabpanel"><HourlyForecast/></div>}
        {activeTab === "tab3" && <div role="tabpanel">Tab content 3</div>}
        {activeTab === "tab4" && <div role="tabpanel">Tab content 4</div>}
      </div>
    </div>
  );
};

export default WeatherTabs;
