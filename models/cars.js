// models/cars.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  cars_make: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 13
},
  cars_model: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 9
},
  cars_year: {
        type: Number,
        required: true,
        min: 0,
        max: 10000
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;