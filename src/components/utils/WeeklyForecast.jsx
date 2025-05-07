import React from 'react'
import useWeatherStore from '../Zustand/useWeatherStore';
import getWeatherSVG from "./getWeatherSVG";

const WeeklyForecast = () => {
  const sevenDaysData = useWeatherStore((state) => state.sevenDaysData);
  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * 9/5) + 32).toFixed(1);
  };

  return (
    <div className='scroll-container'>
      <div className='scroll-content'>
        {sevenDaysData.concat(sevenDaysData).map((day, index) => ( // Duplicate data for seamless scroll
          <div key={index} className='scroll-item'>
            <div className='card'>
              <div className="text-lg font-semibold text-primary mb-2">
                {day.datetime}
              </div>
              <img
                src={getWeatherSVG(day.conditions)}
                alt={day.conditions}
                className='w-16 h-16 object-cover'
              />
              <div className="mt-3 mb-1">
                <span className="text-xl font-bold text-primary">{day.temp}°C</span>
                <span className="text-sm text-gray-500 ml-1">({celsiusToFahrenheit(day.temp)}°F)</span>
              </div>
              <div className="bg-secondary/10 px-3 py-1 rounded-full text-secondary text-sm mb-2">
                Feels like: {day.feelslike}°C
              </div>
              <p className="text-dark font-medium">{day.conditions}</p>

              <div className="grid grid-cols-2 gap-2 mt-3 w-full text-xs">
                <div className="bg-light-dark/20 p-1 rounded">
                  <span className="block text-gray-500">Max</span>
                  <span>{day.tempmax}°C</span>
                </div>
                <div className="bg-light-dark/20 p-1 rounded">
                  <span className="block text-gray-500">Min</span>
                  <span>{day.tempmin}°C</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeeklyForecast