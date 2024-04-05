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
// for a specific Car.
exports.cars_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Car.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
// Handle Costume update form on PUT.
exports.cars_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Car.findById( req.params.id)
// Do updates of properties
if(req.body.car_type)
toUpdate.car_type = req.body.car_type;
if(req.body.cars_make) toUpdate.cars_make = req.body.cars_make;
if(req.body.cars_model) toUpdate.cars_model = req.body.cars_model;
if(req.body.cars_year) toUpdate.cars_year = req.body.cars_year;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

