const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

/* GET api listing. */
router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.get('/transactions', (req, res) => {
  console.log(req.session);
  jwt.verify(req.session.usertoken, 'my_secret_key', function(err, data){
    if(err){
      res.sendStatus(403);
    }else{
      res.sendStatus(200);
    }
  });
});


module.exports = router;
