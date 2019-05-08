var express = require('express');
var PORT = process.env.PORT || 3000;
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("search");
});

app.get("/result",function(req,res){
    var sr =req.query.search;
    var url ="http://www.omdbapi.com/?apikey=bb1cc3e1&s="+sr;
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            var result = JSON.parse(body)
            res.render("details",{result:result});
        }
    });  
});





// Listening to server at 3000
app.listen(PORT,function(){
    console.log("Server started at 3000 ....");
});
