var mongoose = require('mongoose'), // Nous appelons le module mongoose
Schema = mongoose.Schema; // Nous créons un schéma mongoose


var schema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    firstName: {type: String, required: true},
    email: {type: String, required: true},
    password : {type: String, required: true}
});

// Nous exportons notre modèle avec comme nom "User", 'users' sera le nom de notre "table"
module.exports = mongoose.model('User', schema, 'users'); 