import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../style.css';

// this function fetches and displays details
// of the selected recipe
const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipes/${id}`)
      .then((response) => setRecipe(response.data))
      .catch((error) => console.error('Error fetching recipe details:', error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/recipes/${id}`)
      .then(() => navigate('/recipes'))
      .catch((error) => console.error('Error deleting recipe:', error));
  };

  if (!recipe) return <p>Loading recipe details...</p>;

  return (
    <div className='container'>
      <h2>{recipe.name}</h2>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <p>{recipe.instructions}</p>

      <div className='actions'>
        <Link to={`/recipes/edit/${id}`}>
          <button className='edit-btn'>Edit</button>
        </Link>
        <button onClick={handleDelete} className='delete-btn'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
