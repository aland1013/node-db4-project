const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(id) {
  return db('ingredients')
    .join(
      'recipe_ingredients',
      'ingredients.id',
      'recipe_ingredients.ingredientId'
    )
    .select('recipe_ingredients.quantity', 'ingredients.ingredientName')
    .where({ 'recipe_ingredients.recipeId': id });
}
