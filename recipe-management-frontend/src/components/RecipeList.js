import React, { useEffect, useState } from 'react';
import { getRecipes } from '../services/recipeService';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">Healthy Recipes</h2>
        
        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid sm:grid-cols-2">
                {/* Recipe Image */}
                <div className="sm:col-span-1">
                  <img
                    src={recipe.imageUrl || 'https://via.placeholder.com/400x300'}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Recipe Content */}
                <div className="p-6 sm:col-span-1">
                  <h3 className="text-2xl font-bold text-gray-900">{recipe.title}</h3>
                  <p className="text-gray-600 mt-4">{recipe.description}</p>

                  {/* Link to Recipe Detail */}
                  <Link
                    to={`/recipes/${recipe._id}`}
                    className="mt-6 inline-block bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300"
                  >
                    Make This Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
