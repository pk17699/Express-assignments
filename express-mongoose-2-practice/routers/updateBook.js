const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const mongoose=require("mongoose");
const Book=require("../model/model");

const dbConnect= module.exports = () => mongoose.connect("mongodb://localhost:27017/book");
dbConnect();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extende:true}));

router.put("/:id",(req,res)=>{
    new_title=req.body.title;
    new_author=req.body.author;
    new_category=req.body.category;
    Book.updateOne({_id:req.params.id}, {$set:{title:new_title, author:new_author, category:new_category}}, {multi:true,new:true})
    .then(data => res.send(data))
    .catch(err => res.send(err))
})

module.exports = router;