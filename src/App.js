import React, {useState} from 'react';
import { clearOutput } from './components/Utilities.js';

import NumberButton from './components/NumberButton';
import OperationButton from './components/OperationButton';
import './App.css';

function App() {

  let [output, setOutput] = useState(0);
  let [operation, setOperation] = useState(" "); // use the space character as "no operation selected"

  function numberClick(value){
    setOutput((output * 10) + value);
  }
  
  function backspaceOutput() {
    let text = output.toString();
    
    if(text.length == 1 && output >= 0){
      setOutput(0);
    } else if(output <= 0 && text.length == 2){
      setOutput(0);
    } else {
      // delete last character
      text = text.slice(0, text.length - 1);
      setOutput(parseFloat(text));
    }
  }
  function reciprocalOutput() {
    setOutput(1 / output);
  }
  function squareOutput() {
    setOutput(output * output);
  }
  function rootOutput() {
    setOutput(Math.sqrt(output));
  }

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
            <div className="buttonElement" onClick={() => setOutput(1 / output)}>
              <OperationButton val="+/-"></OperationButton>
            </div>
           
            <div className="buttonElement">
              <OperationButton val="%"></OperationButton>
            </div>
            <div className="buttonElement" onClick={() => setOutput(0)}>
              <OperationButton val="C"></OperationButton>
            </div>
            <div className="buttonElement" onClick={() => backspaceOutput()}>
              <OperationButton val="⌫"></OperationButton>
            </div>
          </div>

          <div className="buttonRow">
            <div className="buttonElement" onClick={() => reciprocalOutput()}>
              <OperationButton val="1/x"></OperationButton>
            </div>
           
            <div className="buttonElement" onClick={() => squareOutput()}>
              <OperationButton val="x^2"></OperationButton>
            </div>
            <div className="buttonElement" onClick={() => rootOutput()}>
              <OperationButton val="√"></OperationButton>
            </div>
            <div className="buttonElement">
              <OperationButton val="/"></OperationButton>
            </div>
          </div>

          
          <div className="buttonRow">
            <div className="buttonElement" onClick={() => numberClick(7)}>
              <NumberButton val="7"></NumberButton>
            </div>
           
            <div className="buttonElement" onClick={() => numberClick(8)}>
              <NumberButton val="8"></NumberButton>
            </div>
            <div className="buttonElement" onClick={() => numberClick(9)}>
              <NumberButton val="9"></NumberButton>
            </div>
            <div className="buttonElement">
              <OperationButton val="*"></OperationButton>
            </div>
          </div>


          <div className="buttonRow">
            <div className="buttonElement" onClick={() => numberClick(4)}>
              <NumberButton val="4"></NumberButton>
            </div>
           
            <div className="buttonElement" onClick={() => numberClick(5)}>
              <NumberButton val="5"></NumberButton>
            </div>
            <div className="buttonElement" onClick={() => numberClick(6)}>
              <NumberButton val="6"></NumberButton>
            </div>
            <div className="buttonElement">
              <OperationButton val="-"></OperationButton>
            </div>
          </div>

          <div className="buttonRow">
            <div className="buttonElement" onClick={() => numberClick(1)}>
              <NumberButton val="1"></NumberButton>
            </div>
           
            <div className="buttonElement" onClick={() => numberClick(2)}>
              <NumberButton val="2"></NumberButton>
            </div>
            <div className="buttonElement" onClick={() => numberClick(3)}>
              <NumberButton val="3"></NumberButton>
            </div>
            <div className="buttonElement">
              <OperationButton val="+"></OperationButton>
            </div>
          </div>

          <div className="buttonRow">
            <div className="doubleButtonElement" onClick={() => numberClick(0)}>
              <NumberButton val="0"></NumberButton>
            </div>
           
            <div className="buttonElement">
              <NumberButton val="."></NumberButton>
            </div>
            <div className="buttonElement">
              {/* Has twice the width of the other buttons */}
              <OperationButton val="="></OperationButton>
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
