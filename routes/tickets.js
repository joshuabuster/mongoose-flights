const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/:id/tickets/new', ticketsCtrl.new);

module.exports = router;