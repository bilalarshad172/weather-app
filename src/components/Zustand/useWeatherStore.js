import { create } from 'zustand';
const API_KEY = "5T8MG2JSSRBWZD6XK8QA3X6N4";
const useWeatherStore = create((set) => ({
  city: '',
  hourlyData: [],
  oneDayData: null,
  sevenDaysData: [],
  fifteenDaysData: [],
  timezone: '',
  description: '',
  latitude: null,
  longitude: null,
  currentConditions: null,
  alerts: [],
  resolvedAddress: '',
  fetchWeatherData: async (city) => {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      set({
        city: data.address,
        hourlyData: data.days[0].hours, // Assuming the first day's hours are hourly data
        oneDayData: data.days[0],
        sevenDaysData: data.days.slice(0, 7),
        fifteenDaysData: data.days,
        timezone: data.timezone,
        description: data.description,
        latitude: data.latitude,
        longitude: data.longitude,
        currentConditions: data.currentConditions,
        alerts: data.alerts,
        resolvedAddress: data.resolvedAddress,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  },
  fetchUserLocationWeather: async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=metric&key=5T8MG2JSSRBWZD6XK8QA3X6N4`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          set({
            city: data.address,
            hourlyData: data.days[0].hours,
            oneDayData: data.days[0],
            sevenDaysData: data.days.slice(0, 7),
            fifteenDaysData: data.days,
            timezone: data.timezone,
            description: data.description,
            latitude: data.latitude,
            longitude: data.longitude,
            currentConditions: data.currentConditions,
            alerts: data.alerts,
            resolvedAddress: data.resolvedAddress,
          });
        } catch (error) {
          console.error('Error fetching user location weather data:', error);
        }
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}));

export default useWeatherStore;
