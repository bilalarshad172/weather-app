import React from 'react';
import getWeatherSVG from "./getWeatherSVG";
import { FiWind } from 'react-icons/fi';
import { WiHumidity, WiDayFog, WiDaySunny, WiMoonWaxingCrescent1 } from 'react-icons/wi';
import useWeatherStore from '../Zustand/useWeatherStore';
import { useTheme } from '../ThemeContext';

const WeatherDetails = () => {
  const oneDayData = useWeatherStore((state) => state.oneDayData);
  const currentConditions = useWeatherStore((state) => state.currentConditions);
  const { theme } = useTheme();

  // Check if oneDayData is available
  const isWeatherDataAvailable = oneDayData;

  return (
    <div className='flex flex-col md:flex-row gap-8'>
      {isWeatherDataAvailable ? (
        <>
          <div className={`w-full md:w-1/2 ${theme === 'light' ? 'bg-white' : 'bg-[#2A2F38]'} p-4 md:p-6 rounded-xl shadow-card mb-4 md:mb-0`}>
            <p className={`font-semibold text-lg ${theme === 'light' ? 'text-[#3B4D61]' : 'text-white'} mb-4`}>{oneDayData.datetime}</p>
            <div className="flex items-center mb-6">
              <img
                src={getWeatherSVG(currentConditions.condition)}
                alt={currentConditions.condition}
                className="w-20 h-20 mr-4 drop-shadow-lg"
              />
              <div>
                <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-[#3B4D61]' : 'text-white'}`}>{currentConditions.temp}°C</h2>
                <p className="text-[#2193b0] font-medium">{currentConditions.conditions}</p>
              </div>
            </div>

            <div className={`${theme === 'light' ? 'bg-[#F5F7FA]' : 'bg-[#1F2329]'} p-4 rounded-lg mb-4`}>
              <h3 className={`font-semibold ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'} mb-2`}>Description</h3>
              <p className={`${theme === 'light' ? 'text-[#3F4756]' : 'text-gray-300'}`}>{oneDayData.description || 'No detailed description available'}</p>
            </div>

            <div className={`${theme === 'light' ? 'bg-[rgba(33,147,176,0.1)]' : 'bg-[rgba(33,147,176,0.2)]'} p-4 rounded-lg`}>
              <div className="flex justify-between items-center">
                <p className={`font-medium ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'}`}>Cloud Cover</p>
                <p className="text-[#2193b0] font-semibold">{oneDayData.cloudcover}%</p>
              </div>
            </div>
          </div>

          <div className={`w-full md:w-1/2 ${theme === 'light' ? 'bg-white' : 'bg-[#2A2F38]'} p-4 md:p-6 rounded-xl shadow-card`}>
            <h3 className={`font-bold text-xl ${theme === 'light' ? 'text-[#3B4D61]' : 'text-white'} mb-4`}>Weather Metrics</h3>

            <div className="space-y-4">
              <div className={`flex justify-between items-center p-3 ${theme === 'light' ? 'bg-[#F5F7FA] hover:bg-[#E4E7EB]' : 'bg-[#1F2329] hover:bg-[#3F4756]'} rounded-lg transition-colors duration-300`}>
                <p className={`flex gap-2 items-center ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'} font-medium`}>
                  <FiWind className="text-[#2193b0] text-xl" /> Wind
                </p>
                <p className={`font-semibold ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'}`}>{oneDayData.windspeed} km/h SE</p>
              </div>

              <div className={`flex justify-between items-center p-3 ${theme === 'light' ? 'bg-[#F5F7FA] hover:bg-[#E4E7EB]' : 'bg-[#1F2329] hover:bg-[#3F4756]'} rounded-lg transition-colors duration-300`}>
                <p className={`flex gap-2 items-center ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'} font-medium`}>
                  <WiHumidity className="text-[#2193b0] text-2xl" /> Humidity
                </p>
                <p className={`font-semibold ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'}`}>{oneDayData.humidity}%</p>
              </div>

              <div className={`flex justify-between items-center p-3 ${theme === 'light' ? 'bg-[#F5F7FA] hover:bg-[#E4E7EB]' : 'bg-[#1F2329] hover:bg-[#3F4756]'} rounded-lg transition-colors duration-300`}>
                <p className={`flex gap-2 items-center ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'} font-medium`}>
                  <WiDayFog className="text-[#2193b0] text-2xl" /> Visibility
                </p>
                <p className={`font-semibold ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'}`}>{oneDayData.visibility} km</p>
              </div>

              <div className={`flex justify-between items-center p-3 ${theme === 'light' ? 'bg-[#F5F7FA] hover:bg-[#E4E7EB]' : 'bg-[#1F2329] hover:bg-[#3F4756]'} rounded-lg transition-colors duration-300`}>
                <p className={`flex gap-2 items-center ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'} font-medium`}>
                  <WiDaySunny className="text-[#2193b0] text-2xl" /> UV Index
                </p>
                <p className={`font-semibold ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'}`}>{oneDayData.uvindex} mW/m²</p>
              </div>

              <div className={`flex justify-between items-center p-3 ${theme === 'light' ? 'bg-[#F5F7FA] hover:bg-[#E4E7EB]' : 'bg-[#1F2329] hover:bg-[#3F4756]'} rounded-lg transition-colors duration-300`}>
                <p className={`flex gap-2 items-center ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'} font-medium`}>
                  <WiMoonWaxingCrescent1 className="text-[#2193b0] text-2xl" /> Moon Phase
                </p>
                <p className={`font-semibold ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'}`}>{oneDayData.moonphase}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="p-10 text-center w-full h-60 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-12 w-48 bg-[rgba(63,71,86,0.3)] rounded-md mb-4 mx-auto"></div>
            <div className="h-8 w-64 bg-[rgba(63,71,86,0.2)] rounded-md mx-auto"></div>
            <p className={`mt-6 ${theme === 'light' ? 'text-[#2A2F38]' : 'text-white'} text-xl`}>Loading weather details...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
