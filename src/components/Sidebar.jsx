import React from "react";
import { FaBars } from "react-icons/fa";
import useWeatherStore from "./Zustand/useWeatherStore";
import Card from "./Card";

const Sidebar = () => {
  const storedCities = useWeatherStore((state) => state.storedCities);
  const searchQuery = useWeatherStore((state) => state.searchQuery);
  const setSearchQuery = useWeatherStore((state) => state.setSearchQuery);

  const filteredCities = storedCities.filter((city) =>
    city.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center">
        <label
          htmlFor="my-drawer"
          className="mt-2 ml-4 p-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer inline-flex items-center justify-center"
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
        <div className="menu bg-base-200 relative z-20 text-base-content min-h-full w-80 p-4">
          <input
            type="text"
            placeholder="Search Added cities"
            className="input input-bordered w-full max-w-xs mb-4"
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
