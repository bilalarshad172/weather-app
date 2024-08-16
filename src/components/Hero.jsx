import React, { useEffect, useState } from "react";
import getWeatherSVG from "./utils/getWeatherSVG";
import useWeatherStore from "./Zustand/useWeatherStore";
import TimeFormat from "./utils/HoursConversion";
import getWeatherBackground from "./utils/getWeatherBackground";

const Hero = () => {
  const currentConditions = useWeatherStore((state) => state.currentConditions);
  const resolvedAddress = useWeatherStore((state) => state.resolvedAddress);
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
    <div className="relative border mx-20 mt-10 rounded-md overflow-hidden">
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
      <div className="relative z-10 p-10">
        {isWeatherDataAvailable ? (
          <div className="flex justify-between">
            <div className="p-10">
              <img
                src={getWeatherSVG(currentConditions.conditions)}
                alt={currentConditions.conditions}
              />
              <div className="bg-black bg-opacity-60 text-white p-4 rounded">
                <h1 className="text-2xl">{currentConditions.conditions}</h1>
                <h2 className="text-3xl">{currentConditions.temp}°C</h2>
                <div className="flex gap-2">
                  <p>Sunrise :</p>{" "}
                  <TimeFormat time24={currentConditions.sunrise} />
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
