const express = require('express')
const nodemon = require('nodemon')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const pug = require('pug')
const app = express()
const mainRoutes = require('./routes/mainRoutes')


// Database connection
mongoose.connect('mongodb://localhost:27017/CovidStore',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false},function(err){
    if (err) throw err;
    else
    console.log('Database Connected');  
})


//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
//
app.use(express.static('public'))
//calling main routes.
app.use('/', mainRoutes)
//
app.get('*',()=>{
    res.send('error page')
})
//
app.listen(3000,(req,res)=>{
    console.log('listening on port 3000');
})