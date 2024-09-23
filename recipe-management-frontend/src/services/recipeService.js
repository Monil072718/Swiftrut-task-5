import axios from '../api/axios'; // Use the base Axios instance

// Get all recipes
// Get all recipes
export const getRecipes = async () => {
    try {
      const response = await axios.get('/recipes');
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error.response?.data || error.message);
      throw error;
    }
  };
  

// Get a single recipe by ID
export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}`, error);
    throw error;
  }
};

// Create a new recipe
export const createRecipe = async (recipeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Pass the token for authorization
    },
  };
  try {
    const response = await axios.post('/recipes', recipeData, config);
    return response.data;
  } catch (error) {
    console.error('Error creating recipe', error);
    throw error;
  }
};

// Update recipe by ID
export const updateRecipe = async (id, recipeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Pass the token for authorization
    },
  };
  try {
    const response = await axios.put(`/recipes/${id}`, recipeData, config);
    return response.data;
  } catch (error) {
    console.error(`Error updating recipe with ID ${id}`, error);
    throw error;
  }
};

// Delete recipe by ID
export const deleteRecipe = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Pass the token for authorization
    },
  };
  try {
    const response = await axios.delete(`/recipes/${id}`, config);
    return response.data;
  } catch (error) {
    console.error(`Error deleting recipe with ID ${id}`, error);
    throw error;
  }
};
