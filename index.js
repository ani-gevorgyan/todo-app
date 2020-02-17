const express = require('express');
const todoController = require('./routes/api/todos');
const bodyParser = require('body-parser');

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set up template engine
app.set('view engine', 'pug')
app.set("views", "./views")

const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/api/todos'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});