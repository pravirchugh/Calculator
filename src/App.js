import logo from './logo.svg';
import React, {useState} from 'react';

import NumberButton from './components/NumberButton';
import './App.css';


function App() {
  return (
    <>
      <header>
        <h1>Calculator</h1>
        <p>Made with React.js</p>
      </header>
      <body>
        <div className="outputWindow">
          <p className="outputText">Output Window...</p>
        </div>

        <div className="buttons">
          <div className="buttonRow">
            <NumberButton val="7"></NumberButton>
            <NumberButton val="8"></NumberButton>
            <NumberButton val="9"></NumberButton>
          </div>
          <div className="buttonRow">
            <NumberButton val="4"></NumberButton>
            <NumberButton val="5"></NumberButton>
            <NumberButton val="6"></NumberButton>
          </div>
          <div className="buttonRow">
            <NumberButton val="1"></NumberButton>
            <NumberButton val="2"></NumberButton>
            <NumberButton val="3"></NumberButton>
          </div>
        </div>



      </body>
    
    </>
  );
}

// Different types of components:
  // Number buttons (0-9)
  // Operation buttons (+, -, *, /)
  // Misc. buttons (+/-, Clear, Enter)

export default App;
