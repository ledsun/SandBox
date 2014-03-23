var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var cat = mongoose.model('cat', { name: String });

cat.create({ name: '玉之丞' });
cat.find({}, function(err, cats) {
	console.log(cats);
});
