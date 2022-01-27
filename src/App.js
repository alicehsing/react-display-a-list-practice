
import './App.css';
import CandiesList from './CandiesList';
import SushisList from './SushisList';
// import your arrays here
import { candies } from './candies-data';
import { sushisArr } from './sushi-data';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <hr></hr>
      <section>
        
        <CandiesList candies={candies} />
      </section>

      <section>
        <SushisList sushis={sushisArr} />
      </section>
    </div>
  );
}

export default App;
