const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];
function createdbconnection(){
  return new Sequelize(config.database,config.username, config.password, config);
};

module.exports = createdbconnection;
