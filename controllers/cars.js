const cars = require('../models/cars');
var Car = require('../models/cars');

exports.cars_list = async function(req, res) {
    try {
        theCars = await cars.find();
        res.send(theCars);
    } catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.cars_detail = async function(req, res) {
    console.log("detail" + req.params.id);
    try {
        result = await Car.findById(req.params.id);
        res.send(result);
    } catch(error) {
        res.status(500);
        res.send(`"error": document for id ${req.params.id} not found`);
    }
};

exports.cars_create_post = async function(req, res) {
    console.log(req.body);
    let document = new Car();
    document.cars_make = req.body.cars_make;
    document.cars_model = req.body.cars_model;
    document.cars_year = req.body.cars_year;
    try {
        let result = await document.save();
        res.send(result);
    } catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.cars_delete = async function(req, res) {
    console.log("delete " + req.params.id);
    try {
        result = await Car.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
};

exports.cars_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Car.findById(req.params.id);
        if (req.body.car_type) toUpdate.car_type = req.body.car_type;
        if (req.body.cars_make) toUpdate.cars_make = req.body.cars_make;
        if (req.body.cars_model) toUpdate.cars_model = req.body.cars_model;
        if (req.body.cars_year) toUpdate.cars_year = req.body.cars_year;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch(err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

exports.cars_view_all_Page = async function(req, res) {
    try {
        theCars = await cars.find();
        res.render('cars', { title: 'Car Search Results', results: theCars });
    } catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.cars_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id);
    try {
        result = await Car.findById(req.query.id);
        res.render('cardetail', { title: 'Car Detail', toShow: result });
    } catch(err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
