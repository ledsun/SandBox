var mqtt = require('mqtt');
var client = mqtt.createClient(1883, {
  username: 'admin',
  password: 'password'
});

client.subscribe('message');

client.on('message', function() {
  console.log(arguments);
});
