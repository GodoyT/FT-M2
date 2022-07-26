import React from 'react';

export default function Card(props) {
 
  return (
  <div>
    <button onClick={props.onClose}>X</button>
    <h3>{props.name}</h3>
    <div>
      <p>MIN</p>
      <p>{props.min}º</p>
    </div>
    <div>
      <p>MAX</p>
      <p>{props.max}º</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='not Found'></img>
  </div>
  )
};