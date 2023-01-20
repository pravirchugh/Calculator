import React, {useState} from 'react';
import { invertOutput, rootOutput, squareOutput, reciprocalOutput, clearOutput } from './components/Utilities.js';

import NumberButton from './components/NumberButton';
import OperationButton from './components/OperationButton';
import './App.css';

function App() {

  let [output, setOutput] = useState("0");
  let [operation, setOperation] = useState(" "); // use the space character as "no operation selected"
  let [firstArgument, setFirstArgument] = useState("0");

  function numberClick(value){
    if((output + value)[0] == '0'){
      setOutput((output + value).slice(1)); // checks for leading zero
    } else {
      setOutput(output + value);
    }
    
  }

  function backspaceOutput() {
    let text = output;
    
    if(text.length == 1 && output >= 0){
      setOutput("0");
    } else if(output <= 0 && text.length == 2){
      setOutput("0");
    } else {
      // delete last character
      text = text.slice(0, text.length - 1);
      if(text[text.length - 1] == '.'){
        text = text.slice(0, text.length - 1);
      }
      setOutput(text);
    }
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
            <div className="buttonElement" onClick={() => setOutput(invertOutput(output))}>
              <OperationButton val="+/-"></OperationButton>
            </div>
           
            <div className="buttonElement">
              <OperationButton val="%"></OperationButton>
            </div>
            <div className="buttonElement" onClick={() => setOutput(clearOutput())}>
              <OperationButton val="C"></OperationButton>
            </div>
            <div className="buttonElement" onClick={() => backspaceOutput()}>
              <OperationButton val="⌫"></OperationButton>
            </div>
          </div>

          <div className="buttonRow">
            <div className="buttonElement" onClick={() => setOutput(reciprocalOutput(output))}>
              <OperationButton val="1/x"></OperationButton>
            </div>
           
            <div className="buttonElement" onClick={() => setOutput(squareOutput(output))}>
              <OperationButton val="x^2"></OperationButton>
            </div>
            <div className="buttonElement" onClick={() => setOutput(rootOutput(output))}>
              <OperationButton val="√"></OperationButton>
            </div>
            <div className="buttonElement" onClick={() => setOperation("/")}>
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
            <div className="buttonElement" onClick={() => setOperation("*")}>
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
            <div className="buttonElement" onClick={() => setOperation("-")}>
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
            <div className="buttonElement" onClick={() => setOperation("+")}>
              <OperationButton val="+"></OperationButton>
            </div>
          </div>

          <div className="buttonRow">
            <div className="doubleButtonElement" onClick={() => numberClick(0)}>
              <NumberButton val="0"></NumberButton>
            </div>
           
            <div className="buttonElement" onClick={() => setOutput(output + ".")}>
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
