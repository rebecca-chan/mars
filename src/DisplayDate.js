import React from 'react';

export default function DisplayDate(props) {
  console.log(props.date);
  // const display = props.date.date.slice(0, 10);
  return (
    <h1>
      <p> Date: </p>
    </h1>
  );
}
