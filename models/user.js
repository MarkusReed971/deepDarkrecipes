const {Schema, ObjectId, model} = require('mongoose')

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    favorites: [ObjectId]
})

module.exports = model('User', userSchema)