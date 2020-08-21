const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = ({
    airport: String,
    arrival: Date
})

const flightSchema = new Schema ({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destination: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);