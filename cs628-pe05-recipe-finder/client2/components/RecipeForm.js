import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../style.css';

// this function allows users to add and update recipes
const RecipeForm = ({ isEditMode = false }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    // imageUrl: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEditMode && id) {
      axios
        .get(`http://localhost:5000/recipes/${id}`)
        .then((response) => setRecipe(response.data))
        .catch((error) => console.error('Error fetching recipe:', error));
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = isEditMode
      ? `http://localhost:5000/recipes/${id}`
      : 'http://localhost:5000/recipes';
    const method = isEditMode ? axios.put : axios.post;

    const recipeData = {
      ...recipe,
      ingredients: recipe.ingredients.split(','),
    };

    method(endpoint, recipeData)
      .then(() => navigate('/recipes'))
      .catch((error) => console.error('Error saving recipe:', error));
  };

  return (
    <div className='container'>
      <h2>{isEditMode ? 'Update Recipe' : 'Add New Recipe'}</h2>
      <form onSubmit={handleSubmit} className='recipe-form'>
        <label>Recipe Name:</label>
        <input
          type='text'
          name='name'
          value={recipe.name}
          onChange={handleChange}
          required
        />

        <label>Ingredients (comma-separated):</label>
        <input
          type='text'
          name='ingredients'
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />

        <label>Instructions:</label>
        <textarea
          name='instructions'
          value={recipe.instructions}
          onChange={handleChange}
          required
        />
        {/* ADD IMAGE (future improvement) */}
        {/* <input
          type='text'
          placeholder='Image URL (optional)'
          value={recipe.imageUrl}
          onChange={handleChange}
        /> */}
        <button type='submit'>{isEditMode ? 'Update' : 'Add'} Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
