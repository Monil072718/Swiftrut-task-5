const Recipe = require('../models/Recipe');

// Get all recipes
exports.getRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error); // Log the error to the console
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
  
  // Get recipe by ID
  exports.getRecipeById = async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      console.error('Error fetching recipe by ID:', error); // Log the error to the console
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
  

// Create a new recipe
exports.createRecipe = async (req, res) => {
  const { title, ingredients, instructions, cuisineType, cookingTime } = req.body;
  try {
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      cuisineType,
      cookingTime,
    });
    const recipe = await newRecipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update recipe
exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
