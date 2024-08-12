import React from 'react';
import getWeatherSVG from "./getWeatherSVG";
import { FiWind } from 'react-icons/fi';
import { WiHumidity, WiDayFog, WiDaySunny, WiMoonWaxingCrescent1 } from 'react-icons/wi';
import useWeatherStore from '../Zustand/useWeatherStore';

const WeatherDetails = () => {
  const oneDayData = useWeatherStore((state) => state.oneDayData);
  const currentConditions = useWeatherStore((state) => state.currentConditions);

  // Check if oneDayData is available
  const isWeatherDataAvailable = oneDayData;

  return (
    <div className='flex'>
      {isWeatherDataAvailable ? (
        <>
          <div className="w-[50%]">
            <p className="font-semibold">{oneDayData.datetime}</p>
            <div className="flex gap-2 items-center">
              <img
                src={getWeatherSVG(oneDayData.condition)}
                alt={oneDayData.condition}
                className="w-16"
              />
              <h2 className="text-2xl font-semibold">{currentConditions.temp}°C</h2>
            </div>
            <p>{oneDayData.description}</p>
            <p>Cloud cover : {oneDayData.cloudcover}</p>
          </div>
          <div className="w-[50%]">
            <div className="flex justify-between">
              <p className="flex gap-2 items-center"><FiWind /> Wind</p>
              <p>{oneDayData.windspeed} km/h SE</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="flex gap-2 items-center"><WiHumidity /> Humidity</p>
              <p>{oneDayData.humidity} %</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="flex gap-2 items-center"><WiDayFog /> Visibility</p>
              <p>{oneDayData.visibility} km</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="flex gap-2 items-center"><WiDaySunny /> UV index</p>
              <p>{oneDayData.uvindex} mW/m2</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="flex gap-2 items-center"><WiMoonWaxingCrescent1 /> MoonPhase</p>
              <p>{oneDayData.moonphase}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="p-10 text-center">
          <p>Loading weather details...</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
