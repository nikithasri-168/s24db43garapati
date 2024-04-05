var express = require('express');
const car_controllers= require('../controllers/cars');
var router = express.Router();

// GET request for all cars
router.get('/', car_controllers.cars_view_all_Page );

// GET request for one car
router.get('/:id', car_controllers.cars_detail);

// PUT request for updating a specific car
router.put('/cars/:id', car_controllers.cars_update_put);

module.exports = router;
