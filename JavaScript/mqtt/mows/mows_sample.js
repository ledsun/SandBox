var mows = require('mows'),
  client = mows.createClient(61623, {
    username: 'admin',
    password: 'password'
  });

client
  .subscribe('message')
  .on('message', function() {
    console.log(arguments);
  })

setInterval(function() {
  client.publish('message', 'こんにちわ');
}, 1000);
