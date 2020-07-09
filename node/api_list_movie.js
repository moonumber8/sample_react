const express = require('express');
const router = express.Router();
require('./connect_db');
const dataModel = require('./data_schema');

router.get("/", (req, res)=>{
    dataModel.find({type:'movie'},(err, doc)=>{
        if (err) res.json({result: "failed"});
        res.json({ data: doc });
    }).limit(10);
});

module.exports = router;