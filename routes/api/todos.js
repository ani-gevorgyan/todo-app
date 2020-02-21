const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const Todo = require('../../models/Todos');


router.get('/', (req, res) => {
    Todo.find({}).then((todos) => {
        res.render('todo', {
            todos
        });
    });
});

router.post('/', (req, res) => {
    const newTODO = new Todo({
        id: uuid.v4(),
        title: req.body.title
    });

    newTODO.save()
        .then((result) => {
            console.log(result);
            res.redirect('/');
        }).catch((err) => {
            console.log(err);
            res.redirect('/');
        })
});

router.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id)
    Todo.find({
            id: id
        })
        .then((item) => {
            Todo
                .deleteOne()
                .then(item => console.log('Removed item succesfully', item))
                .catch(err => console.log(err))
            console.log(item);
        })
        .catch(err => console.log(err));


    res.redirect('/')
});

module.exports = router;