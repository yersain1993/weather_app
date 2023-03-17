import React from 'react';

const Button = ({ handleClick, count }) => {
  const textConverter = () => {
    if (count % 2 === 0) return 'Convertir a Celcius';
    else if (count % 2 === 1) return 'Convertir a Fahrenheit';
  };
  return (
    <button
      className="bg-[#38A1D8] text-amber-50 w-44 h-9 text-center mt-72 rounded"
      onClick={() => {
        handleClick();
      }}
    >
      {textConverter()}
    </button>
  );
};

export default Button;
