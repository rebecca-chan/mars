import React from 'react';

export default function SingleImage(props) {
  return (
    <div>
      <p> {props.camera.full_name}</p>
      <img src={props.img_src} alt="Mars" />
    </div>
  );
}
