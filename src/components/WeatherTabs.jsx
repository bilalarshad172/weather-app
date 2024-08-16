import React, { useState } from "react";
import WeatherDetails from "./utils/WeatherDetails";
import { FiClock, FiCalendar } from "react-icons/fi";
import { WiDaySunny } from "react-icons/wi";
import { FaBalanceScale } from 'react-icons/fa';
import HourlyForecast from "./utils/HourlyForecast";
import WeeklyForecast from "./utils/WeeklyForecast";
import FifteenDaysWeather from "./utils/FifteenDaysWeather";
import WeatherComparison from "./utils/WeatherComparison";

const WeatherTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="flex flex-col items-center mb-20">
      <div
        role="tablist"
        className="tabs tabs-lifted  w-[80%] mx-20 mt-10 rounded-md"
      >
        <div className="flex">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`tab w-[25%] text-center cursor-pointer border-r-2 h-20 ${
              activeTab === "tab1"
                ? "bg-[#3B4D61] text-white"
                : "bg-[#2A2F38] text-[#B0BEC5]"
            } hover:bg-[#53687E] transition duration-300`}
          >
            <div className="flex gap-2 justify-center items-center">
              <WiDaySunny className="w-10 h-10" /> <p>Todays Weather</p>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`tab w-[25%] text-center cursor-pointer border-r-2 h-20 ${
              activeTab === "tab2"
                ? "bg-[#3B4D61] text-white"
                : "bg-[#2A2F38] text-[#B0BEC5]"
            } hover:bg-[#53687E] transition duration-300`}
          >
            <div className="flex gap-2 justify-center items-center">
              <FiClock className="w-10 h-10" /> <p>Hourly Weather</p>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("tab3")}
            className={`tab w-[25%] text-center cursor-pointer border-r-2 h-20 ${
              activeTab === "tab3"
                ? "bg-[#3B4D61] text-white"
                : "bg-[#2A2F38] text-[#B0BEC5]"
            } hover:bg-[#53687E] transition duration-300`}
          >
            <div className="flex gap-2 justify-center items-center">
              <FiCalendar className="w-10 h-10" /> <p>7 days Forecast</p>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("tab4")}
            className={`tab w-[25%] text-center cursor-pointer border-r-2 h-20 ${
              activeTab === "tab4"
                ? "bg-[#3B4D61] text-white"
                : "bg-[#2A2F38] text-[#B0BEC5]"
            } hover:bg-[#53687E] transition duration-300`}
          >
            <div className="flex gap-2 justify-center items-center">
              <FiCalendar className="w-10 h-10" /> <p>15 days Forecast</p>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("tab5")}
            className={`tab w-[25%] text-center cursor-pointer h-20 ${
              activeTab === "tab5"
                ? "bg-[#3B4D61] text-white"
                : "bg-[#2A2F38] text-[#B0BEC5]"
            } hover:bg-[#53687E] transition duration-300`}
          >
            <div className="flex gap-2 justify-center items-center">
              <FaBalanceScale className="w-10 h-10" /> <p>Comparison</p>
            </div>
          </button>
        </div>
      </div>

      <div className="tab-content-container mt-4 border rounded p-6 w-[80%] mx-20">
        {activeTab === "tab1" && (
          <div role="tabpanel">
            <WeatherDetails />
          </div>
        )}
        {activeTab === "tab2" && (
          <div role="tabpanel">
            <HourlyForecast />
          </div>
        )}
        {activeTab === "tab3" && (
          <div role="tabpanel">
            <WeeklyForecast />
          </div>
        )}
        {activeTab === "tab4" && (
          <div role="tabpanel">
            <FifteenDaysWeather />
          </div>
        )}
        {activeTab === "tab5" && (
          <div role="tabpanel">
            <WeatherComparison />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherTabs;
