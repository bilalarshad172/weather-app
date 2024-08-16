import React from "react";
import useWeatherStore from "./Zustand/useWeatherStore";
import getWeatherSVG from "./utils/getWeatherSVG";
import TimeFormat from "./utils/HoursConversion";
import getWeatherBackground from "./utils/getWeatherBackground";

const Card = ({ cityData }) => {
  const backgroundVideo = getWeatherBackground(
    cityData.currentConditions.conditions
  );

  return (
    <div className="relative mt-5 rounded overflow-hidden">
      {backgroundVideo && (
        <video
          key={backgroundVideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="relative z-10 p-4">
        <img
          src={getWeatherSVG(cityData.currentConditions.conditions)}
          alt={cityData.currentConditions.conditions}
        />
        <div className="flex justify-between">
          <div className="flex flex-col justify-center bg-black bg-opacity-60 p-2 rounded-md text-white">
            <h3>{cityData.city}</h3>
            <p>Temp: {cityData.currentConditions?.temp}°C</p>
          </div>
          <div className="flex flex-col justify-end text-end bg-black bg-opacity-60 p-2 rounded-md text-white">
            <p>{cityData.timezone}</p>
            <TimeFormat time24={cityData.currentConditions.datetime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
