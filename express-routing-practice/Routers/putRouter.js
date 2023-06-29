const express = require('express');
const router = express.Router();

router.put('/:bookId',(req,res)=>{
    res.send(`updated book with id ${req.params.bookId}`);
})

module.exports = router;