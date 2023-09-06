import React, { useState } from 'react';
import Style from './centerbox.module.css';

const Centerbox = () => {
  // List of image URLs
  const imageUrls = [
    'dice_1.png',
    'dice_2.png',
    'dice_3.png',
    'dice_4.png',
    'dice_5.png',
    'dice_6.png',
  ];

  // State to store the currently displayed image URL
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  // State to control whether to display rules or not
  const [showRules, setShowRules] = useState(false);

  // Function to select a random image when clicked
  const handleImageClick = () => {
    // Generate a random index within the range of the imageUrls array
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    // Update the currently displayed image
    setCurrentImage(imageUrls[randomIndex]);
  };

  const rules = () => {
    // Toggle the showRules state to display or hide the rules
    setShowRules(!showRules);
  };

  return (
    <div className={Style.container}>
      <div className={Style.imagebox}>
        <img
          src={currentImage}
          alt=""
          onClick={handleImageClick} // Call handleImageClick when the image is clicked
        />
      </div>
      <p className={Style.text}>Click on Dice to roll</p>
      <button>Reset Score</button>
      <button onClick={rules}>Show Rules</button>
      {/* Conditional rendering of rules */}
      {showRules && (
        <div className={Style.rules}>
          <p><strong>How to play dice game</strong></p>
          <pre>
            Select any number <br/>
            Click on dice image<br/>
            after clicking on dice image, if the selected number is the same as <br/>
            the dice number, you will get the same points as the dice; otherwise, <br/>
            2 points will be deducted from your total score for an incorrect guess.
          </pre>
        </div>
      )}
    </div>
  );
};

export default Centerbox;
