import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import Navbar from './components/Navbar';
import RecipeDetails from './components/RecipeDetails';
import EditRecipe from './components/EditRecipe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipeDetails />} />
        <Route path='/add-recipe' element={<AddRecipe />} />
        <Route path='/recipes/edit/:id' element={<EditRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
