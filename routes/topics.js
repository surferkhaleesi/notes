var express = require('express');
const Topics= require('../models/topics.js');
// const client = require('../connection');
var router = express.Router();


// router.get('/', function(req, res){
//   Topics.findBy(req.params.user_id).then(topics => {
//      res.send(topics);
//   });
// });


/* GET users listing. */
router.get('/:user_id', function(req, res) {
  Topics.findAll({where: {user_id:req.params.user_id}}).then(topics => {
    res.send(topics);
  });
});



module.exports = router;
