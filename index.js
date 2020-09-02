require('dotenv').config();

const restify = require('restify');
const restifySwaggerJsdoc = require('restify-swagger-jsdoc');
const swaggerPluginDefinition = require('./plugins/swagger-options');

const routesCreator = require('./v1/routes');
const config = require('./config');

const server = restify.createServer();

restifySwaggerJsdoc.createSwaggerPage({
  ...swaggerPluginDefinition,
  server,
});

routesCreator(server);

server.listen(config.app.port, () => {
  console.log('%s listening at %s', server.name, server.url);
});
