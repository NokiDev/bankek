var mongoose = require('mongoose'),
chalk = require('chalk'),
jwt = require('jsonwebtoken'),
User = require('../models/User');
uuidv4 = require('uuid/v4');

let Users  = {
    register : function(req, res){
        let u = new User({
            id: uuidv4(),
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
                const token = jwt.sign(user.id, 'my_secret_key');
                req.session.usertoken = token;
                console.log(token);
                res.sendStatus(200);
            }
            else{
                res.sendStatus(404);
            }
        });
    },

    getCurrentUser : function(req, res)
    {
        let user;
        User.findOne({id: jwt.decode(req.session.usertoken)}, (err, user) =>{
            if(err){throw err}
            else{
                user = user;
            }
        });
        return user;
    }
}

module.exports = Users;