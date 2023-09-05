import React from 'react';
import Style from './numbersquares.module.css';
const NumberSquares = () => {
  // Create an array of numbers from 1 to 6
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {numbers.map((number, index) => (
        <div
          key={index}
          className={Style.squares}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumberSquares;
