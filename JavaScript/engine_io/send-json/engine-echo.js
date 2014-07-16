var sockets = [];

module.exports = function(socket) {
  sockets.push(socket);

  socket.on('message', function(data) {
    console.log(data);

    sockets.forEach(function(socket) {
      socket.send(data);
    });
  }).on('error', function(error) {
    console.log(error);
  });
};
