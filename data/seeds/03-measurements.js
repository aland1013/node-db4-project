exports.seed = function (knex) {
  return knex('measurements').insert([
    { measurementName: 'oz.' },
    { measurementName: 'C' },
    { measurementName: 'wedge' },
    { measurementName: 'twist' }
  ]);
};
