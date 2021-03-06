const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const session       = require('express-session');
const fs            = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function () {
    console.log('Express server has started on port 300');
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret : '@#@$MYSIGN#@$#$',
    resave : false,
    saveUninitialized: true
}));

var router = require('./routes/main') (app, fs);

