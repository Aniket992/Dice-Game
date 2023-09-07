import React, { useState } from 'react';
import './App.css';
import Home from './components/home';
import Playpage from './components/playpage';
function App() {
  const [showPlaypage, setShowPlaypage] = useState(false);
  const handlePlayNowClick = () => {
    setShowPlaypage(true);
  };

  return (
    
    <div>
     
      {showPlaypage ? (
        <Playpage />
      ) : (
        <Home onPlayNowClick={handlePlayNowClick} />
      )}
    </div>
  );
}

export default App;
