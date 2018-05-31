const Sequelize = require('sequelize');

function createdbconnection(){
  return new Sequelize('notes', 'tsl_3','password',{
    host: 'localhost',
    dialect: 'postgres'
  });
};

module.exports = createdbconnection;
