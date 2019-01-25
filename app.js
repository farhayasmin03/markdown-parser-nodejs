var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// public folder to store assets
app.use(express.static(__dirname + '/public'));




// listen on port 8000 (for localhost) or the port defined for heroku
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});