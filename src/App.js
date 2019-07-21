import React from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import './React-datepicker.css';
import Slideshow from './Slideshow';
import Landing from './Landing';
import { Switch, Route, Redirect } from 'react-router-dom';

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

  render() {
    return (
      <Switch>
        <div className="App">
          <header className="App-header">
            <h1>Mars</h1>
            <div class="stars" />
            <div class="twinkling" />
            <Route path="/" component={Landing} />
            <Route
              path="/:this.state.startDate/:pictureId"
              component={Slideshow}
              earthdate={this.state.startDate}
            />
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
      </Switch>
    );
  }
}

export default App;
