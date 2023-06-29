const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    res.send('book added successfully!');
})

module.exports = router;