var mows = require('mows'),
  client = mows.createClient(61623, {
    username: 'admin',
    password: 'password',
    keepalive: 10000
  });

client
  .subscribe('message')
  .on('message', function() {
    console.log(arguments);
  })

setInterval(function() {
  client.publish('message', '1234567890');
}, 1000);
