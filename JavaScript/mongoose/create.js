var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.model('cat', { name: String })
	.create({ name: '玉之丞' });