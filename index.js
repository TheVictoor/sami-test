require('dotenv').config();

const restify = require('restify');

const routesCreator = require('./v1/routes');
const config = require('./config');

const server = restify.createServer();

routesCreator(server);

server.listen(config.app.port, () => {
  console.log('%s listening at %s', server.name, server.url);
});
