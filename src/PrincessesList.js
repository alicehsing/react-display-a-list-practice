import React from 'react';
import PrincessItem from './PrincessItem';

export default function PrincessesList(props) {
  return <div className="princess-list">
    {
      props.princesses.map((princess, i) =>
        <PrincessItem 
          key={`${princess}-${i}`}
         //this passes an object that will be accessible as props.princess
        // princess={princess}
        //on the other hand, this passes every key on its own prop, as props.name, props.age etc.
        //{...princess}
          {...princess}/>
      )}

  </div>;
}

