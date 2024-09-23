const mongoose = require('mongoose');

// Recipe Schema
const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // Array of strings
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  cuisineType: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
