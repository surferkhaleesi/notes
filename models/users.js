const Sequelize = require('sequelize');
const createdbconnection = require('../utilities/db_utils.js');
const sequelize = createdbconnection();

const User = sequelize.define(
  'user',
{
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey:true, allowNull:false} ,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  // oauthid: Sequelize.STRING,
  // oauthprovider: Sequelize.STRING
}, {
  timestamps: false,
  tableName:'users'
});
// User.associate = function(models) {
//   // associations can be defined here
// };
//   return User;
// };

module.exports= User;
