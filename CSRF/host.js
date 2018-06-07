const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config');


const app = express();
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

var comments = [1,2,3];

//source the client facing html
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

//source the client side javascript
app.get('/host_client.js', function(req,res){
	res.sendFile(path.join(__dirname + '/host_client.js'));
});

app.get('/delete', function (req,res) {
    //console.log(req.query.value);
    //console.log(comments.indexOf(1));
    //console.log(comments);
    comments.splice(comments.indexOf(parseInt(req.query.value)),1);
    //console.log(comments);
    res.send(comments);
});

app.get('/refresh', function (req,res) {
   res.send(comments);
});


app.listen(config.host_port, function() { console.log('Server running at http://localhost:8000')});