const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const engine = handlebars.engine;
app.engine('.hbs', engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

db.connect();
app.use(express.static(path.join(__dirname, 'public')));
route(app);

app.listen(port, () => {
    console.log(`App listening on 127.0.0.1 port ${port}`);
})