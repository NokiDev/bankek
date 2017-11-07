const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/transactions', (req,res) => {
  res.send(JSON.stringify({
    title: "Matos",
    amount: 50,
    date: new Date()
  }))
});

module.exports = router;
