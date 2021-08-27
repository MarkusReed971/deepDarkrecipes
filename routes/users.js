const express = require('express');
const router = express.Router();
const User = require('../models/user')


router.get('/', async (req, res) => {
    const userList = await User.find()
    res.json(userList);
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user !== null ?
                res.json(user) :
                res.status(404).send('Пользователь не найден')
        })
        .catch(e => {
            e.name === 'CastError' ?
                res.status(400).send('Некорректный запрос') :
                res.status(500).send('Ошибка на сервере')
        })
})

router.post('/', (req, res) => {
    const user = new User(req.body.payload)
    user.save()
        .then(user => res.json(user))
        .catch(e => {
            e.code === 11000 ?
                res.status(400).send('Такой пользователь уже существует') :
                res.status(500).send('Ошибка на сервере')
        })
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body.payload
    ).then(user => {
        user !== null ?
            res.json(user) :
            res.status(404).send('Пользователь не найден')
    }).catch(e => {
         e.name === 'CastError' ?
             res.status(400).send('Некорректный запрос') :
             res.status(500).send('Ошибка на сервере')
     })
})

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            user !== null ?
                res.json(user) :
                res.status(404).send('Пользователь не найден')
        }).catch(e => {
            e.name === 'CastError' ?
                res.status(400).send('Некорректный запрос') :
                res.status(500).send('Ошибка на сервере')
        })
})

router.post('/auth', (req, res) => {
    const {username, password} = req.body.payload
    const filter = {
        username,
        password
    }

    User.findOne(filter)
        .then(user => {
            user !== null ?
                res.json(user) :
                res.status(404).send('Пользователь не найден')
        }).catch(e => {
            res.status(500).send('Ошибка на сервере')
        })
})

module.exports = router;