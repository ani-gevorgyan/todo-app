const express = require('express');
const router = express.Router();
const todos = require('../TODOs');

router.get('/edit/:id', (req, res) => {
    
    let todo = todos.filter( (item) => {
        // console.log('----------' + item.id, item.title);
        return item.id == req.params.id;
    });

    let id = todo[0].id;
    let title = todo[0].title;
    const task = {id, title};
    // res.json({todo: task});
    res.render('edit', {todo: task});
});

router.put('/edit/:id', (req, res) => {
    const updateTodo = req.body;
    console.log(req.body);

    todos.forEach( (todo) => {
        if(parseInt(todo.id) === parseInt(req.params.id)) {
            todo.title = updateTodo.title ? updateTodo.title : todo.title;
            console.log(req.params.id);
            res.redirect('/');
        } 
    });
});

module.exports = router;