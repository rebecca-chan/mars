import React from 'react';
import axios from 'axios';
const API_KEY = process.env.API_KEY;

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureId: 0,
      currentImage: {},
      allImages: [],
      isLoaded: false
    };
    this.fetchPics = this.fetchPics.bind(this);
  }

  componentDidMount() {
    this.fetchPics(this.props.date);
  }

  async componentDidUpdate(prevProps, prevState) {
    const latest = this.props.date;
    const prev = prevProps.date;
    if (latest !== prev) {
      this.fetchPics(latest);
    }
  }

  async fetchPics(date) {
    const earthdate = date
      .toISOString()
      .slice(0, 10)
      .replace(/(^|-)0+/g, '$1');
    const { data } = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthdate}&api_key=${API_KEY}`
    );

    this.setState({
      pictureId: 0,
      allImages: data.photos,
      currentImage: data.photos[this.state.pictureId],
      isLoaded: true
    });
  }

  render() {
    if (!this.state.isLoaded) return <p>Loading</p>;
    if (this.state.isLoaded && !this.state.allImages.length)
      return <p>There are no photos for this day.</p>;
    else {
      const { img_src } = this.state.currentImage;
      return (
        <div>
          <div className="gallery">
            <div className="helper">
              {this.state.pictureId === 0 ? null : (
                <i
                  className="fa fa-angle-left"
                  onClick={() =>
                    this.setState(prevState => ({
                      currentImage:
                        prevState.allImages[Number(prevState.pictureId) - 1],
                      pictureId: Number(prevState.pictureId) - 1
                    }))
                  }
                />
              )}

              <img
                src={img_src ? img_src : ''}
                className="gallery-item"
                alt="mars"
              />
              {this.state.picture === this.state.allImages.length ? null : (
                <i
                  className="fa fa-angle-right"
                  onClick={() =>
                    this.setState(prevState => ({
                      currentImage:
                        prevState.allImages[Number(prevState.pictureId) + 1],
                      pictureId: Number(prevState.pictureId) + 1
                    }))
                  }
                />
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}
