const server = require('./server');

const  PORT = 2001;


server.listen( PORT, function(){
    console.log('Server is running on PORT : ' + PORT )
})

