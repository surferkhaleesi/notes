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
    res.send(JSON.parse(JSON.stringify(topics)));
  });
});

/* Post to topics f */
router.post('/:user_id', function(req, res) {
  Topics.update({
    name: ______
  },{
    where: {user_id:req.params.user_id},
    returning= true,
    plain=true
    /*
returning: true option to tell Sequelize to return the object & plain: true is just to return the object itself and not the other messy meta data that might not be useful.*/
  })
    .then(function(result) => {
      console.log(result);
  });
});


module.exports = router;
