"use strict";

const {Sequelize, DataTypes} = require('sequelize');

const carShema = require('./car.model');
const gameSchema = require('./game.model');

const Collection = require('./collection-class');

require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV = 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV = 'production' ? {
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        }
      }
} : {};

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const carModel = carShema(sequelize, DataTypes);
const gameModel = gameSchema(sequelize, DataTypes);

const carCollection = new Collection(carModel);
const gameCollection = new Collection(gameModel);

module.exports = {
    db: sequelize,
    carCollection: carCollection,
    gameCollection: gameCollection
};
