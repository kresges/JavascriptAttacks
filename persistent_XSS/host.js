require('./db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');


const app = express();
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

;var Comment = mongoose.model('comments')

//source the client facing html
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

//source the client side javascript
app.get('/host_client.js', function(req,res){
	res.sendFile(path.join(__dirname + '/host_client.js'));
});

/**
  * @desc stores user comment into database
  * @param string $firstname : user name
  * @param string $lastname : user name
  * @param string $comment : comment 
  * @return bool - success or failure to client
*/
app.post('/comment', function(req,res){
	console.log(req.body);
	new Comment(
	    {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            comment : req.body.comment
        }).save();
	//need to load this into the database
	res.send("success");
});

/**
 * @desc gets all comments from database
 * @param NONE
 * @return database object - list of comments and associated data.
 */
app.get('/allComments', function (req,res) {
   Comment.find(function(err,comments){
       //console.log(comments);
       res.send(comments);
   });
});

/**
 * @desc gets secret cookie for user.
 * @param None
 * @return session cookie based on timestamp
 */
app.get('/getCookie', function (req,res) {
    res.send(new Date());
});

app.get('/deleteComments', function (req,res) {
    //console.log(typeof(Comment));
    Comment.remove({},function(){});
    res.send("success");
});

app.listen(config.host_port, function() { console.log('Server running at http://localhost:8000')});