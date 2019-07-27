
const express = require('express')
const app = express()
const port = 3000

  app.use(express.static('public'))  
//   app.use('/static', express.static(path.join(__dirname, 'public')))

// application-wise, generic, any routes / methods middleware
    app.use(function(req, res, next) {
        console.log('Request:', req.method, req.url);
        next();
        });
// application-wise, route specific middleware
        // app.get('/', function(req, res) {
        // res.send('Hello World!');
        // });
    


/////////////////////////// Task 4 /////////////////////////////
const fs = require('fs');
try {
const data = fs.readFileSync('./products.json', 'utf8');
 products = JSON.parse(data);
} catch (err) {
console.error(err);
}

  // `npm install hbs`
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

  app.get('/admin/products', (req, res) => {
    res.render('products', {
      products: products.body
    });
    });



  app.listen(port, () => console.log(`Example app listening on port ${port}!`))



/*
app.get('/', function (req, res) {
    res.send('Hello World!');
  })

//   Respond to POST request on the root route (/), the application’s home page:
  
  app.post('/', function (req, res) {
    res.send('Got a POST request')
  })
//   Respond to a PUT request to the /user route:
  
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })
//   Respond to a DELETE request to the /user route:
  
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })
*/



/*
npm i -g eslint
npm install eslint --save-dev
npm install editorconfig
*/

/*
npm install express --save

npm install -g express-generator
express

npm install
*/

/*
npm i hbs
npm install --save handlebars
*/