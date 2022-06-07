'use strict';
require('dotenv').config();
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');


const food = require('./food');
const clothes = require('./clothes');
const Collection =require('./collection-class');

let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        }
        : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const foodTable=food(sequelize, DataTypes);
const clothesTable=clothes(sequelize, DataTypes);

const foodCollection=new Collection (foodTable);
const clothesCollection= new Collection(clothesTable);


module.exports = {
  db: sequelize,
  Food: foodCollection,
  Clothe: clothesCollection,
};