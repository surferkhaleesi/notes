const Sequelize = require('sequelize');
const createdbconnection = require('../utilities/db_utils.js');
const sequelize = createdbconnection();

const User = sequelize.define(
  'user',
  {
    id: {type: Sequelize.INTEGER,primaryKey:true},
    username: Sequelize.STRING
  },
  {
    timestamps:false,
    tableName: 'users'
  }
);

module.exports= User;
