import React, { useEffect, useState } from "react";
import getWeatherSVG from "./utils/getWeatherSVG";
import useWeatherStore from "./Zustand/useWeatherStore";
import TimeFormat from "./utils/HoursConversion";
import getWeatherBackground from "./utils/getWeatherBackground";

const Hero = () => {
  const currentConditions = useWeatherStore((state) => state.currentConditions);
  const resolvedAddress = useWeatherStore((state) => state.resolvedAddress);
  const alerts = useWeatherStore((state) => state.alerts);
  const timezone = useWeatherStore((state) => state.timezone);
  const [backgroundVideo, setBackgoundVideo] = useState(null);
  useEffect(() => {
    const isWeatherDataAvailable = currentConditions && resolvedAddress;
    let video = isWeatherDataAvailable
      ? getWeatherBackground(currentConditions.conditions)
      : null;
    setBackgoundVideo(video);
  }, [currentConditions]);
  // Check if currentConditions is available
  const isWeatherDataAvailable = currentConditions && resolvedAddress;

  return (
    <div className="relative  mx-20 mt-10 rounded-md overflow-hidden z-0">
      {backgroundVideo && (
        <video
          key={backgroundVideo} // This forces React to treat the video element as new when the backgroundVideo changes
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
        {isWeatherDataAvailable ? (
          <div className="flex justify-between">
            <div className="p-10">
              <img
                src={getWeatherSVG(currentConditions.conditions)}
                alt={currentConditions.conditions}
                 className="z-20"
              />
              <div className="bg-black bg-opacity-60 text-white p-4 rounded">
                <h1 className="text-2xl">{currentConditions.conditions}</h1>
                <h2 className="text-3xl">{currentConditions.temp}°C</h2>
                <div className="flex gap-2">
                  <p>Sunrise :</p>
                  <TimeFormat time24={currentConditions.sunrise} />
                </div>
                <div className="flex gap-2">
                  <p>Time Zone :</p>
                  {timezone}
                </div>
                <div role="alert" className="alert mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className={`h-6 w-6 shrink-0 ${
                      alerts.length === 0 ? "stroke-info" : "stroke-warning"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    {alerts.length === 0 ? "Nothing Alarming." : alerts}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-center bg-black bg-opacity-60 text-white rounded">
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
    </div>
  );
};

export default Hero;
