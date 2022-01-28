import React from 'react';

export default function PrincessItem({
  name,
  age,
  image,
  friend,
  enemy
}) {
  return <div className="princess-item">
    
    <div className="princess-intro">
      <img src={image} />
        This is {name}. She is {age} years old. <hr></hr> Her best friend is {friend}. <hr></hr>Her worst enemy is {enemy.name}.
      <div className="enemy-intro">
        <p>Evil {enemy.name} uses <span>{enemy.weapon}</span> to harm others. </p>
      </div>
    </div>
  </div>;
}

