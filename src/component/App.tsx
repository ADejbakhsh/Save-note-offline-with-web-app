import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import './Button'
import Button from './Button';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);


  function handleClick() {
      setCount(count + 1);
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button  count={count} onClick={handleClick} />
        <Button  count={count} onClick={handleClick} />


      </header>
    </div>
  );
}

export default App;
