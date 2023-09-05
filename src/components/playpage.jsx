import React from 'react';
import Style from './playpage.module.css';
import NumberSquares from './numbersquares'; // Import the NumberSquares component

const Playpage = () => {
  return (
    <div className={Style.container}>
      <div className={Style.topsection}>
        <div className={Style.score}>
          <p>0</p>
          <p id='Total Score'>Total Score</p>
        </div>
        <div className={Style.numberSquaresContainer}>
          <NumberSquares /> {/* Render the NumberSquares component here */}
        </div>
      </div>
    </div>
  );
}

export default Playpage;
