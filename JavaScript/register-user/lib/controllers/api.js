'use strict';

var mongoose = require('mongoose'),
	Thing = mongoose.model('Thing'),
	async = require('async');

exports.awesomeThings = function(req, res) {
	return Thing.find(function(err, things) {
		if (!err) {
			return res.json(things);
		} else {
			return res.send(err);
		}
	});
};

exports.users = function(req, res) {
	mongoose.model('User').find(function(err, users) {
		if (!err) {
			return res.json(users);
		} else {
			return res.send(err);
		}
	});
};

exports.createUser = function(req, res) {
	var User = mongoose.model('User');
	new User({
		name: req.body.name
	}).save(function() {
		res.end();
	});
};