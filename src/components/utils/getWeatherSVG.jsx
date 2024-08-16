import cloudy from '../../assets/cloudy.svg';
import partialSunny from '../../assets/partial-sunny.svg';
import rainyNight from '../../assets/rainy-night.svg';
import sunny from '../../assets/sunny.svg';
import thunderStorm from '../../assets/thunder-storm.svg';
import haze from '../../assets/50n.png';
import rain from '../../assets/rainy-cloud.svg';


const getWeatherSVG = (condition) => {
  if (/clear/i.test(condition)) {
    return sunny;
  } else if (/Rain, Partially cloudy/i.test(condition)) {
    return rainyNight;
  } else if (/partially cloudy/i.test(condition)) {
    return partialSunny;
  } else if (/Rain/i.test(condition)) {
    return rain;
  } else if (/thunder/i.test(condition)) {
    return thunderStorm;
  } else if (/haze/i.test(condition)) {
    return haze;
  } else if (/overcast/i.test(condition)) {
    return cloudy;
  } else if (/Rain, overcast/i.test(condition)) {
    return rain;
  } else if (/Partially cloudy/i.test(condition)) {
    return partialSunny;
  } else {
    return partialSunny; // Default icon
  }
};

export default getWeatherSVG;
