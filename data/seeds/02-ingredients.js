exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredientName: 'vodka' },
    { ingredientName: 'dry vermouth' },
    { ingredientName: 'lemon' },
    { ingredientName: 'lime juice' },
    { ingredientName: 'ice' },
    { ingredientName: 'ginger beer' },
    { ingredientName: 'lime' }
  ]);
};
