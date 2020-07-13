var http = require('http');
//create web server and create simple web app.

var server = http.createServer(function(req,res){
    res.end('<h1>Hello,I am node Web app</h1>');
});


//start server
server.listen(3001,function(){
    console.log('Web App is listening')
});