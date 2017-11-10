const express = require('express');
const router = express.Router();
let Users = require('../controllers/Users');

router.post('/register', Users.register);

router.post('/connect', Users.connect);


module.exports = router;
