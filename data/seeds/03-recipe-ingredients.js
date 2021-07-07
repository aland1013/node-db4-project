exports.seed = function (knex) {
  return knex('recipe_ingredients').insert([
    { recipeId: 1, ingredientId: 3, quantity: 1 },
    { recipeId: 1, ingredientId: 1, quantity: 1.5 },
    { recipeId: 1, ingredientId: 2, quantity: 0.5 },
    { recipeId: 2, ingredientId: 1, quantity: 1.5 },
    { recipeId: 2, ingredientId: 4, quantity: 0.5 },
    { recipeId: 2, ingredientId: 5, quantity: 1 },
    { recipeId: 2, ingredientId: 6, quantity: 0.5 },
    { recipeId: 2, ingredientId: 7, quantity: 1 }
  ]);
};
