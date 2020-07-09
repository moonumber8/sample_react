const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./connect_db');
const dataModel = require('./data_schema');
app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentialls',true);
    next();
});
app.get("/movie", (req, res)=>{
    res.send("Hello");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api/v1/authen", require('./api_list_movie'));

app.listen(3080,()=>{
    console.log("server ok");
})