const express = require('express');

const Recipe = require('./recipe-model');

const router = express.Router();

/* ----- GET /api/recipes ----- */
router.get('/', (req, res) => {
  Recipe.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
});

/* ----- GET /api/recipes/:id/shoppingList ----- */
router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;

  Recipe.getShoppingList(id)
    .then((ingredients) => {
      if (ingredients.length) {
        res.json(ingredients);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find ingredients for given recipe' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get ingredients' });
    });
});

/* ----- GET /api/recipes/:id/instructions ----- */
router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipe.getInstructions(id)
    .then((instructions) => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find instructions for given recipe' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
});

module.exports = router;
