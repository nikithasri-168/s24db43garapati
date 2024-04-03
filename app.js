// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

var Car = require('./models/cars'); 

async function recreateDB() {
  await Car.deleteMany();

  let instance1 = new
    Car({
      cars_make: "Toyota", cars_model: 'Camry',
      cars_year: 2022
    });
  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance2 = new
    Car({
      cars_make: "Honda", cars_model: 'Civic',
      cars_year: 2021
    });
  instance2.save().then(doc => {
    console.log("Second object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance3 = new
    Car({
      cars_make: "Suzuki", cars_model: 'Alto',
      cars_year: 2021
    });
  instance3.save().then(doc => {
    console.log("Third object saved")
  }
  ).catch(err => {
    console.error(err)
  });
}
  let reseed = true;
if (reseed) { recreateDB();
}



// Import route files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars'); // Import cars router
const gridRouter = require('./routes/grid');
const resourceRouter = require('./routes/resource');

// Create Express app
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Route registration
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter); // Use carsRouter for /cars routes
app.use('/grid', gridRouter);
app.get('/randomitem', function (req, res) {
  res.render('randomitem', { title: 'A random item' });
});
app.use('/resource', resourceRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
