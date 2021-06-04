const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const dbSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
}, { timestamps: true});
const Todo = mongoose.model('Todo', dbSchema);
module.exports = Todo;
