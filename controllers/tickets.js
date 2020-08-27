const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};

function addToFlight(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function create(req, res) {
  Ticket.create(req.body, function(err, ticket) {
    res.redirect('/tickets/new')
  })
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('tickets/new')
  })
}