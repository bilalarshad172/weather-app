import React, { useState } from "react";
import WeatherDetails from "./utils/WeatherDetails";
import { FiClock, FiCalendar } from "react-icons/fi";
import { WiDaySunny } from "react-icons/wi";
import { FaBalanceScale } from 'react-icons/fa';
import HourlyForecast from "./utils/HourlyForecast";
import WeeklyForecast from "./utils/WeeklyForecast";
import FifteenDaysWeather from "./utils/FifteenDaysWeather";
import WeatherComparison from "./utils/WeatherComparison";
import { useTheme } from "./ThemeContext";

const WeatherTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center mb-10 md:mb-20">
      <div
        role="tablist"
        className="w-[95%] md:w-[90%] lg:w-[80%] mx-2 md:mx-10 lg:mx-20 mt-6 md:mt-10 rounded-xl overflow-hidden shadow-elevated"
      >
        <div className="flex flex-wrap md:flex-nowrap">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`tab w-full md:w-1/5 text-center cursor-pointer h-20 relative overflow-hidden group ${
              activeTab === "tab1"
                ? theme === 'light'
                  ? "bg-[#3B4D61] text-white"
                  : "bg-[#182848] text-white"
                : "bg-[#2A2F38] text-white"
            } transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-primary-light/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex gap-2 justify-center items-center relative z-10">
              <WiDaySunny className={`w-8 h-8 ${activeTab === "tab1" ? "text-accent-light" : ""} transition-all duration-300 group-hover:scale-110`} />
              <p className="font-medium">Today's Weather</p>
            </div>
            {activeTab === "tab1" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>}
          </button>

          <button
            onClick={() => setActiveTab("tab2")}
            className={`tab w-full md:w-1/5 text-center cursor-pointer h-20 relative overflow-hidden group ${
              activeTab === "tab2"
                ? theme === 'light'
                  ? "bg-[#3B4D61] text-white"
                  : "bg-[#182848] text-white"
                : "bg-[#2A2F38] text-white"
            } transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-primary-light/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex gap-2 justify-center items-center relative z-10">
              <FiClock className={`w-6 h-6 ${activeTab === "tab2" ? "text-accent-light" : ""} transition-all duration-300 group-hover:scale-110`} />
              <p className="font-medium">Hourly Weather</p>
            </div>
            {activeTab === "tab2" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>}
          </button>

          <button
            onClick={() => setActiveTab("tab3")}
            className={`tab w-full md:w-1/5 text-center cursor-pointer h-20 relative overflow-hidden group ${
              activeTab === "tab3"
                ? theme === 'light'
                  ? "bg-[#3B4D61] text-white"
                  : "bg-[#182848] text-white"
                : "bg-[#2A2F38] text-white"
            } transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-primary-light/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex gap-2 justify-center items-center relative z-10">
              <FiCalendar className={`w-6 h-6 ${activeTab === "tab3" ? "text-accent-light" : ""} transition-all duration-300 group-hover:scale-110`} />
              <p className="font-medium">7 Days Forecast</p>
            </div>
            {activeTab === "tab3" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>}
          </button>

          <button
            onClick={() => setActiveTab("tab4")}
            className={`tab w-full md:w-1/5 text-center cursor-pointer h-20 relative overflow-hidden group ${
              activeTab === "tab4"
                ? theme === 'light'
                  ? "bg-[#3B4D61] text-white"
                  : "bg-[#182848] text-white"
                : "bg-[#2A2F38] text-white"
            } transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-primary-light/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex gap-2 justify-center items-center relative z-10">
              <FiCalendar className={`w-6 h-6 ${activeTab === "tab4" ? "text-accent-light" : ""} transition-all duration-300 group-hover:scale-110`} />
              <p className="font-medium">15 Days Forecast</p>
            </div>
            {activeTab === "tab4" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>}
          </button>

          <button
            onClick={() => setActiveTab("tab5")}
            className={`tab w-full md:w-1/5 text-center cursor-pointer h-20 relative overflow-hidden group ${
              activeTab === "tab5"
                ? theme === 'light'
                  ? "bg-[#3B4D61] text-white"
                  : "bg-[#182848] text-white"
                : "bg-[#2A2F38] text-white"
            } transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-primary-light/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex gap-2 justify-center items-center relative z-10">
              <FaBalanceScale className={`w-6 h-6 ${activeTab === "tab5" ? "text-accent-light" : ""} transition-all duration-300 group-hover:scale-110`} />
              <p className="font-medium">Comparison</p>
            </div>
            {activeTab === "tab5" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>}
          </button>
        </div>
      </div>

      <div className={`tab-content-container mt-4 md:mt-6 ${theme === 'light' ? 'bg-white' : 'bg-[#2A2F38] text-white'} rounded-xl p-4 md:p-6 w-[95%] md:w-[90%] lg:w-[80%] mx-2 md:mx-10 lg:mx-20 shadow-card`}>
        <div className="transition-opacity duration-300">
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
    </div>
  );
};

export default WeatherTabs;
