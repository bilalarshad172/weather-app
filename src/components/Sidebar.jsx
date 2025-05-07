import React from "react";
import { FaBars } from "react-icons/fa";
import useWeatherStore from "./Zustand/useWeatherStore";
import Card from "./Card";
import { useTheme } from "./ThemeContext";

const Sidebar = ({ theme }) => {
  const storedCities = useWeatherStore((state) => state.storedCities);
  const searchQuery = useWeatherStore((state) => state.searchQuery);
  const setSearchQuery = useWeatherStore((state) => state.setSearchQuery);
  const { theme: contextTheme } = useTheme();

  // Use the prop if provided, otherwise use the context
  const currentTheme = theme || contextTheme;

  const filteredCities = storedCities.filter((city) =>
    city.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center">
        <label
          htmlFor="my-drawer"
          className={`mt-2 ml-4 p-2 rounded-md ${currentTheme === 'light' ? 'bg-white hover:bg-[#E4E7EB] text-[#3B4D61]' : 'bg-[#2A2F38] hover:bg-[#3F4756] text-white'} cursor-pointer inline-flex items-center justify-center shadow-sm transition-all duration-300`}
        >
          <FaBars />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className={`menu ${currentTheme === 'light' ? 'bg-white text-[#2A2F38]' : 'bg-[#2A2F38] text-white'} relative z-20 min-h-full w-80 p-4 shadow-lg`}>
          <input
            type="text"
            placeholder="Search Added cities"
            className={`input-styled w-full max-w-xs mb-4 ${currentTheme === 'light' ? 'bg-[#F5F7FA]' : 'bg-white/10'}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredCities.map((cityData, index) => (
            <Card key={index} cityData={cityData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
