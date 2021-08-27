const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe')


router.get('/', async (req, res) => {
    const recipeList = await Recipe.find()
    res.json(recipeList);
});

router.get('/search', (req, res) => {
    let recipe = req.body.payload
    recipe.title = {
        "$regex": recipe.title,
        "$options": "i"
    }
    const compositionName = recipe.composition.map(el => el.name)
    delete recipe.composition
    recipe["composition.name"] = {
        "$all": compositionName
    }

    Recipe.find(recipe)
        .then(recipes => res.json(recipes))
        .catch(e => {
            res.status(500).send('Ошибка на сервере')
        })
})

router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => {
            recipe !== null ?
                res.json(recipe) :
                res.status(404).send('Рецепт не найден')
        })
        .catch(error => {
            error.name === 'CastError' ?
                res.status(400).send('Некорректный запрос') :
                res.status(500).send('Ошибка на сервере')
        })
})

router.post('/', (req, res) => {
    const recipe = new Recipe(req.body.payload)
    recipe.save()
        .then(recipe => res.json(recipe))
        .catch(e => {
            e.code === 11000 ?
                res.status(400).send('Такой рецепт уже существует') :
                res.status(500).send('Ошибка на сервере')
        })
})

router.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(
        req.params.id,
        req.body.payload
    ).then(recipe => {
        recipe !== null ?
            res.json(recipe) :
            res.status(404).send('Рецепт не найден')
    }).catch(e => {
        e.name === 'CastError' ?
            res.status(400).send('Некорректный запрос') :
            res.status(500).send('Ошибка на сервере')
    })
})

router.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(recipe => {
            recipe !== null ?
                res.json(recipe) :
                res.status(404).send('Рецепт не найден')
        }).catch(e => {
        e.name === 'CastError' ?
            res.status(400).send('Некорректный запрос') :
            res.status(500).send('Ошибка на сервере')
    })
})


module.exports = router;
