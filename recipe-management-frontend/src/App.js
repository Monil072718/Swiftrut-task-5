import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';
import RecipeDetail from './components/RecipeDetail';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')); // Load token from localStorage

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/create" element={<CreateRecipe token={token} />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
