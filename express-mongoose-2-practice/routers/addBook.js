const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const mongoose=require("mongoose");
const Book=require("../model/model");

const dbConnect= module.exports = () => mongoose.connect("mongodb://localhost:27017/book");
dbConnect();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extende:true}));

router.post("/",(req,res)=>{
    let newBook=new Book();
    newBook.title=req.body.title;
    newBook.author=req.body.author;
    newBook.category=req.body.category;
    newBook.save((err,book)=>{
        if(err){
            res.send("Sorry,couldn't save the file");
        }
        else{
            res.send(book);
        }
    })
})

module.exports = router;