require('dotenv').config();

const restify = require('restify');
const restifySwaggerJsdoc = require('restify-swagger-jsdoc');
const swaggerPluginDefinition = require('./plugins/swagger-options');

const routesCreator = require('./v1/routes');
const config = require('./config');

const server = restify.createServer();

server.pre(restify.pre.sanitizePath());
server.use(restify.plugins.bodyParser({ mapParams: false }));
server.use(restify.plugins.queryParser({ mapParams: false }));
server.use(restify.plugins.acceptParser(server.acceptable));

restifySwaggerJsdoc.createSwaggerPage({
  ...swaggerPluginDefinition,
  server,
});

routesCreator(server);

server.listen(config.app.port, () => {
  console.log('%s listening at %s', server.name, server.url);
});
