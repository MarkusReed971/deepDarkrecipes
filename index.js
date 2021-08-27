const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const hint = '<h3>Go to:</h3><ul><li><a href="http://localhost:3001/users">/users</a> - to work with user routes</li><li><a href="http://localhost:3001/recipes">/recipes</a> - to work with recipe routes</li></ul>'
const usersRouter = require('./routes/users')
const recipesRouter = require('./routes/recipes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', usersRouter)
app.use('/recipes', recipesRouter)

app.get('/', (req, res) => {
    res.send(hint)
})


mongoose.connect(
    'mongodb+srv://admin:1234ewq@cluster0.lqycm.mongodb.net/recipedb' +
    '?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'db connection error:'))
db.once('open', () => console.log('db connection success!'))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})