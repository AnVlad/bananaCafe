const dishesRouter = require('express').Router();

const Dish = require('../models/dish');

dishesRouter.get('/', async (request, response) => {
  const dishes = await Dish.find({});

  response.json(dishes);
});

dishesRouter.post('/', async (request, response) => {
  const body = request.body;

  const dish = new Dish({
    ...body,
  });

  const savedDish = await dish.save();

  response.status(202).json(savedDish);
});

dishesRouter.delete('/', async (request, response) => {
  const id = request.body.id;

  const deletedDish = await Dish.findByIdAndRemove(id);
  response.status(202).json(deletedDish);
});

dishesRouter.post('/addSeveral', async (request, response) => {
  const body = request.body;

  const severalDishes = await Dish.create(body);

  response.status(202).json(severalDishes);
});

module.exports = dishesRouter;
