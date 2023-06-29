const express=require("express");
const router = express.Router();
const mongoose=require("mongoose");
const Book=require("../model/model")

const dbConnect= module.exports = () => mongoose.connect("mongodb://localhost:27017/book");
dbConnect();
router.get("/",(req,res)=>{
    Book.find({})
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.send(err);
    })
})

router.get("/:id",(req,res)=>{
    Book.findById(req.params.id)
    .then((doc)=>{
        res.send(doc);
    }).catch((err)=>{
        res.send(err);
    });
})

module.exports = router;