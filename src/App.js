import React from 'react';
import './App.css';
import CalendarForm from './CalendarForm';
import Slideshow from './Slideshow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mars</h1>
        <div class="stars" />
        <div class="twinkling" />
        <Slideshow />
        <CalendarForm />
      </header>
    </div>
  );
}

export default App;
