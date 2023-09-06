import React, { useState } from 'react';
import Style from './playpage.module.css';
import NumberSquares from './numbersquares'; // Import the NumberSquares component
import Centerbox from './centerbox';

const Playpage = () => {
  // State to store the selected number
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <>
      <div className={Style.container}>
        <div className={Style.topsection}>
          <div className={Style.score}>
            <p>0</p>
            <div className={Style.totalscore}>
              <p>Total Score</p>
            </div>
          </div>
          <div className={Style.numberSquaresContainer}>
            <NumberSquares
              setSelectedNumber={setSelectedNumber} // Pass setSelectedNumber as a prop
            />
          </div>
        </div>
      </div>
      <Centerbox selectedNumber={selectedNumber} /> {/* Pass selectedNumber as a prop */}
    </>
  );
}

export default Playpage;
