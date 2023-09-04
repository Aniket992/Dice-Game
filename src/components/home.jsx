import React from 'react'
import Style from './home.module.css';
import Playpage from './playpage';
const Home = () => {
  return (
    <div className={Style.Homecontainer}>
       <div className={Style.diceimage}>
       <img src="dices 1.png" alt="" />
       </div>
       <div className={Style.hometext}>
       <h1>DICE GAME</h1>
       <button  onClick={Playpage}><strong>Play Now</strong>
        <script>console.log("hello");</script>
        </button>
       </div>
    </div>
  )
}

export default Home;
