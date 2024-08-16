import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import useWeatherStore from "./Zustand/useWeatherStore";

const NavBar = () => {
  const [cityInput, setCityInput] = useState("Islamabad");
  const fetchWeatherData = useWeatherStore((state) => state.fetchWeatherData);
  const addCityToLocalStorage = useWeatherStore((state) => state.addCityToLocalStorage);
  const resolvedAddress = useWeatherStore((state) => state.resolvedAddress);
  const currentCondition = useWeatherStore((state) => state.currentConditions);

  useEffect(() => {
    // Fetch weather data for default city on page load
    fetchWeatherData(cityInput);
  }, [fetchWeatherData]);

  

  const handleSearch = async (e) => {
  e.preventDefault();
  if (cityInput) {
    // Fetch weather data for the city
    await fetchWeatherData(cityInput);

    // Get the current state of stored cities
    const weatherData = useWeatherStore.getState();
    const existingCities = useWeatherStore.getState().storedCities;

    // Check if the city already exists in local storage
    const cityExists = existingCities.some(
      (storedCity) => storedCity.city.toLowerCase() === cityInput.toLowerCase()
    );

    if (!cityExists) {
      // Add the city to local storage if it doesn't already exist
      addCityToLocalStorage({
        city: weatherData.city,
        currentConditions: weatherData.currentConditions,
        oneDayData: weatherData.oneDayData,
        sevenDaysData: weatherData.sevenDaysData,
        fifteenDaysData: weatherData.fifteenDaysData,
        timezone: weatherData.timezone,
        description: weatherData.description,
        latitude: weatherData.latitude,
        longitude: weatherData.longitude,
        alerts: weatherData.alerts,
        resolvedAddress: weatherData.resolvedAddress,
      });
    }

    setCityInput('');
    console.log(weatherData);
    // Optionally reset input value or handle UI updates here
  }
};


  return (
    <div className="h-32 bg-gray-800 flex justify-between items-center">
      <div className="flex gap-4 w-1/3 items-center">
        <Sidebar />
        <div className="flex gap-3 items-center">
          <img src={Logo} className="w-14 h-14" alt="Logo" />
          <h2 className="text-3xl">
            Live <br /> Weather
          </h2>
        </div>
      </div>
      <div className="w-1/3">
        <h1 className="text-xl text-center">{resolvedAddress || 'Loading...'}</h1>
        <h3 className="text-center text-xl">{currentCondition?.temp ? `${currentCondition.temp}°C` : 'Loading...'}</h3>
      </div>
      <div className="w-1/3">
        <form onSubmit={handleSearch}>
          <div className="flex gap-2 items-center justify-center">
            <input
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              placeholder="Type here"
              className="input input-bordered max-w-xs"
            />
            <div className="border rounded-xl flex items-center input-bordered p-3 mr-3">
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
