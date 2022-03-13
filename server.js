/**
 * @author: Jayesh Agrawal
 * @date: 2th Dec 2017 
 * @desc: Creating server using express.js
 * 
 * http://localhost:8000/api/users
 * http://localhost:8000/api/transactions/1
*/
var express = require('express');
var bodyparser = require('body-parser');

var routes = require('./routes/route');
//var vhost = require('vhost');

// creating server instance
var app = express();

// for posting nested object if we have set extended true
app.use(bodyparser.urlencoded({ extended : true}));

// parsing JSON
app.use(bodyparser.json());

//set application route with server instance
routes.configure(app);

// listening application on port 8000
//express()
//.use(vhost('m.mysite.com', require('/users').app))
//.listen(8000);

var server = app.listen(8000, function(){
    console.log('Server Listening on port ' + server.address().port);
});
