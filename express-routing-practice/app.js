const express = require('express');
const app = express();
const getRouter = require('./Routers/getRouter')
const postRouter = require('./Routers/postRouter')
const putRouter = require('./Routers/putRouter')
const deleteRouter = require('./Routers/deleteRouter')

app.use('/getBook', getRouter);
app.use('/addBook', postRouter);
app.use('/updateBook', putRouter);
app.use('/deleteBook', deleteRouter);
app.listen(3000,()=>{
    console.log('app is running at port 3000');
})