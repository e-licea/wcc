const express = require('express');
const server = express();

server.get('/', function(req, res){
    

    res.send(console.log('It works you filthy animal.'))
})


module.exports = server
