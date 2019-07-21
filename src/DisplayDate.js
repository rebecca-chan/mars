import React from 'react';

export default class DisplayDate extends React.Component {
  constructor() {
    super();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const today = new Date().toLocaleDateString('en-US', options);

    this.state = {
      date: today
    };
  }

  render() {
    return (
      <div class="date">
        <p> Date: {this.state.date}</p>
      </div>
    );
  }
}
