const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const articleRoutes = require('./routes/articles');
const productRoutes = require('./routes/products');

const app = express();

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use('/articles', articleRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

module.exports = app;
