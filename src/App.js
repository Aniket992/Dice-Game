import React, { useState } from 'react';
import './App.css';
import Home from './components/home';
import Playpage from './components/playpage';
import Centerbox from './components/centerbox';
function App() {
  const [showPlaypage, setShowPlaypage] = useState(false);
  const handlePlayNowClick = () => {
    setShowPlaypage(true);
  };

  return (
    
    <div>
      {/* <Playpage/> */}
      {/* <Centerbox/> */}
      {showPlaypage ? (
        <Playpage />
      ) : (
        <Home onPlayNowClick={handlePlayNowClick} />
      )}
    </div>
  );
}

export default App;
