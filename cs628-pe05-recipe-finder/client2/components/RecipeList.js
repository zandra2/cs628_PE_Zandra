import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style.css';

// this function displays a list of recipes
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/recipes')
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className='container'>
      <h2>Recipe List</h2>
      <ul className='recipe-list'>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
