// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');

const db = require('./models');
const app = express();

// Defines a PORT for the server to listen for requests
var PORT = process.env.PORT || 3300;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

// Routes
// -----------------

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);


// Syncs our database first
db.sequelize.sync().then(function(){

  // Starts our server on the predefined PORT
  // Only starts if the db successfully syncs
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });
});