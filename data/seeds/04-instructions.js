exports.seed = function (knex) {
  return knex('instructions').insert([
    { recipeId: 1, step: 'chill cocktail glass' },
    { recipeId: 1, step: 'pour vermouth into glass' },
    { recipeId: 1, step: 'add vodka and ice to shaker' },
    { recipeId: 1, step: 'shake well' },
    { recipeId: 1, step: 'strain into glass' },
    { recipeId: 1, step: 'garnish with lemon twist' },
    { recipeId: 2, step: 'pour vodka an lime juice into copper mug' },
    { recipeId: 2, step: 'add ice and ginger beer' },
    { recipeId: 2, step: 'stir' },
    { recipeId: 2, step: 'garnish with lime wedge' }
  ]);
};
