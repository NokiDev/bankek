var mongoose = require('mongoose'),
  chalk = require('chalk'),
  jwt = require('jsonwebtoken'),
  Transaction = require('../models/Transaction');
User = require('../models/User');
Users = require('../controllers/Users');

let Transactions = {
  sendTransaction: function (req, res) {
    let t = new Transaction({
      title: req.body.title,
      amount: req.body.amount,
      date: Date.now(),
      user_id: jwt.decode(req.session.usertoken)
    });
    t.save(
      function () {
        res.sendStatus(200);
      }
    );

  },
  getTransactions: function (req, res) {
    Transaction.find({user_id: jwt.decode(req.session.usertoken)}, (err, transactions) => {
      if (err) {
        throw err;
        res.sendStatus(404);
      } else {
        res.status(200).json({
          transactions: transactions
        });
      }
    });
  }
}

module.exports = Transactions;
