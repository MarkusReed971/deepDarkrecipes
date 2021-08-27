const {Schema, ObjectId, model} = require('mongoose')

const recipeSchema = new Schema({
    title: {type: String, required: true},
    previewImage: {type: String, required: true},
    pubDate: {type: Date, required: true},
    author: {type: ObjectId, required: true},
    description: String,
    category: ObjectId,
    composition: [
        {
            name: String,
            amount: String,
        }
    ],
    steps: [
        {
            number: Number,
            image: String,
            description: String,
        }
    ]
})

module.exports = model('Recipe', recipeSchema)