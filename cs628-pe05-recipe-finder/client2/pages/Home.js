import { Link } from 'react-router-dom';
import '../style.css';

const Home = () => (
  <div className='container'>
    <h1>Welcome to Recipe Finder!</h1>
    <p>Where you can manage, share, and discover new recipes.</p>
    <Link to='/recipes'>
      <button className='browser-btn'>Browse Recipes</button>
    </Link>
  </div>
);

export default Home;
