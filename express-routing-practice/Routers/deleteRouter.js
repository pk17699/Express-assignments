const express = require('express');
const router = express.Router();

router.delete('/:bookId',(req,res)=>{
    res.send(`deleted book with id ${req.params.bookId}`);
})

module.exports = router;