import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function CityList({ cities }) {
  return (
    <div className='container'>
      <h2>Cities List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            {/* Clicks on city name redirects to /city/:name */}
            <Link to={`/city/${city.name}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
