
const express = require('express')
const app = express()
const fs = require('fs');

const port = 3000 || nodejs-heroku256.herokuapp.com
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));

  app.use(express.static('public'))  
//   app.use('/static', express.static(path.join(__dirname, 'public')))

// application-wise, generic, any routes / methods middleware
    app.use(function(req, res, next) {
        console.log('Request:', req.method, req.url);
        next();
        });

/////////////////////////// Task 4 /////////////////////////////

  app.set('view engine', 'hbs');
  // optionally set the views folder, default
  app.set('views', './views');

  // render a view, with the view template ‘./views/index.hbs’
  app.get('/', (req, res) => {
  res.render('index', {
  title: 'Assignmet 3 - week 3',
  message: 'Task 4-5-6',
  });
  });

//
  try {
  const data = fs.readFileSync('./data/users.json', 'utf8');
  users = JSON.parse(data);
  } catch (err) {
  console.error(err);
  }
  try {
    const data = fs.readFileSync('./data/products.json', 'utf8');
    products = JSON.parse(data);
    } catch (err) {
    console.error(err);
    }
  try {
  const data = fs.readFileSync('./data/categories.json', 'utf8');
  categories = JSON.parse(data);
  } catch (err) {
  console.error(err);
  }

  app.get('/admin/users', (req, res) => {
    res.render('users', {
      title: 'Users list',
      message: 'Users list',
      users: users.body
    });
    });
  app.get('/admin/products', (req, res) => {
    res.render('products', {
      title: 'Products list',
      message: 'Products list',
      products: products.body
    });
    });

    app.get('/admin/products/:id', (req, res) => {
      res.render('products', {
        title: 'Products list',
        message: 'Products list',
        products: [products.body[req.params.id]]
      });
      });
    


  app.get('/admin/categories', (req, res) => {
    res.render('categories', {
      title: 'Categories list',
      message: 'Categories list',
      categories: categories.body
    });
    });

//