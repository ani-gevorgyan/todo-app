const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos');

router.get('/edit/:id', (req, res) => {
    Todo.find({
            _id: req.params.id
        })
        .then((todo) => {
            console.log(todo);
            res.render('edit', {id: todo[0]._id, title: todo[0].title});
        });
});


router.put('/edit/:id', (req, res) => {
    Todo.updateOne({
            _id: req.params.id
        }, {
            title: req.body.title
        })
        .then(() => {
            res.redirect('/');
        });
});


module.exports = router;