const mongoose = require('mongoose');
const config = require('./config');

var Comment = new mongoose.Schema({
    firstname: String,
    lastname: String,
    comment: String
});

mongoose.model('comments', Comment);

mongoose.connect(config.database);

