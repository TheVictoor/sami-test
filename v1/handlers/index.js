const uuid = require('uuid').v4;
const factory = require('./factory');
const config = require('../../config');
const modelsWrapper = require('../models');
const database = require('../database');

const dependencies = {
  database,
  config,
  uuid,
};

const models = modelsWrapper(dependencies);

module.exports = factory(models);
