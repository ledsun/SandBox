var mqtt = require('mqtt');
var client = mqtt.createClient(61613, {
  username: 'admin',
  password: 'password'
});

client.subscribe('message');

client.on('message', function() {
  console.log(arguments);
});
