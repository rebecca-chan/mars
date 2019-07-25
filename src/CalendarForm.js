import React from 'react';
import DatePicker from 'react-datepicker';
import './React-datepicker.css';

export default class CalendarForm extends React.Component {
  constructor(props) {
    super(props);
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
      <DatePicker
        placeholderText="Date"
        minDate={new Date(2015, 5, 3)}
        maxDate={new Date()}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
