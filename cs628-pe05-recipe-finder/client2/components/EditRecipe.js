import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// this function is to allow users to edit the recipe
// by fetching the data checking for recipe id and updating the changes
const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    // imageUrl: '',  // (future improvement)
  });

  // Fetch recipe data
  useEffect(() => {
    fetch(`http://localhost:5000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setFormData({
          name: data.name,
          ingredients: data.ingredients.join('\n'),
          instructions: data.instructions,
          //   imageUrl: data.imageUrl || '',
        })
      )
      .catch((err) => console.error('Error:', err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/recipes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        ingredients: formData.ingredients
          .split('\n')
          .map((item) => item.trim()),
      }),
    })
      .then((res) => res.json())
      .then(() => navigate(`/recipes/${id}`))
      .catch((err) => console.error('Update error:', err));
  };

  return (
    <div className='edit-recipe-container'>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Recipe Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name='ingredients'
          placeholder='Ingredients (one per line)'
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name='instructions'
          placeholder='Instructions'
          value={formData.instructions}
          onChange={handleChange}
          required
        />
        {/* <input
          type='text'
          name='imageUrl'
          placeholder='Image URL'
          value={formData.imageUrl}
          onChange={handleChange}
        /> */}
        <button type='submit'>Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;
