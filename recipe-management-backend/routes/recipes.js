const express = require('express');
const router = express.Router();
const {
  getRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController'); // Ensure the path is correct

// Routes
router.get('/', getRecipes);               // GET /api/recipes
router.post('/', createRecipe);            // POST /api/recipes
router.get('/:id', getRecipeById);         // GET /api/recipes/:id
router.put('/:id', updateRecipe);          // PUT /api/recipes/:id
router.delete('/:id', deleteRecipe);       // DELETE /api/recipes/:id

module.exports = router;
