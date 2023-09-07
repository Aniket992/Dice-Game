import React, { useState } from "react";
import Style from "./centerbox.module.css";

const Centerbox = ({ selectedNumber, setScore,
setwinningScore,setloosingScore ,setSelectedNumber}) => {
  const imageUrls = [
    "dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png",
  ];

  const [currentImage, setCurrentImage] = useState(imageUrls[0]);
  const [showRules, setShowRules] = useState(false);

  const handleImageClick = () => {
    if (selectedNumber !== null) {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      setCurrentImage(imageUrls[randomIndex]);
      const dicenumber = randomIndex + 1;
     
      if (selectedNumber === dicenumber) {
        setScore((prevScore) => prevScore + dicenumber);
        setwinningScore((wins) =>wins + dicenumber)
      } else {
        setScore((prevScore) => prevScore - 2);
        setloosingScore((lose) => lose + 2);
      }
    } else {
      alert("Please select a number before rolling the dice.");
    }
  };

  const rules = () => {
    setShowRules(!showRules);
  };

  const reset = () => {
    setScore(0);
    setSelectedNumber(null);
    setloosingScore(0);
    setwinningScore(0);
  };

  return (
    <div className={Style.container}>
      <div className={Style.imagebox}>
        <img src={currentImage} alt="" onClick={handleImageClick} />
      </div>
      <p className={Style.text}>Click on Dice to roll</p>
      <button onClick={reset}>Reset Score</button>
      <button onClick={rules}>Show Rules</button>
      {showRules && (
        <div className={Style.rules}>
          <p>
            <strong>How to play dice game</strong>
          </p>
          <pre>
            Select any number <br />
            Click on dice image
            <br />
            after clicking on dice image, if the selected number is the same as{" "}
            <br />
            the dice number, you will get the same points as the dice;
            otherwise, <br />2 points will be deducted from your total score for
            an incorrect guess.
          </pre>
        </div>
      )}
    </div>
  );
};

export default Centerbox;
