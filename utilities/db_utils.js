const Sequelize = require('sequelize');



function createdbconnection(){ 
  return new Sequelize('notes', 'jason','blah',{
    host: 'localhost',
    dialect: 'postgres' 
  });
};

module.exports= createdbconnection;

