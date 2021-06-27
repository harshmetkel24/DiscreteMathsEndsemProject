const express = require('express');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

// static path
const static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));

// views path in templates
const views_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');
app.set('views', views_path);
app.set('view engine', 'hbs');

hbs.registerPartials(partials_path);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('This is home page');
});

app.get('/demonstrate', (req, res) => {
    res.render('demonstrate');
});

app.get('/commercialisation', (req, res) => {
    res.render('commercialisation');
});

app.listen(port, () => {
    console.log(`Server lintening on PORT: ${port}...`);
});
