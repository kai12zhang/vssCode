var fs = require('fs');
fs.writeFile('../doc/test02.txt','hello......',function(error,data){
    console.log(error)
})