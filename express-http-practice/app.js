const express = require('express');

const app = express();
app.get('/', (req, res)=>{
    res.send('Homepage')
})
app.get('/getBooks',(req, res)=>{
    if(req.method == 'GET'){
        res.send('This is getBooks endpoint');
    }
})
app.post('/addBook',(req, res)=>{
    if(req.method == 'POST'){
        res.send('This is addBook endpoint');
    }
})
app.put('/updateBook',(req, res)=>{
    if(req.method == 'PUT'){
        res.send('This is updateBook endpoint');
    }
})
app.delete('/deleteBook',(req, res)=>{
    if(req.method == 'DELETE'){
        res.send('This is deleteBook endpoint');
    }
})
app.listen(3000);