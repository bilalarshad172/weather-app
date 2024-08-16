import clearGIF from '../../assets/clear.mp4';
import overcastGIF from '../../assets/overcast.mp4';
import partialCloudyGIF from '../../assets/partially-cloudy.mp4';
import rainCloudyGIF from '../../assets/rain-partial-cloud.mp4';
import rainGIF from '../../assets/raining.mp4';


const weatherBackgrounds = {
  clear: clearGIF,
  overcast: overcastGIF,
  "partially cloudy": partialCloudyGIF,
  "rain, partially cloudy": rainCloudyGIF,
  "rain, overcast": rainCloudyGIF,
  rain: rainGIF,
};
const getWeatherBackground = (condition) => {
  
  const normalizedCondition = condition.toLowerCase();
  if (normalizedCondition == "clear") {
    return weatherBackgrounds.clear;
  } else if (normalizedCondition == "overcast") {
    return weatherBackgrounds.overcast;
  } else if (normalizedCondition == "partially cloudy") {
    return weatherBackgrounds["partially cloudy"];
  } else if (normalizedCondition == "rain, partially cloudy") {
    return weatherBackgrounds["rain, partially cloudy"];
  } else if (normalizedCondition == "rain, overcast") {
    return weatherBackgrounds["rain, overcast"];
  } else if ( normalizedCondition == "rain") {
    return weatherBackgrounds.rain;
  } else {
    return weatherBackgrounds.clear; // Default background
  }
};

export default getWeatherBackground;