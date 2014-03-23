var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', {
	name: String
});

var kitty = new Cat({
	name: 'Zildjian'
});
kitty.save(function(err) {
	if (!err) {
		console.log('save meow');
	}
});

Cat.remove(function(){});

//CREATE
Cat.create({
	name: '12時から3時頃まで'
}, function(err) {
	if (!err) {
		console.log('create meow');
	}
});

//READ
Cat.find({}, function(err, cats) {
	if (!err) {
		console.log(cats);
	}
});

//UPDATE
Cat.find({}, function(err, cats) {
	if (!err) {
		cats[0].name = 'aaabc';
		cats[0].save();
	}
});

//DELETE
Cat.find({}, function(err, cats) {
	if (!err) {
		cats[0].remove();
	}
});

