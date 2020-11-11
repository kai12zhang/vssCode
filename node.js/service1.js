var express = require('express');

var obj = { 
    "name": "LiLi",
    "age": 22, 
    "sex": "男" 
};

var app = express();
app.get("/",function(req,res){
    res.send(obj)
})

app.get("/test",function(req,res){
    console.log('test0001')
    res.send(obj)
})


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post("/news",function(req,res){
    req.on("data",function(data){
        console.log('111:' + data);
        console.log(data.name);
        console.log(data.age);
        console.log(data.sex);
    })
    res.json({"msg":'post发送成功'});
})
app.listen(91)