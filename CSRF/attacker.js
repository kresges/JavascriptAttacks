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

//source the client facing html
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/attack.html'));
});

//source the client side javascript
app.get('/attack_client.js', function(req,res){
    res.sendFile(path.join(__dirname + '/attack_client.js'));
});

app.listen(config.attacker_port, function() { console.log('Server running at http://localhost:8001')});