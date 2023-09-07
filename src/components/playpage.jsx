import React, { useState } from 'react';
import Style from './playpage.module.css';
import NumberSquares from './numbersquares';
import Centerbox from './centerbox';

const Playpage = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [winningScore,setwinningScore] = useState(0);
  const [loosingScore,setloosingScore] = useState(0); 

  return (
    <>
      <div className={Style.container}>
        <div className={Style.topsection}>
        <div className={Style.win}>
          <p>{winningScore}</p>
          <pre>Wining Score</pre>
          </div>
          <p>-</p>
          <div className={Style.lose}>
          <p>{loosingScore}</p>
          <pre>Loosing Score</pre>
          </div>
          <p>=</p>
          <div className={Style.score}>
            <p>{score}</p>
              <pre>Total Score</pre>
          </div>
          
          
          <div className={Style.numberSquaresContainer}>
            <NumberSquares setSelectedNumber={setSelectedNumber} 
            selectedNumber={selectedNumber} />
          </div>
        </div>
        <Centerbox selectedNumber={selectedNumber}
         setScore={setScore}  
          setwinningScore = {setwinningScore} 
          setloosingScore = {setloosingScore} 
          setSelectedNumber={setSelectedNumber} />
      </div>
    </>
  );
}

export default Playpage;
