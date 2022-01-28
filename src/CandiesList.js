import CandyItem from './CandyItem.js';

export default function CandiesList(props) {
  return <div className="candy-list">
    {
      props.candies.map((candy, i) => 
        <CandyItem 
          key={`${candy}-${i}`} 
          candyName={candy} />
      )}
  </div>;
}