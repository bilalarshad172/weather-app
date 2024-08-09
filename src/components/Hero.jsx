import React,{ useEffect } from 'react'
import { getWeatherIcon } from './utils/getWeatherIcons'
import useWeatherStore from './Zustand/useWeatherStore'

const Hero = () => {
  
  const fifteenDaysData  = useWeatherStore((state) => state.fifteenDaysData);
  console.log(fifteenDaysData, "hello");
  
  return (
      <>
      <div className='border mx-20 mt-10 rounded-md'>
        {fifteenDaysData && fifteenDaysData.length > 0 ? (
          fifteenDaysData.map((day, index) => (
            <div key={index} className='day-weather'>
              {getWeatherIcon(day.conditions)}
              <p>{day.conditions}</p>
            </div>
          ))
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  )
}

export default Hero