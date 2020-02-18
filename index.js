const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const edit = require('./routes/edit');

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//set up template engine
app.set('view engine', 'pug')
app.set("views", "./views")

const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/api/todos'));
app.use(edit);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});