import React, { useState } from 'react';

import Button from './Button';

import { imageMapper } from '../utilities/imageMapper';
import './Weather.css';

const Weather = ({ weatherData }) => {
  const descrpt = weatherData.weather?.[0]?.description;
  const temp = weatherData.main?.temp;
  const [counter, setCount] = useState(1);

  const temperatureConverter = () => {
    setCount(counter + 1);
    console.log(counter);
  };

  const fahrenheit = (temp) => {
    if (counter % 2 === 0) return Math.round(temp + 33.8);
    else if (counter % 2 === 1) return Math.round(temp);
  };

  const changeIcon = (descrpt) => {
    return imageMapper[descrpt];
  };

  return (
    <div className="flex flex-column justify-center">
      <h1 className="text-3xl mt-11 font-bold text-[#FFFFFF]"> Weather App </h1>
      <div className="weather__container">
        <p className="absolute mt-7 ml-6 text-blue-700 text-7xl"> {fahrenheit(temp)}° </p>
        <p className="absolute w-40 mt-44 ml-8 text-blue-700 flex flex-col items-start font-normal text-xl">
          {weatherData.name}, {weatherData.sys?.country}
        </p>
        <p className="absolute mt-32 ml-8 text-blue-500 text-xs">
          {weatherData.wind?.speed} km/h
        </p>
        <p className="absolute mt-36 ml-8 text-blue-500 text-xs">{descrpt} </p>
        <span className="absolute ml-48">
          <img src={changeIcon(descrpt)} alt={descrpt} />
        </span>
        <p className="absolute mt-40 ml-8 text-blue-500 text-xs">
          {weatherData.main?.pressure} Pa
        </p>
      </div>
      <div className="mt-60 -ml-48">
        <Button handleClick={temperatureConverter} count={counter} />
      </div>
    </div>
  );
};

export default Weather;
