const express = require('express');
const router = express.Router();


router.get('/edit/:id/:title', (req, res) => {
    const id = req.params.id;
    const title = req.params.title;
    res.render('edit',  {id, title});
});

module.exports = router;