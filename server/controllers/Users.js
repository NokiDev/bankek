var mongoose = require('mongoose'),
chalk = require('chalk'),
jwt = require('jsonwebtoken'),
User = require('../models/User');

let Users  = {
    register : function(req, res){
        let u = new User({
            name: req.body.name,
            firstName: req.body.firstname,
            email: req.body.email,
            password: req.body.password
        });
        u.save(
            function(){
                res.sendStatus(200);
            }
        );
    },

    connect : function(req, res){
        let form ={
            email: req.body.email,
            password: req.body.password
        };
        User.findOne({ 'email': form.email }, function (err, user) {
            if (err) return handleError(err);
            if(form.password === user.password){
                const token = jwt.sign({user}, 'my_secret_key');
                req.session.usertoken = token;
                res.sendStatus(200);
            }
            else{
                res.sendStatus(404);
            }
          })
    }
}

module.exports = Users;