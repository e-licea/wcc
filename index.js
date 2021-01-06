const server = require('./api/server');

const  PORT = 2000;


server.listen( PORT, function(){
    console.log('Server is running on PORT : ' + PORT )
})

