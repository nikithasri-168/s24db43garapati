const cars = require('../models/cars');
var Car = require('../models/cars');
exports.cars_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Cars list');
};

exports.cars_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Cars detail: ' + req.params.id);
};

exports.cars_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Cars create POST');
};

exports.cars_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Cars delete DELETE ' + req.params.id);
};

exports.cars_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Cars update PUT' + req.params.id);
};

//List of all Costumes
exports.cars_list = async function(req, res) {
try{
theCars = await cars.find();
res.send(theCars);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.cars_view_all_Page = async function(req, res) {
    try{
    theCars = await cars.find();
    res.render('cars', { title: 'Car Search Results', results: theCars });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// Handle Car create on POST.
exports.car_create_post = async function(req, res) {
console.log(req.body)
let document = new Car();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.cars_make = req.body.cars_make;
document.cars_model = req.body.cars_model;
document.cars_year = req.body.cars_year;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
