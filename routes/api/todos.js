const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const todos = require('../../TODOs');


router.get('/', (req, res) => {
    res.render('todo', {
        todos
    });
});

router.post('/', (req, res) => {
    const newTODO = {
        id: uuid.v4(),
        title: req.body.title
    }

    if (!newTODO.title) {
        return res.status(400).json({
            message: 'Please write a todo'
        })
    }

    todos.push(newTODO);
    // res.json(todos);
    res.redirect('/');
});

router.delete('/:id', (req, res) => {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id == req.params.id) {
            console.log(`Deleting todo with id ${req.params.id}`);
            todos.splice(i, 1);
        }       
    }
    
    res.render('todo', {todos});
});

module.exports = router;