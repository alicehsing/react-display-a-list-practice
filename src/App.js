
import './App.css';
import CandiesList from './CandiesList';
import SushisList from './SushisList';
import PrincessesList from './PrincessesList';
import PostsList from './PostsList';
// import your arrays here
import { candies } from './candies-data';
import { sushisArr } from './sushi-data';
import { princessArr } from './princess-data';
import { postsArr } from './posts-data';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <hr></hr>
      <section>
        <h3>My favorite candies</h3>
        <CandiesList candies={candies} />
      </section>

      <section>
        <h3>My favorite sushis</h3>
        <SushisList sushis={sushisArr} />
      </section>

      <section>
        <h3>My favorite Disney princesses</h3>
        <PrincessesList princesses={princessArr} />
      </section>

      <section>
        <h3>Neighborhood Posts</h3>
        <PostsList posts={postsArr} />
      </section>
    </div>
  );
}

export default App;
