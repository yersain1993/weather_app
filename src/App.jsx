import React, { useEffect, useState } from 'react';

import Weather from './components/Weather';

const App = () => {
  const [weather, setWeather] = useState({});

  const getWeather = async (lat, lon) => {
    try {
      console.log(lat, lon);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&appid=a22b39be0f9b8ba4ede0a515b0a39040&units=metric`,
      );
      const res = await response.json();
      console.log({ res });
      setWeather(res);
    } catch (error) {
      console.log('Se produjo el siguiente error:');
      console.log(error);
    }
  };

  useEffect(() => {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        getWeather(lat, lon);
      },
      (error) => {
        throw error;
      },
    );
  }, []);

  return (
    <div className="relative h-full felx flex-col items-center justify-center">
      <Weather weatherData={weather} />
    </div>
  );
};

export default App;
