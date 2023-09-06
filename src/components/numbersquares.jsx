import React, { useState } from 'react';
import Style from './numbersquares.module.css';

const NumberSquares = () => {
  // Create an array of numbers from 1 to 6
  const numbers = [1, 2, 3, 4, 5, 6];

  // State to store the selected number
  const [selectedNumber, setSelectedNumber] = useState(null);

  // Function to handle box click and update the selected number
  const handleBoxClick = (number) => {
    setSelectedNumber(number);
  };

  return (
    <>
      <div className={Style.container}>
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`${Style.squares} ${selectedNumber === number ? Style.selected : ''}`}
            onClick={() => handleBoxClick(number)}
          >
            {number}
          </div>
        ))}
      </div> {selectedNumber === null ? <p>Select Number</p> : <p>You selected: {selectedNumber}</p>}
            {/* Show "Select Number" until a number is selected, then show "You selected: {number}" */}
          
      {/* {selectedNumber && (
        <p>You selected: {selectedNumber}</p>
      )} */}
    </>
  );
};

export default NumberSquares;
