import SushiItem from './SushiItem';

export default function SushisList(props) {
  return <div className="sushi-list">
    {
      props.sushis.map((sushi, i) => 
        <SushiItem 
          key={`${sushi}-${i}`} 
          name={sushi.name}
          image={sushi.image}
          price={sushi.price}
        //this passes an object that will  be accessible as props.sushi
        // sushi={sushi}
        //on the other hand, this passes every key on its own prop, as props.name, props.images etc.
        //{...sushi}
        />
      )
    }
  </div>;
}
