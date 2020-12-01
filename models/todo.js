const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    isTodo: {
        type: Boolean,
        required: true,
    },
    title: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    todoList: {
        type: [{
            todo: String,
            checked: Boolean
        }]
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model("Todo", todoSchema)