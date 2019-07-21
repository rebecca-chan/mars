import React from 'react';
import logo from './logo.jpg';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    const defaultImage = { logo };
    this.state = {
      currentImage: defaultImage,
      allImages: []
    };
  }

  componentDidMount() {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY'
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
