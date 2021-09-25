const express = require('express');
const server = express();

//middlewares
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

 

//routers
const whoIsRouter = require('./routers/whoIsRouter');

//export
module.exports = server

//server.use() middlewares
server.use(cors(), helmet(), morgan('combined'), express.json());

server.use('/whois', whoIsRouter );


//root endpoint
server.get('/', function(req, res){
    

    res.status(200).json({message: 'api is up!'})
})




