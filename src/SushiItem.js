import React from 'react';


export default function SushiItem(props) {
  return <div className="sushi-item">
    <p>{props.name}</p>
    <p>{props.price}</p>
    <img src={props.image} />
  </div>;
}

