exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredientName: 'oz of vodka' },
    { ingredientName: 'oz of dry vermouth' },
    { ingredientName: 'lemon wedge' },
    { ingredientName: 'oz of lime juice' },
    { ingredientName: 'C of ice' },
    { ingredientName: 'oz of ginger beer' },
    { ingredientName: 'lime wedge' }
  ]);
};
