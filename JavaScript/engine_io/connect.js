var engine = require('engine.io'),
  connect = require('connect'),
  serveStatic = require('serve-static'),
  engineModule = require('./engine-module'),
  http = connect()
  .use(serveStatic(__dirname))
  .listen(3000),
  server = engine.attach(http);

server.on('connection', engineModule);

console.log('server starts');
