const express = require('express');
const router = express.Router();

router.get('/:bookId',(req,res)=>{
    res.send(`get book with id ${req.params.bookId}`);
})

module.exports = router;