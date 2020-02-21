const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    id: String,
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema);