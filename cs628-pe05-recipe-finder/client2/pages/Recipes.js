import RecipeList from '../components/RecipeList';
import { Outlet } from 'react-router-dom';

const Recipes = () => (
  <div>
    <RecipeList />
    <Outlet />
  </div>
);

export default Recipes;
