var request = require('request');

var post = function() {
	request.post({
		url: 'http://entry2014-staging.herokuapp.com/api/entries',
		body: {
			action: 'login',
			params: {
				id: 'テストユーザー',
				password: 'hogehoge'
			},
		},
		json: true
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(response.statusCode + ':', body);
		} else {
			console.log('error: ' + error, response);
		}
	});
};


for (var i = 0; i < 100; i++) {
	post();
}