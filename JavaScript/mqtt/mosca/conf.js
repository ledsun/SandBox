var mosca = require('mosca');

module.exports = {
  port: 61613,
  logger: {
    level: 'info'
  },
  backend: {
    type: 'redis',
    port: 6379,
    host: 'localhost'
  },
  persistence: {
    factory: mosca.persistence.Redis,
    port: 6379,
    host: 'localhost'
  }
};
