import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

// this function displays details of selected city
// useParams hook is used to get city name and
// return if city not found or details of the city if found.
export default function CityDetails({ cities }) {
  const { name } = useParams();
  const city = cities.find((c) => c.name === name);

  if (!city) {
    return <p className='error-msg'>City not found.</p>;
  }

  return (
    <div>
      <h3>{city.name} Details</h3>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
}
