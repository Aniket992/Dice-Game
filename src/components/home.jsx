import React from 'react';
import Style from './home.module.css';

const Home = ({ onPlayNowClick }) => {
  const handlePlayNowClick = () => {
    if (onPlayNowClick) {
      onPlayNowClick();
    }
  };

  return (
    <div className={Style.Homecontainer}>
      <div className={Style.diceimage}>
        <img src="dices 1.png" alt="" />
      </div>
      <div className={Style.hometext}>
        <h1>DICE GAME</h1>
        <button onClick={handlePlayNowClick}>
          <strong>Play Now</strong>
        </button>
      </div>
    </div>
  );
};

export default Home;
