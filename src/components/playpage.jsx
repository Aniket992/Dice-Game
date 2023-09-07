import React, { useState } from 'react';
import Style from './playpage.module.css';
import NumberSquares from './numbersquares';
import Centerbox from './centerbox';

const Playpage = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);

  // Function to reset the selectedNumber to null
  const resetSelectedNumber = () => {
    setSelectedNumber(null);
  };

  return (
    <>
      <div className={Style.container}>
        <div className={Style.topsection}>
          <div className={Style.score}>
            <p>{score}</p>
            <div className={Style.totalscore}>
              <p>Total Score</p>
            </div>
          </div>
          <div className={Style.numberSquaresContainer}>
            <NumberSquares setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber} />
          </div>
        </div>
        <Centerbox selectedNumber={selectedNumber} setScore={setScore}  resetSelectedNumber={resetSelectedNumber} />
      </div>
    </>
  );
}

export default Playpage;
