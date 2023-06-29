const express = require('express');
const app = express();
const getRouter = require('./routers/getBook')
const putRouter = require('./routers/updateBook')
const deleteRouter = require('./routers/deleteBook')
const postRouter = require('./routers/addBook')

app.use('/getBook', getRouter);
app.use('/addBook', postRouter);
app.use('/updateBook', putRouter);
app.use('/deleteBook', deleteRouter);
app.listen(3000,()=>{
    console.log('app is running at port 3000');
})