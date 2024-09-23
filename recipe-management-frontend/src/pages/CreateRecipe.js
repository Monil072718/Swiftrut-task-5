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
      alert('Failed to create recipe');
    }
  };

  return (
    <div>
      <h1>Create Recipe</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
