const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  title: String,
  description: String,
  prices: [{ type: Number }],
  image: String,
  rating: Number,
  type: String,
});

dishSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
