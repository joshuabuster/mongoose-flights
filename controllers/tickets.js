const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};



function create(req, res) {
  const newTicket = {
    ...req.body,
    flight: req.params.id
  };
  Ticket.create(newTicket, function(err, ticket) {
    ticket.save(function(err) {
      if(err) return res.render('tickets/new');
      res.redirect(`/flights/${req.params.id}`)
    })
  })
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('tickets/new', { flight })
  })
}