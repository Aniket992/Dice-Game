import React from 'react';
import Style from './playpage.module.css';
import NumberSquares from './numbersquares'; // Import the NumberSquares component

const Playpage = () => {
  return (
    <div className={Style.container}>
      <div className={Style.topsection}>
        <div className={Style.score}>
          <p>0</p>
          <div className={Style.totalscore}>
          <p>Total Score</p>
          </div>
        </div>
        <div className={Style.numberSquaresContainer}>
          <NumberSquares /> {/* Render the NumberSquares component here */}
         <p>Select Number</p>
        </div>
      </div>
    </div>
  );
}

export default Playpage;
