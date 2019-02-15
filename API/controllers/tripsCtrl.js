'use strict';
//             TRIPS 
var mongoose = require('mongoose'),
  Trip = mongoose.model('Trips');

  exports.create_an_trip = function (req, res) {
    //Check if the user is an explorer and if not: res.status(403); "an access token is valid, but requires more privileges"
    var new_trip = new Trip(req.body);
    new_trip.save(function (err, trip) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(trip);
        }
    });
};

exports.list_all_trips = function (req, res) {
    //Check if status param exists (status: req.query.status)  
    Trip.find({ }, function (err, trips) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(trips);
        }
    });

    console.log('Searching an trip depending on params');
    res.send('Trip returned from the trip search');
};

exports.list_a_trip = function (req, res) {
    //Check if status param exists (status: req.query.status)  
    Trip.find({ _id: req.params._id }, function (err, trips) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(trips);
        }
    });

    console.log('Searching an trip depending on params');
    res.send('Trip returned from the trip search');
};


exports.update_an_trip = function (req, res) {
    Trip.findOneAndUpdate({ _id: req.params.tripId }, req.body, { new: true }, function (err, trip) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(trip);
        }
    });
};

exports.delete_an_trip = function (req, res) {
    Trip.deleteOne({ _id: req.params.tripId }, function (err, trip) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ message: 'Trip successfully deleted' });
        }
    });
};