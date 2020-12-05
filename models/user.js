const mongoose = require('mongoose')
const ImageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String,
    }
})

const userSchema = new mongoose.Schema({
    userid: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: {
            hash: String,
            salt: String
        },
        required: true
    },
})
userSchema.set('toObject', {virtuals: true})

module.exports = mongoose.model("User", userSchema)