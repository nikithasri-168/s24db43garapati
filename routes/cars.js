const express = require('express');
const router = express.Router();

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2022 },
  { make: 'Honda', model: 'Civic', year: 2021 },
  { make: 'Suzuki', model: 'Alto', year: 2021 },
];

router.get('/', (req, res) => {
  res.render('cars', { title: 'Search Results', cars });
});

module.exports = router;
