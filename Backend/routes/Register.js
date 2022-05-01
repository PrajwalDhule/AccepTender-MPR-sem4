const express = require('express');
const router = new express.Router();
const Register = require("../models/register");

router.get('/getregister', async(req , res) => {
    try{
        const getregister = await Register.find({});
        const registered = res.json(getregister);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;



