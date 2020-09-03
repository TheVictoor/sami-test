const { MongoClient } = require('mongodb');
const config = require('../../config');
const connection = require('./connection');

module.exports = connection({ MongoClient, config });
