import React, { useEffect, useState } from 'react';
import { getRecipeById } from '../services/recipeService';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeById(id);
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Recipe Image */}
        <div>
          <img
            src={recipe.imageUrl || 'https://via.placeholder.com/500'}
            alt={recipe.title}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Recipe Details */}
        <div>
          <h1 className="text-4xl font-bold text-purple-700 mb-4">{recipe.title}</h1>

          <h2 className="text-xl font-semibold text-gray-700">Let’s Talk Food <span className="italic text-gray-500">shall we?</span></h2>

          <p className="text-gray-700 mt-4 mb-8 leading-relaxed">
            {recipe.description ||
              "This is where you can provide some brief description or details about the recipe, its inspiration, or fun facts!"}
          </p>

          <p className="font-bold text-lg mb-2">Ingredients:</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <p className="font-bold text-lg mb-2">Instructions:</p>
          <p className="text-gray-600 leading-relaxed">{recipe.instructions}</p>

          <p className="mt-6 text-sm text-gray-500">Cuisine: {recipe.cuisineType}</p>
          <p className="text-sm text-gray-500">Cooking Time: {recipe.cookingTime} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
