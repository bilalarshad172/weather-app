import React, { useEffect, useState } from "react";
import getWeatherSVG from "./utils/getWeatherSVG";
import useWeatherStore from "./Zustand/useWeatherStore";
import TimeFormat from "./utils/HoursConversion";
import getWeatherBackground from "./utils/getWeatherBackground";

const Hero = () => {
  const currentConditions = useWeatherStore((state) => state.currentConditions);
  const oneDayData = useWeatherStore((state) => state.oneDayData);
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
    <div className="relative mx-4 md:mx-10 lg:mx-20 mt-6 md:mt-10 rounded-xl overflow-hidden z-0 shadow-elevated">
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
          <div className="absolute inset-0 bg-gradient-to-r from-dark-dark/50 to-transparent z-0"></div>
        </>
      )}
      <div className="relative z-10 p-3 md:p-6">
        {isWeatherDataAvailable ? (
          <div className="flex justify-between flex-wrap md:flex-nowrap gap-6">
            <div className="p-6 w-full md:w-auto">
              <div className="flex items-center mb-4">
                <img
                  src={getWeatherSVG(currentConditions.conditions)}
                  alt={currentConditions.conditions}
                  className="w-24 h-24 mr-4 drop-shadow-lg transform transition-transform hover:scale-110 duration-300"
                />
                <div>
                  <h1 className="text-3xl font-bold text-white drop-shadow-md">{currentConditions.conditions}</h1>
                  <h2 className="text-4xl font-bold text-accent-light drop-shadow-md">{currentConditions.temp}°C</h2>
                </div>
              </div>
              <div className="bg-dark-dark/80 backdrop-blur-sm text-white p-6 rounded-xl shadow-card">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4 border-b border-white/20 pb-2">
                  <div className="flex gap-2 items-center mb-2 sm:mb-0">
                    <p className="font-semibold">Sunrise:</p>
                    <TimeFormat time24={currentConditions.sunrise} />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="font-semibold">Time Zone:</p>
                    <span className="text-secondary-light">{timezone}</span>
                  </div>
                </div>
                <div role="alert" className={`mt-4 p-4 rounded-lg ${alerts.length === 0 ? "bg-secondary/20" : "bg-accent/20"}`}>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className={`h-6 w-6 mr-3 ${
                        alerts.length === 0 ? "text-secondary-light" : "text-accent"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="font-medium">
                      {alerts.length === 0
                        ? "No weather alerts at this time."
                        : alerts.map((alert, index) => (
                            <div key={index} className="mb-1">
                              <strong className="text-accent">{alert.event}:</strong> {alert.headline}
                            </div>
                          ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-center bg-dark-dark/80 backdrop-blur-sm text-white rounded-xl shadow-card w-full md:w-auto">
              <h1 className="text-3xl font-bold mb-4 text-secondary-light drop-shadow-md">{resolvedAddress}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-dark/40 p-3 rounded-lg">
                  <p className="text-sm text-light-dark">Humidity</p>
                  <p className="text-xl font-semibold">{currentConditions.humidity}%</p>
                </div>

                <div className="bg-dark/40 p-3 rounded-lg">
                  <p className="text-sm text-light-dark">Feels Like</p>
                  <p className="text-xl font-semibold">{currentConditions.feelslike}°C</p>
                </div>

                <div className="bg-dark/40 p-3 rounded-lg">
                  <p className="text-sm text-light-dark">Dew Point</p>
                  <p className="text-xl font-semibold">{currentConditions.dew}°</p>
                </div>

                <div className="bg-dark/40 p-3 rounded-lg">
                  <p className="text-sm text-light-dark">Sunset</p>
                  <p className="text-xl font-semibold"><TimeFormat time24={currentConditions.sunset} /></p>
                </div>

                <div className="bg-dark/40 p-3 rounded-lg">
                  <p className="text-sm text-light-dark">Max Temp</p>
                  <p className="text-xl font-semibold">{oneDayData.tempmax}°C</p>
                </div>

                <div className="bg-dark/40 p-3 rounded-lg">
                  <p className="text-sm text-light-dark">Min Temp</p>
                  <p className="text-xl font-semibold">{oneDayData.tempmin}°C</p>
                </div>

                <div className="bg-dark/40 p-3 rounded-lg">
                  <p className="text-sm text-light-dark">Solar Radiation</p>
                  <p className="text-xl font-semibold">{oneDayData.solarradiation}</p>
                </div>

                <div className="bg-dark/40 p-3 rounded-lg">
                  <p className="text-sm text-light-dark">Severe Risk</p>
                  <p className="text-xl font-semibold">{oneDayData.severerisk}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-10 text-center h-80 flex items-center justify-center">
            <div className="animate-pulse">
              <div className="h-12 w-48 bg-dark-light/30 rounded-md mb-4 mx-auto"></div>
              <div className="h-8 w-64 bg-dark-light/20 rounded-md mx-auto"></div>
              <p className="mt-6 text-white text-xl">Loading weather data...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
