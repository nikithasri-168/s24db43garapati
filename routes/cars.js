var express = require('express');
const car_controlers= require('../controllers/cars');
var router = express.Router();
/* GET costumes */
router.get('/', car_controlers.cars_view_all_Page );
module.exports = router;

