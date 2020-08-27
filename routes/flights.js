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
// GET /flights/:id/tickets/new
router.get('/:id/tickets/new', ticketsCtrl.new)
// POST /flights/:id/tickets
router.post('/:id/tickets', ticketsCtrl.create);



module.exports = router;
