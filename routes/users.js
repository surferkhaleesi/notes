var express = require('express');
const User= require('../models/users.js');
// const client = require('../connection');
var router = express.Router();


router.get('/:id', function(req, res){
  User.findById(req.params.id).then(user => {
     res.send(JSON.parse(JSON.stringify(user)));
  });
});


/* GET users listing. */
router.get('/', function(req, res) {
  User.findAll().then(users => {
    res.send(JSON.parse(JSON.stringify(users)));
  });
});


module.exports = router;
