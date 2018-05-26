var express = require('express');

// const client = require('../connection');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
   res.json([
   		{id: 1, username: "somebody"},
		{id: 2, username: "somebody_else"},

   	]);
});

// client.connect((err)=> {
// 	if(!err){
// 		  client.query('INSERT INTO topics (name) VALUES (\'books2\')', (err, res)=>{
// 		  	if(err){
// 		  		console.log(err);
// 		  	}else{
// 		  		console.log(res);
// 		  	}
// 		  });

// 	}
// });

module.exports = router;
