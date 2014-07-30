var mqtt = require('mqtt');
var client = mqtt.createClient(61613, {
  username: 'admin',
  password: 'password'
});

setInterval(function() {
  client.publish('message');
  client.publish('message', 'こんにちわ');
  client.publish('message', Date.now().toString());
}, 1000);
