const handlers = require('../handlers');
const middlewares = require('../middlewares');
const schemas = require('../schemas');
const factory = require('./factory');

module.exports = (server) => factory({
  server,
  handlers,
  middlewares,
  schemas,
});
