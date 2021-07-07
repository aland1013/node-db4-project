exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipeName: 'martini' },
    { recipeName: 'moscow mule' }
  ]);
};
