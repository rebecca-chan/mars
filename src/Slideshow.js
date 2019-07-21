import React from 'react';
import logo from './logo.jpg';
import SingleImage from './SingleImage';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    const defaultImage = { logo };
    this.state = {
      currentImage: defaultImage,
      camera: null,
      allImages: [],
      alt: ''
    };
  }

  componentDidMount() {
    const API_KEY = process.env.API_KEY;
    // const earthdate = this.props.earthdate;
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            allImages: result.photos
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

  // async componentDidUpdate(prevProps, prevState) {
  //   const latest = this.props.match.params.pictureId;
  //   const prev = prevProps.match.params.pictureId;

  //   if (latest !== prev) {
  //     const { data } = await axios.get(`/pictures/${latest}`);
  //     this.setState({
  //       picture: data
  //     });
  //   }
  // }
  renderItems() {
    return this.props.items.map(item => (
      <SingleImage key={item.id} item={item} />
    ));
  }

  render() {
    // const pictureId = Number(this.props.match.params.pictureId);
    // const next = (pictureId % 5) + 1;
    // const prev = pictureId <= 1 ? 5 : pictureId - 1;
    // const { imageUrl, name, faves } = this.state.picture;

    console.log(this.props);
    return (
      <div id="gallery-item" className="fill">
        <div id="image-wrapper">{this.renderItems()}</div>
        <div id="image-details">
          {/* <Link to={`/gallery/${prev}`}>Prev</Link> */}
          <p>{this.state.camera}</p>
          {/* <Link to={`/gallery/${next}`}>Next</Link> */}
        </div>
      </div>
      // <div>
      //   <img src={logo} className="App-logo" alt="logo" />
      // </div>
    );
  }
}
