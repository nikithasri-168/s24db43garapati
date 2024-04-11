var express = require('express');
const passport = require('passport');
const cars_controllers = require('../controllers/cars');
var router = express.Router();

router.get('/', cars_controllers.cars_view_all_Page);

router.get('/cars/:id', cars_controllers.cars_detail);



const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

// router.get('/update', secured, cars_controllers.cars_update_Page);

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

router.get('/detail', secured, cars_controllers.cars_view_one_Page);

router.get('/create', secured, cars_controllers.cars_create_Page);

router.get('/update', secured, cars_controllers.cars_update_Page);

router.get('/delete', secured, cars_controllers.cars_delete_Page);

module.exports = router;
