const express = require('express');
const router = new express.Router();

//export
module.exports = router

router.get('/', (req, res)=>{

    

    res.status(200).json({message: 'Hello from the whois router.'})
})