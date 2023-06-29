const express=require('express');
const router = express.Router();
const mongoose=require('mongoose');
const Book=require("../model/model")

const dbConnect= module.exports = () => mongoose.connect("mongodb://localhost:27017/book");
dbConnect();

router.delete('/:id', (req, res) => {
    Book.findOneAndRemove({_id: req.params.id})
     .then((docs)=>{
        res.send("deletion successfull");
    }).catch((err)=>{
       res.send(err);
    })
})

module.exports = router;