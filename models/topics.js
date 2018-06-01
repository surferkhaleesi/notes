const Sequelize = require('sequelize');
const createdbconnection = require('../utilities/db_utils.js');
const sequelize = createdbconnection();

const Topics = sequelize.define(
  'topic',
  {
    // id: {
    //   type: Sequelize.INTEGER ,
    //   primaryKey:true
    // },
    name: Sequelize.STRING,
    user_id: Sequelize.INTEGER
  },
  {
    timestamps:false,
    tableName: 'topics'
  }
);

module.exports= Topics;
