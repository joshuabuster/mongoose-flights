const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create,
    show
};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Flight Details', flight });
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
