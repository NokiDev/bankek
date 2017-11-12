const express = require('express');
const router = express.Router();
let Transactions = require('../controllers/Transactions');

router.post('/addCronTransaction', Transactions.sendCronTransaction);

router.post('/addTransaction', Transactions.sendTransaction);

router.get('/getTransactions', Transactions.getTransactions);

module.exports = router;