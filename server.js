const express = require('express');
const path = require('path');

const db = require('./models');
const app = express();

var PORT = process.env.PORT || 3300;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

// Routes
// -----------------

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);


db.sequelize.sync().then(function(){

  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });
});