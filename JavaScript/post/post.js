var request = require('request');

request.post({
	url: 'http://localhost:9000/api/log',
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
		console.log('error: ' + response.statusCode);
	}
});