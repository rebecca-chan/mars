import React from 'react';
import logo from './logo.jpg';
import './App.css';
import CalendarForm from './CalendarForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mars</h1>
        <div class="stars" />
        <div class="twinkling" />

        <p />
        <a>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <CalendarForm />
      </header>
    </div>
  );
}

export default App;
