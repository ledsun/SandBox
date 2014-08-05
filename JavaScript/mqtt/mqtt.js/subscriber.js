var mqtt = require('mqtt'),
  client = mqtt
  .createClient(61613, {
    username: 'admin',
    password: 'password'
  })
  .on('connect', function() {
    console.log('connect OK!');
  })
  .subscribe('message', function(err, granted) {
    console.log('subscribe OK!', err, granted);
  })
  .on('message', function() {
    console.log(arguments);
  })
