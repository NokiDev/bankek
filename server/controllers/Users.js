var mongoose = require('mongoose'),
  chalk = require('chalk'),
  jwt = require('jsonwebtoken'),
  User = require('../models/User');
uuidv4 = require('uuid/v4');

let Users = {
  register: function (req, res) {
    let u = new User({
      id: uuidv4(),
      name: req.body.name,
      firstName: req.body.firstname,
      email: req.body.email,
      password: req.body.password
    });
    u.save(
      function (err,u) {
          if(err) throw err;
        res.sendStatus(200);
      }
    );
    console.log(u)
  },

  connect: function (req, res) {
    let form = {
      email: req.body.email,
      password: req.body.password
    };
    User.findOne({
      'email': form.email
    }, function (err, user) {
      if (err) return handleError(err);
      console.log(user)
      
      if (form.password === user.password) {
        const token = jwt.sign(user.id, 'my_secret_key');
        req.session.usertoken = token;
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    });
  },

}

module.exports = Users;
