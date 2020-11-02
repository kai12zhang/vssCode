var http = require('http');
var server = http.createServer();

server.on('request',function(request,respose){
    respose.write('helloWord!!!')
    respose.write('start......')
    respose.end();
})

server.listen(3000,function(){
    console.log('服务器启动成功！！！');
})