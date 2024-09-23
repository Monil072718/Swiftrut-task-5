import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipeById, updateRecipe } from '../services/recipeService';

const EditRecipe = ({ token }) => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    cuisineType: '',
    cookingTime: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipe = await getRecipeById(id);
        setRecipeData({
          title: recipe.title,
          ingredients: recipe.ingredients.join(', '),
          instructions: recipe.instructions,
          cuisineType: recipe.cuisineType,
          cookingTime: recipe.cookingTime,
        });
      } catch (err) {
        setError('Error fetching recipe');
      }
    };

    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedRecipe = {
        ...recipeData,
        ingredients: recipeData.ingredients.split(','),
      };
      await updateRecipe(id, updatedRecipe, token);
      alert('Recipe updated successfully');
      navigate(`/recipes/${id}`);
    } catch (err) {
      setError('Error updating recipe');
    }
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={recipeData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ingredients"
          value={recipeData.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="instructions"
          value={recipeData.instructions}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cuisineType"
          value={recipeData.cuisineType}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="cookingTime"
          value={recipeData.cookingTime}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;
