var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var cars_controller = require('../controllers/cars'); 

router.get('/', api_controller.api);

router.post('/cars', cars_controller.cars_create_post); 

router.delete('/cars/:id', cars_controller.cars_delete); 

router.put('/cars/:id', cars_controller.cars_update_put); 

router.get('/cars/:id', cars_controller.cars_detail); 

router.get('/cars', cars_controller.cars_list); 
module.exports = router;