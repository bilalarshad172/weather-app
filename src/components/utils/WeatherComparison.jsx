import React from 'react'
import useWeatherStore from "../Zustand/useWeatherStore";
import { LineChart } from '@mui/x-charts/LineChart';

const WeatherComparison = () => {
  const storedCities = useWeatherStore((state) => state.storedCities);

  const getYAxisRange = () => {
    let minTemp = Infinity;
    let maxTemp = -Infinity;

    storedCities.forEach((cityData) => {
      cityData.sevenDaysData.forEach((day) => {
        if (day.temp < minTemp) minTemp = day.temp;
        if (day.temp > maxTemp) maxTemp = day.temp;
      });
    });

    return { min: Math.floor(minTemp), max: Math.ceil(maxTemp) };
  };

  const yAxisRange = getYAxisRange();

  const seriesData = storedCities.map((cityData) => {
    const tempData = cityData.sevenDaysData.map((day) => day.temp);
    return { data: tempData, label: cityData.city };
  });

  const xLabels = storedCities[0]?.sevenDaysData.map((day) => day.datetime) || [];

  return (
    <div className='bg-slate-300'>
    <LineChart
      width={1000}
      height={400}
      series={seriesData}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ min: yAxisRange.min, max: yAxisRange.max }]}
      sx={{
        '.MuiChartLine-label': { color: 'white' }, // Style for city name text
        '.MuiChartLine-xAxis text': { fill: 'white' }, // Style for x-axis text
        '.MuiChartLine-yAxis text': { fill: 'white' }  // Style for y-axis text
      }}
    />
    </div>
  )
}

export default WeatherComparison;
