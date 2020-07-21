const express = require('express')
const nodemon = require('nodemon')
const path = require('path')
const bodyParser = require('body-parser')
const pug = require('pug')
const app = express()
const mainRoutes = require('./routes/mainRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(express.static('public'))

app.use('/', mainRoutes)

app.get('*',()=>{
    res.send('error page')
})

app.listen(3000,(req,res)=>{
    console.log('listening on port 3000');
})