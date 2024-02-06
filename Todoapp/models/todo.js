// require mongoose and everyting needed
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: false
    }
}, { timestamps: true })

const Todo = mongoose.model("todo", todoSchema)

module.exports = Todo;