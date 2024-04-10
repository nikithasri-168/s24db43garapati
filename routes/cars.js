var express = require('express');
const car_controllers= require('../controllers/cars');
var router = express.Router();

// GET request for all cars
router.get('/', car_controllers.cars_view_all_Page );

// GET request for one car
router.get('/:id', car_controllers.cars_detail);

// PUT request for updating a specific car
router.put('/cars/:id', car_controllers.cars_update_put);

/* GET detail car page */
router.get('/detail', car_controllers.cars_view_one_Page);


module.exports = router;
