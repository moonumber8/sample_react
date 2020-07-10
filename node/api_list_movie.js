const express = require('express');
const router = express.Router();
require('./connect_db');
const dataModel = require('./data_schema');

router.get("/", (req, res)=>{
    dataModel.find({"poster":{$ne:null}},(err, doc)=>{
        if (err) res.json({result: "failed"});
        res.json({ data: doc });
    }).limit(1000);
});

router.get("/topmovie", (req, res)=>{
    dataModel.find({"poster":{$ne:null}},(err, doc)=>{
        if (err) res.json({result: "failed"});
        res.json({ data: doc });
    }).limit(1);
});

module.exports = router;