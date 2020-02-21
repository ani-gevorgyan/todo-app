const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const edit = require('./routes/edit');

mongoose.connect('mongodb://localhost:27017/mongoose_express_todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected.');
})

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//set up template engine
app.set('view engine', 'pug')
app.set("views", "./views")

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/api/todos'));
app.use(edit);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});