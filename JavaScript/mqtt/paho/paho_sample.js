console.log('hello paho', Paho.MQTT);

var client = new Paho.MQTT.Client("127.0.0.1", 61623, "ClientId");
client.startTrace();

client.onConnectionLost = function (responseObject) {
  if (responseObject.errorCode !== 0)
    console.log("onConnectionLost:"+responseObject.errorMessage);
}

client.onMessageArrived = function (message) {
  console.log("onMessageArrived:"+message.payloadString);
  client.disconnect();
}

client.connect({
  userName: 'admin',
  password: 'password',
  onSuccess: function() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe("/World");
    message = new Paho.MQTT.Message("Hello");
    message.destinationName = "/World";
    client.send(message);
  }
});

console.log('trace', client.getTraceLog());
