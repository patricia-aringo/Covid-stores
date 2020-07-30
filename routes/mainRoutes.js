const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','/login.html'))
})

router.get('/agentReg',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','/agentRegistration.html'))
})

router.get('/record',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','/record.html'))
})

router.get('/list',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','/list.html'))
})

router.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','/products.html'))
})





module.exports = router