var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights.js');


// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
// router.post('/', flightsCtrl.create);


module.exports = router;
