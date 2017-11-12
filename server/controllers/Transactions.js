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
    console.log(req.body);
    let t = new Transaction({
      title: req.body.title,
      amount: req.body.amount,
      date: Date.now(),
      user_id: jwt.decode(req.session.usertoken)
    });
    t.save(
      function () {
        console.log("dd")
        res.sendStatus(200);
      },
      function(){
        console.log("ici?")
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
  },
  sendCronTransaction: function(req,res){ 
    var fixedReq = req;    
    var fixedEvery;
    switch(req.body.every){
      case "secondes":
        fixedEvery = " * * * * * *";
      case "minutes":
        fixedEvery = " * * * * *";
      case "heures":
        fixedEvery = " * * * *";
      case "jours":
        fixedEvery = " * * *";
      case "mois":
        fixedEvery = " * *";
      case "années":
        fixedEvery = " *";
      default:
        fixedEvery = " * *";
    }
    var options = {
      url: 'http://localhost:3000/transactions/addTransaction',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      form: req.body,
      session: req.session
    };
    cron.schedule("*/1 * * * * * *",() => request(options))
  }
}

module.exports = Transactions;
