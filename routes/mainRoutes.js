const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','/login.html'))
})

router.get('/agentReg',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','/agentRegistration.html'))
})










module.exports = router