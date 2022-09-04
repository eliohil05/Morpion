import React from 'react';
import './App.css';
import { useState } from 'react';
import Square from './components/items'


function App() {
  const [platform, setPlatform] = useState("","","","","","","","","",)
  const [player, setPlayer] = useState("X")
  function handleClick() {
    if (player === "X") { setPlayer("O"); }
    else {
      setPlayer("X");
    }
  }
  return (
    <div className="App">
      <div className="platform">
        <div className="row">
        <Square XO={platform[0]} 
        handleClick={() => {handleClick(0)}} />
       <Square XO={platform[1]} 
          handleClick={() => {handleClick(1)}}/>
        <Square XO={platform[2]} 
        handleClick={() => {handleClick(2)}} />
        </div>
        <div className="row">
        <Square XO={platform[3]} 
        handleClick={() => {handleClick(3)}} />
        <Square XO={platform[4]} 
        handleClick={() => {handleClick(4)}} />
        <Square XO={platform[5]} 
        handleClick={() => {handleClick(5)}} />
        </div>
        <div className="row">
        <Square XO={platform[6]} 
        handleClick={() => {handleClick(6)}} />
        <Square XO={platform[7]} 
        handleClick={() => {handleClick(7)}} />
        <Square XO={platform[8]} 
        handleClick={() => {handleClick(8)}} />
        </div>
      </div>
    </div>
  );
}

export default App;
