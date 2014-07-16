module.exports = function(socket){
  socket.on('message', function(data){
    console.log(data);
    socket.send(data);
  }).on('error', function(error){
    console.log(error);
  });
};
