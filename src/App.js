import React from 'react';
import logo from './logo.jpg';
import './App.css';
import DisplayDate from './DisplayDate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mars</h1>
        <p />
        <a>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
