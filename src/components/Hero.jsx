import React,{ useEffect } from 'react'
import { getWeatherIcon } from './utils/getWeatherIcons';
import getWeatherSVG from './utils/getWeatherSVG';
import useWeatherStore from './Zustand/useWeatherStore'

const Hero = () => {
  const city = useWeatherStore((state) => state.city);
  const currentConditions = useWeatherStore((state) => state.currentConditions);
  console.log(currentConditions, "current")
  
  const fifteenDaysData = useWeatherStore((state) => state.fifteenDaysData);
  // console.log(fifteenDaysData, "hello");
  
  return (
      <>
      <div className='border mx-20 mt-10 rounded-md'>
        <div>{city}</div>
        <div>{currentConditions.temp}°C</div>
        <div>{currentConditions.sunrise}sunrise</div>
        <div>{currentConditions.sunset}sunset</div>
        <div>{currentConditions.uvindex}UV index</div>
        <div>{currentConditions.visibility}visibility</div>
        <div>{currentConditions.humidity}humidity</div>
        <div>{currentConditions.feelslike}feellike</div>
        <div>{currentConditions.dew}dew</div>
        <div>{currentConditions.conditions}conditions</div>

         <img src={getWeatherSVG(currentConditions.conditions)} alt={currentConditions.conditions} />
      </div>
    </>
  )
}

export default Hero