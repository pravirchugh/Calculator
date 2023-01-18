import logo from './logo.svg';
import React, {useState} from 'react';

import NumberButton from './components/NumberButton';
import './App.css';

let output = 0;

function App() {

  const [output, setOutput] = useState(0);

  return (
    <>
      <header>
        <h1>Calculator</h1>
        <p>Made with React.js</p>
      </header>
      <body>
        <div className="outputWindow">
          <p className="outputText" style={{textAlign: "center"}}>{output}</p>
        </div>

        <div className="buttons">

          <div className="buttonRow">
            <div className="buttonElement">
              <NumberButton val="+/-"></NumberButton>
            </div>
           
            <div className="buttonElement">
              <NumberButton val="%"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="C"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="⌫"></NumberButton>
            </div>
          </div>

          <div className="buttonRow">
            <div className="buttonElement">
              <NumberButton val="1/x"></NumberButton>
            </div>
           
            <div className="buttonElement">
              <NumberButton val="x^2"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="√"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="/"></NumberButton>
            </div>
          </div>

          
          <div className="buttonRow">
            <div className="buttonElement">
              <NumberButton val="7"></NumberButton>
            </div>
           
            <div className="buttonElement">
              <NumberButton val="8"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="9"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="*"></NumberButton>
            </div>
          </div>


          <div className="buttonRow">
            <div className="buttonElement">
              <NumberButton val="4"></NumberButton>
            </div>
           
            <div className="buttonElement">
              <NumberButton val="5"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="6"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="-"></NumberButton>
            </div>
          </div>

          <div className="buttonRow">
            <div className="buttonElement">
              <NumberButton val="1"></NumberButton>
            </div>
           
            <div className="buttonElement">
              <NumberButton val="2"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="3"></NumberButton>
            </div>
            <div className="buttonElement">
              <NumberButton val="+"></NumberButton>
            </div>
          </div>

          <div className="buttonRow">
            <div className="buttonElement">
              <NumberButton val="0"></NumberButton>
            </div>
           
            <div className="buttonElement">
              <NumberButton val="."></NumberButton>
            </div>
            <div className="doubleButtonElement">
              {/* Has twice the width of the other buttons */}
              <NumberButton val="="></NumberButton>
            </div>
            
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
