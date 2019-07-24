import React from 'react';
import { API_KEY } from './secrets';
import { Link } from 'react-router-dom';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureId: 0,
      currentImage: {},
      allImages: []
    };
  }

  componentDidMount() {
    const earthdate = this.props.date
      .toISOString()
      .slice(0, 10)
      .replace(/(^|-)0+/g, '$1');
    // const earthdate = this.props.earthdate;
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthdate}&api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(
        data => {
          console.log(data.photos, 'data.photos');
          console.log(data.photos[this.state.pictureId], 'of zero');
          this.setState({
            allImages: data.photos,
            currentImage: data.photos[this.state.pictureId]
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  //  componentDidUpdate(prevProps, prevState) {
  //   const latest = this.state.pictureId;
  //   const prev = prevProps.match.params.pictureId;

  //   if (latest !== prev) {
  //     this.setState({
  //       currentImage: this.state.allImages[latest]
  //     });
  //   }
  // }
  componentDidUpdate() {
    console.log('updated!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, nextProps, 'props updated?');
    return this.props.date !== nextProps.date;
  }

  render() {
    const { img_src, camera } = this.state.currentImage;
    console.log(camera, 'camera');
    console.log(this.state.currentImage, 'currentImage');

    if (this.state.isLoaded && !this.state.allImages)
      return <p>There are no photos for this day.</p>;
    else {
      return (
        <div>
          {/* <p>{camera.full_name}</p> */}
          <div className="gallery">
            <span className="helper">
              <img src={img_src} className="gallery-item" alt="mars" />
              <i
                className="fa fa-angle-right"
                onClick={() =>
                  this.setState(prevState => ({
                    currentImage: this.state.allImages[
                      Number(prevState.pictureId) + 1
                    ],
                    pictureId: Number(prevState.pictureId) + 1
                  }))
                }
              />
            </span>
          </div>
        </div>
      );
      /*
          { <Link to={`/gallery/${prev}`}>Prev</Link> }
          {  }*/
      // <div>
      //   <img src={logo} className="App-logo" alt="logo" />
      // </div>
    }
  }
}
