module.exports = function(socket){
  socket.send('utf 8 string');
  socket.send(new Buffer([0, 1, 2, 3, 4, 5])); // binary data
  socket.on('message', function(data){
    console.log(data);
  });
};
