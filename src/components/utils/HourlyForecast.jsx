import React from 'react';
import useWeatherStore from '../Zustand/useWeatherStore';
import getWeatherSVG from "./getWeatherSVG";
import TimeFormat from './HoursConversion';

const HourlyForecast = () => {
  const hourlyData = useWeatherStore((state) => state.hourlyData);

  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * 9/5) + 32).toFixed(1);
  };

  return (
    <div className='scroll-container'>
      <div className='scroll-content'>
        {hourlyData.concat(hourlyData).map((hour, index) => ( // Duplicate data for seamless scroll
          <div key={index} className='scroll-item'>
            <div className='card'>
              <TimeFormat time24={hour.datetime} /> 
              <img 
                src={getWeatherSVG(hour.conditions)} 
                alt={hour.conditions} 
                className='w-12 h-12 object-cover'
              />
              <p>🌡️{hour.temp}°C | {celsiusToFahrenheit(hour.temp)}°F</p>
              <p>Feels like: {hour.feelslike}°C</p>
              <p>{hour.conditions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
