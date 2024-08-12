import React from "react";
import getWeatherSVG from "./utils/getWeatherSVG";
import useWeatherStore from "./Zustand/useWeatherStore";
import TimeFormat from "./utils/HoursConversion";

const Hero = () => {
  const city = useWeatherStore((state) => state.city);
  const currentConditions = useWeatherStore((state) => state.currentConditions);
  const fifteenDaysData = useWeatherStore((state) => state.fifteenDaysData);
  const resolvedAddress = useWeatherStore((state) => state.resolvedAddress);

  // Check if currentConditions is available
  const isWeatherDataAvailable = currentConditions && resolvedAddress;

  return (
    <div className="border mx-20 mt-10 rounded-md">
      {isWeatherDataAvailable ? (
        <div className="flex justify-between">
          <div className="p-10">
            <img
              src={getWeatherSVG(currentConditions.conditions)}
              alt={currentConditions.conditions}
            />
            <h1 className="text-2xl">{currentConditions.conditions}</h1>
            <h2 className="text-3xl">{currentConditions.temp}°C</h2>
            <div className="flex gap-2">
              <p>Sunrise :</p> <TimeFormat time24={currentConditions.sunrise} />
            </div>
          </div>

          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-3xl">{resolvedAddress}.</h1>
            <div className="flex gap-2 pt-1">
              <p>Humidity :</p> {currentConditions.humidity}
            </div>
            <div className="flex gap-2 pt-1">
              <p>Feelslike :</p> {currentConditions.feelslike}
            </div>
            <div className="flex gap-2 pt-1">
              <p>Dew :</p> {currentConditions.dew}
            </div>
            <div className="flex gap-2 pt-1">
              <p>Sunset :</p> <TimeFormat time24={currentConditions.sunset} />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-10 text-center">
          <p>Loading weather data...</p>
        </div>
      )}
    </div>
  );
};

export default Hero;
