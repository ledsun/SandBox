'use strict'
var mosquitto = new Mosquitto;

mosquitto.connect('ws://0.0.0.0:61623/');
mosquitto.onconnect = function(rc, a) {
  console.log('ccc', rc, a);
};
mosquitto.onmessage = function() {
  console.log('bbb');
};
mosquitto.subscribe('message');

console.log('aaa');
