const express = require('express');

const app = express();
app.get('/',(req, res)=>{
    res.send("Hello world");
}).listen(3000, ()=>{
    console.log('app is running at port 3000');
});