var mqtt = require('mqtt'),
  client = mqtt
  .createClient(61613)
  .on('connect', function() {
    console.log('connect OK!');
  })
  .subscribe('message', function(err, granted) {
    console.log(err, granted, 'start subscribe');
  })
  .on('message', function() {
    console.log(arguments);
  })
