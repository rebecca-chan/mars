import React from 'react';

export default function SingleImage(props) {
  console.log(props, 'singlemage props');
  return (
    <div className="gallery-item">
      <p> {props.item.camera.full_name}</p>
      <img src={props.img_src} alt="Mars" />
    </div>
  );
}
