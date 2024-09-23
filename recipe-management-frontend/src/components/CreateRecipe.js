import React, { useState } from 'react';
import { createRecipe } from '../services/recipeService';

const CreateRecipe = ({ token }) => {
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    cuisineType: '',
    cookingTime: '',
  });

  const handleChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedIngredients = recipeData.ingredients.split(',');
      const newRecipe = {
        ...recipeData,
        ingredients: formattedIngredients,
      };
      await createRecipe(newRecipe, token);
      alert('Recipe created successfully');
      setRecipeData({
        title: '',
        ingredients: '',
        instructions: '',
        cuisineType: '',
        cookingTime: '',
      });
    } catch (error) {
      console.error('Error creating recipe:', error);
      alert('Failed to create recipe. Please try again.');
    }
  };

  return (
    <div>
      <h1>Create Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={recipeData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ingredients (comma-separated)</label>
          <input
            type="text"
            name="ingredients"
            value={recipeData.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Instructions</label>
          <textarea
            name="instructions"
            value={recipeData.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cuisine Type</label>
          <input
            type="text"
            name="cuisineType"
            value={recipeData.cuisineType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cooking Time (minutes)</label>
          <input
            type="number"
            name="cookingTime"
            value={recipeData.cookingTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
