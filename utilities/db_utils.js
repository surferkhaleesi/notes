const Sequelize = require('sequelize');

function createdbconnection(){
  return new Sequelize(process.env.DATABASE_URL);
};

module.exports = createdbconnection;
