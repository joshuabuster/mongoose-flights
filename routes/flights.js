var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');


// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);
// GET /flights/:id
router.get('/:id', flightsCtrl.show);


// do something that handles /flights/5f46f725a914111aee2463a5/tickets/new
router.get('/:id/tickets/new', ticketsCtrl.new)

module.exports = router;
