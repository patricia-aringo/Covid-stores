const express = require('express')
const nodemon = require('nodemon')
const path = require('path')
const pug = require('pug')
const app = express()



app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views', 'login.html'))
})
app.post('/about',(req,res)=>{
    res.send('req.body')
})

app.get('*',()=>{
    res.send('error page')
})

app.listen(3000,(req,res)=>{
    console.log('listening on port 3000');
})