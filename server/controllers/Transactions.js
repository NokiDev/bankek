var mongoose = require('mongoose'),
chalk = require('chalk'),
jwt = require('jsonwebtoken'),
Transaction = require('../models/Transaction');
User = require('../models/User');
Users = require('../controllers/Users');
var cron = require('node-cron');
var request = require('request');

let Transactions = {
sendTransaction: function (req, res) {
  createTransaction(req.body.title, req.body.amount,jwt.decode(req.session.usertoken), (err, transaction) => {
    res.sendStatus(200);
  })
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
},
sendCronTransaction: function(req,res){
  var fixedReq = req;
  var fixedEvery;
  switch(req.body.every){
    case "secondes":
      fixedEvery = " * * * * * *";
      break;
    case "minutes":
      fixedEvery = " * * * * *";
      break;
    case "heures":
      fixedEvery = " * * * *";
      break;
    case "jours":
      fixedEvery = " * * *";
      break;
    case "mois":
      fixedEvery = " * *";
      break;
    case "années":
      fixedEvery = " *";
      break;      
    default:
      fixedEvery = " * *";
  }

  cron.schedule("*/1 * * * * * *", function() {
      createTransaction(req.body.title, req.body.amount, jwt.decode(req.session.usertoken, ()=> {}));
  }, true);
}
};

function createTransaction(title, amount, user_id, onSave) {
let t = new Transaction({
  title: title,
  amount: amount,
  date: Date.now(),
  user_id: user_id
});
t.save(onSave);
}

module.exports = Transactions;