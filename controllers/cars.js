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