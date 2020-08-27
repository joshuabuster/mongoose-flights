const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    index,
    create,
    show
};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', { title: 'Flight Details', flight, tickets });
    });
  });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if(err) return res.render('flights/new');
    res.redirect('/flights')
  });
}

function newFlight(req,res) {
    res.render('flights/new');
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { flights });
    });
  }
