import React, { useReducer } from 'react';
import reducer, { initialState }  from './reducers/index'
import { addMemory, applyNumber, changeOperator, clearDisplay, clearMemory, memoryRecall } from './actions/index'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddMemory = (event) => {
    event.preventDefault();
    dispatch(addMemory());
  }

  const handleClearMemory = (event) => {
    event.preventDefault();
    dispatch(clearMemory());
  }

  const handleCE = (event) => {
    event.preventDefault();
    dispatch(clearDisplay());
  }

  const handleMemoryRecall = (event) => {
    event.preventDefault();
    dispatch(memoryRecall());
  }

  const handleNumberClick = (event) => {
    event.preventDefault();
    dispatch(applyNumber(event.target.value));
  }

  const handleOperation = (event) => {
    event.preventDefault();
    dispatch(changeOperator(event.target.value) );
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleAddMemory} value={"M+"}/>
              <CalcButton onClick={handleMemoryRecall} value={"MR"}/>
              <CalcButton onClick={handleClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumberClick} value={1}/>
              <CalcButton onClick={handleNumberClick} value={2}/>
              <CalcButton onClick={handleNumberClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumberClick} value={4}/>
              <CalcButton onClick={handleNumberClick} value={5}/>
              <CalcButton onClick={handleNumberClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumberClick} value={7}/>
              <CalcButton onClick={handleNumberClick} value={8}/>
              <CalcButton onClick={handleNumberClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleOperation} value={"+"}/>
              <CalcButton onClick={handleOperation} value={"*"}/>
              <CalcButton onClick={handleOperation} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleCE} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
