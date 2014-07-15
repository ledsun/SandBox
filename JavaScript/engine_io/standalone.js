var engine = require('engine.io'),
  engineModule = require('./engine-module'),
  server = engine.listen(3000);

server.on('connection', engineModule);

console.log('server starts');
