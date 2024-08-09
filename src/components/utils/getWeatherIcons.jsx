import { 
  WiDaySunny, WiDayCloudy, WiDayRain, WiDaySnow, WiDayThunderstorm, WiDaySprinkle, WiDayHaze, WiHot, 
  WiRaindrop, WiRaindrops, WiStormShowers, WiSleet, WiRainWind, WiDayCloudyGusts, WiDayCloudyWindy, 
  WiDayFog, WiDayHail, WiDayLightning, WiDayRainMix, WiNightClear, WiNightAltCloudy, WiNightAltCloudyGusts, 
  WiStars, WiMoonFull, WiMoonNew, WiMoonFirstQuarter, WiMoonThirdQuarter, WiMoonWaningCrescent6 
} from 'react-icons/wi';

export const getWeatherIcon = (condition) => {
  if (!condition) return null;

  const conditionMapping = {
    sunny: <WiDaySunny size={35} title='Sunny'/>,
    clear: <WiDaySunny size={35} title='Clear'/>,
    partly: <WiDayCloudy size={35} title='Cloudy'/>,
    cloudy: <WiDayCloudy size={35} />,
    overcast: <WiDayCloudy size={35}/>,
    rain: <WiDayRain size={35}/>,
    drizzle: <WiDaySprinkle size={35}/>,
    snow: <WiDaySnow size={35}/>,
    thunderstorm: <WiDayThunderstorm size={35}/>,
    haze: <WiDayHaze size={35}/>,
    hot: <WiHot size={35}/>,
    windy: <WiDayCloudyGusts size={35}/>,
    fog: <WiDayFog size={35}/>,
    hail: <WiDayHail size={35}/>,
    lightning: <WiDayLightning size={35}/>,
    storm: <WiStormShowers size={35}/>,
    sleet: <WiSleet size={35}/>,
    night: <WiNightClear size={35}/>,
   
    // Add more conditions and icons as needed
  };

  // Match condition to icon using a partial match in the string
  const matchedCondition = Object.keys(conditionMapping).find(key =>
    condition.toLowerCase().includes(key)
  );

  return conditionMapping[matchedCondition] || <WiDaySunny />; // Default to sunny if no match
};
