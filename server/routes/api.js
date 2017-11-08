const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  console.log('jey');
});

router.get('/transactions', ensureToken, (req,res) => {
  // jwt.verify(req.token, 'my_secret_key', function(err, data){
  //   if(err){
  //     res.sendStatus(403);
  //   }else{
  //     res.sendStatus(200);
  //   }
  // });
  console.log('on transactions')
});

function ensureToken(req, res, next){
  const bearerHeader = req.headers["authorization"];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }
  else{
    res.sendStatus(403);
  }
}

module.exports = router;
