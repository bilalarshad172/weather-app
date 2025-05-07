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
    <div className="relative mt-5 rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-[1.02] group">
      {backgroundVideo && (
        <>
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
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-dark/70 via-transparent to-transparent z-0"></div>
        </>
      )}

      <div className="relative z-10 p-5">
        <img
          src={getWeatherSVG(cityData.currentConditions.conditions)}
          alt={cityData.currentConditions.conditions}
          className="w-16 h-16 mx-auto mb-3 drop-shadow-lg transform transition-transform group-hover:scale-110 duration-300"
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-center bg-dark-dark/80 backdrop-blur-sm p-3 rounded-lg text-white">
            <h3 className="text-xl font-bold text-center text-accent-light">{cityData.city}</h3>
            <p className="text-center text-lg font-medium mt-1">
              {cityData.currentConditions?.temp}°C
            </p>
            <p className="text-center text-sm mt-1 text-light-dark">
              {cityData.currentConditions.conditions}
            </p>
          </div>

          <div className="flex justify-between items-center bg-dark-dark/80 backdrop-blur-sm p-3 rounded-lg text-white">
            <div>
              <p className="text-xs text-light-dark">Time Zone</p>
              <p className="text-sm">{cityData.timezone}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-light-dark">Local Time</p>
              <p className="text-sm"><TimeFormat time24={cityData.currentConditions.datetime} /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
