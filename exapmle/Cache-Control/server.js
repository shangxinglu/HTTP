'use strict';

const express = require('express');

const app = express();


app.use('/',express.static('./'));


app.listen('8080',function(){
    console.log('server is running...');
})

app.get('/test',(req,res)=>{
    console.log('get /test');
    res.json({msg:'hello'});
})

