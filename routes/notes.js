var express = require('express');
const Notes= require('../models/notes.js');
// const client = require('../connection');
var router = express.Router();

// router.get('/', function(req, res){
//   Topics.findBy(req.params.user_id).then(topics => {
//      res.send(topics);
//   });
// });

/* GET users listing. */
router.get('/:topic_id', function(req, res) {
  Topics.findAll({where: {user_id:req.params.user_id}}).then(topics => {
    res.send(JSON.parse(JSON.stringify(topics)));
  });
});

// /* Post to topics f */
router.post('/:user_id', function(req, res) {
  console.log("req.params.user_id:", req.params.user_id)
  console.log("req.body:", req.body)
  Topics.create({
      user_id: req.params.user_id, name: req.body.name
    })
    .then(newtopic => {
      res.send(JSON.parse(JSON.stringify(newtopic)));
  });
});

module.exports = router;
