import React from "react";
import Style from "./numbersquares.module.css";

const NumberSquares = ({ setSelectedNumber, selectedNumber }) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const handleBoxClick = (number) => {
    setSelectedNumber(number);
  };

  return (
    <>
      <div className={Style.container}>
        {numbers.map((number, index) => (
          <div
            key={index}
            
            className={`${Style.squares} ${
              selectedNumber === number ? Style.selected : ""}`}
            onClick={() => handleBoxClick(number)}
          >
            {number}
          </div>
        ))}
      </div>
      {selectedNumber === null ? (
        <p>Select Number</p>
      ) : (
        <p>You selected: {selectedNumber}</p>
      )}
    </>
  );
};

export default NumberSquares;
