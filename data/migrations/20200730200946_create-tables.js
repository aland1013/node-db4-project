exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments();
      tbl.string('recipeName', 128).notNullable();
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments();
      tbl.string('ingredientName', 128).notNullable();
    })
    .createTable('measurements', (tbl) => {
      tbl.increments();
      tbl.string('measurementName', 128).notNullable();
    })
    .createTable('recipe_ingredients', (tbl) => {
      tbl.float('quantity').notNullable();
      tbl
        .integer('recipeId')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredientId')
        .unsigned()
        .notNullable()
        .references('ingredients.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('measurementId')
        .unsigned()
        .notNullable()
        .references('measurements.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['recipeId', 'ingredientId']);
    })
    .createTable('instructions', (tbl) => {
      tbl.increments();
      tbl.string('step', 128).notNullable();
      tbl
        .integer('recipeId')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('measurements')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
