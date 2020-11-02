var fs = require('fs');
fs.readFile('../doc/test01.txt',function(error,data){
    if(error){
        console.log('error');
        return;
    }else{
        console.log(data.toString());
    }
    
})
