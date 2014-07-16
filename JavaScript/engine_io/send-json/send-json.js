var engine = require('engine.io'),
  connect = require('connect'),
  serveStatic = require('serve-static'),
  echo = require('./engine-echo'),
  http = connect()
  .use(serveStatic(__dirname))
  .listen(3000),
  server = engine.attach(http);

server.on('connection', echo);

console.log('server starts');
