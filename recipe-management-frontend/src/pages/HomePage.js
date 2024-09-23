import React, { useState, useEffect } from 'react';
import { getRecipes } from '../services/recipeService';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching recipes');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Recipes</h1>
        
        <div className="space-y-10">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="flex flex-col lg:flex-row lg:items-center bg-white rounded-lg shadow-md overflow-hidden">
              {/* Recipe Image */}
              <div className="lg:w-1/3">
                <img
                  src={recipe.imageUrl || 'https://via.placeholder.com/400'}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Recipe Content */}
              <div className="lg:w-2/3 p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(recipe.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <h2 className="text-2xl font-bold text-gray-900">{recipe.title}</h2>
                <p className="mt-4 text-gray-600">
                  {recipe.description || "No description available."}
                </p>
                <a
                  href={`/recipes/${recipe._id}`}
                  className="mt-6 inline-block text-yellow-600 font-bold hover:text-yellow-700 transition duration-300"
                >
                  CONTINUE READING
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
