import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

// this function allows users to add new city to the list and
// redirect to home after city is added. It also prevents page reload.
export default function AddCity({ onAddCity }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCity({ name, country, population });
    navigate('/'); // Redirect to Cities List after adding
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Country:</label>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <label>Population:</label>
        <input
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          required
        />
        <button type='submit'>Add City</button>
      </form>
    </div>
  );
}
