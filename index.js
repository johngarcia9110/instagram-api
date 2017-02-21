'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const InstagramApi = require('instagram-api');

const app = express();

app.set('port', (process.env.PORT || 5000));

//Instagram 
const accessToken = '401398334.a080e88.8c4182972a234488bb9250fe5f16434b';
let ig = new InstagramApi(accessToken);

ig.userSelf().then(function(result) {
    console.log(result.data); // user info 
    console.log(result.limit); // api limit 
    console.log(result.remaining) // api request remaining 
}, function(err){
    console.log(err); // error info 
});

//Server
app.listen(app.get('port'), function(){
  console.log('Running on: port.');
});