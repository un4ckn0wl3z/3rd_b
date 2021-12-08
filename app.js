// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const path = require('path');
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', function(req,res){
//     res.sendFile(path.join(__dirname+'/template.html'));
//   });

// app.listen(3000, () => {
//     console.log('app listen on port 3000')
// })
const path = require('path');
const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 9000;
var key = fs.readFileSync(__dirname + '/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};
app = express()
app.get('/cookies', function(req,res){
  res.sendFile(path.join(__dirname+'/cookies.html'));
});
app.use('/', function(req,res){
  var fullUrl = req.get('host');
  console.log(fullUrl)
    res.sendFile(path.join(__dirname+'/template.html'));
  });


// var server = https.createServer(options, app);
app.listen(port, () => {
  console.log("server starting on port : " + port)
});