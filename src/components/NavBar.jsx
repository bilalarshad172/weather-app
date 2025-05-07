import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Logo from "../assets/logo.png";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import useWeatherStore from "./Zustand/useWeatherStore";
import { useTheme } from "./ThemeContext";

const NavBar = () => {
  const [cityInput, setCityInput] = useState("Islamabad");
  const fetchWeatherData = useWeatherStore((state) => state.fetchWeatherData);
  const addCityToLocalStorage = useWeatherStore((state) => state.addCityToLocalStorage);
  const resolvedAddress = useWeatherStore((state) => state.resolvedAddress);
  const currentCondition = useWeatherStore((state) => state.currentConditions);
  const { theme, toggleTheme } = useTheme();

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
    <div className={`${theme === 'light' ? 'bg-[#3B4D61]' : 'bg-gradient-primary'} shadow-md`}>
      {/* Desktop NavBar */}
      <div className="hidden md:flex justify-between items-center px-6 h-32">
        <div className="flex gap-4 w-1/3 items-center">
          <Sidebar theme={theme} />
          <div className="flex gap-3 items-center">
            <div className="p-2 bg-white rounded-full shadow-md">
              <img src={Logo} className="w-12 h-12" alt="Logo" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Live <br /> <span className="text-accent-light">Weather</span>
            </h2>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-xl text-center font-semibold text-white">{resolvedAddress || 'Loading...'}</h1>
          <h3 className="text-center text-2xl font-bold text-accent-light">
            {currentCondition?.temp ? `${currentCondition.temp}°C` : 'Loading...'}
          </h3>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <form onSubmit={handleSearch} className="flex-grow">
            <div className="flex gap-2 items-center justify-center">
              <input
                type="text"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                placeholder="Search city..."
                className="input-styled bg-white/90 w-64 transition-all focus:w-72"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaSearch />
              </button>
            </div>
          </form>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-3 rounded-full ${theme === 'light' ? 'bg-[#F8B500] hover:bg-[#E09F00]' : 'bg-white/20 hover:bg-white/30'} text-white transition-all duration-300 shadow-md`}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile NavBar */}
      <div className="md:hidden flex flex-col py-4 px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Sidebar theme={theme} />
            <div className="flex items-center">
              <div className="p-1 bg-white rounded-full shadow-md mr-2">
                <img src={Logo} className="w-8 h-8" alt="Logo" />
              </div>
              <h2 className="text-xl font-bold text-white">
                Live <span className="text-accent-light">Weather</span>
              </h2>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'light' ? 'bg-[#F8B500]' : 'bg-white/20'} text-white transition-all duration-300 shadow-md`}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
          </button>
        </div>

        <div className="text-center mb-3">
          <h1 className="text-lg font-semibold text-white">{resolvedAddress || 'Loading...'}</h1>
          <h3 className="text-xl font-bold text-accent-light">
            {currentCondition?.temp ? `${currentCondition.temp}°C` : 'Loading...'}
          </h3>
        </div>

        <form onSubmit={handleSearch} className="w-full">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              placeholder="Search city..."
              className="input-styled bg-white/90 flex-grow"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-dark text-white p-2 rounded-full transition-all duration-300 shadow-md"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
