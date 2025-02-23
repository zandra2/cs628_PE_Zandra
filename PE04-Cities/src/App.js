import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CityList from './CityList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';
import './style.css';

function App() {
  const [cities, setCities] = useState([]);

  const handleAddCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <Router>
      <div className='container'>
        <h1>Cities Application</h1>
        <div className='navbar'>
          <Link to='/'>Cities List</Link>
          <Link to='/add-city'>Add City</Link>
        </div>
        <Routes>
          <Route path='/' element={<CityList cities={cities} />} />
          <Route
            path='/add-city'
            element={<AddCity onAddCity={handleAddCity} />}
          />
          {/* Adding route for City Details */}
          <Route path='/city/:name' element={<CityDetails cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
