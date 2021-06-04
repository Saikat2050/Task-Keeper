const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const structr = new Schema({
    email : { type: String, required : true},
    password : { type: String, required : true},
});
const Data = mongoose.model('Data', structr);
module.exports = Data;