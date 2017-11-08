var mongoose = require('mongoose'), // Nous appelons le module mongoose
Schema = mongoose.Schema; // Nous créons un schéma mongoose


var schema = new Schema({
    title: {type: String, required: true},
    amount: {type: Number, required: true},
    date : {type: Date, required: true}
});

// Nous exportons notre modèle avec comme nom "User", 'users' sera le nom de notre "table"
module.exports = mongoose.model('Transaction', schema, 'transactions'); 