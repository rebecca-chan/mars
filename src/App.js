import React from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import './React-datepicker.css';
import Slideshow from './Slideshow';
import Landing from './Landing';
import { Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.startDate !== nextState.startDate;
  }

  render() {
    return (
      <div className="App">
        <div className="stars" />
        <div className="twinkling" />
        <header className="App-header">
          <h1>Mars</h1>

          {this.state.startDate ? (
            <div>
              <Slideshow date={this.state.startDate} />
            </div>
          ) : (
            <div>
              <Route path="/" component={Landing} />
            </div>
          )}

          <Redirect to={'/'} />

          <DatePicker
            placeholderText="Date"
            minDate={new Date(2015, 5, 3)}
            maxDate={new Date()}
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
