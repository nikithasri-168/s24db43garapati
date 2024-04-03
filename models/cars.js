const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
    cars_make: String,
    cars_model: String,
    cars_year: Number
});

module.exports = mongoose.model("Car", carSchema);
