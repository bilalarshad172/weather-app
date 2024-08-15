import React from 'react'
import useWeatherStore from '../Zustand/useWeatherStore';
import getWeatherSVG from "./getWeatherSVG";


const FifteenDaysWeather = () => {
  const fifteenDaysData = useWeatherStore((state) => state.fifteenDaysData);
  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * 9/5) + 32).toFixed(1);
  };
  return (
    <div className='scroll-container'>
      <div className='scroll-content'>
        {fifteenDaysData.concat(fifteenDaysData).map((day, index) => ( // Duplicate data for seamless scroll
          <div key={index} className='scroll-item'>
            <div className='card'>
               {day.datetime} 
              <img 
                src={getWeatherSVG(day.conditions)} 
                alt={day.conditions} 
                className='w-12 h-12 object-cover'
              />
              <p>🌡️{day.temp}°C | {celsiusToFahrenheit(day.temp)}°F</p>
              <p>Feels like: {day.feelslike}°C</p>
              <p>{day.conditions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FifteenDaysWeather