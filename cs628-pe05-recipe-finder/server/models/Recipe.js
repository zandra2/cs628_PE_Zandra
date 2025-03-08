// Adding required to enforce users to complete all fields
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  //   imageUrl: { type: String }, // Add optional image field (future improvement)
});

module.exports = mongoose.model('Recipe', recipeSchema);
