const Flight = require('../models/flight');
 
module.exports = {
  create
};

function create(req, res) {
    Movie.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flight/${flight._id}`);
      });
    });
  }