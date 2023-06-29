const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();


const database = module.exports = () =>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        mongoose.connect(
            'mongodb+srv://prashant:n2894NyvuauvUxJC@cluster0.1awu9.mongodb.net/?retryWrites=true&w=majority',
            connectionParams
        );
        console.log('Connection Successful!');
    }catch(err){
        console.log(err);
        console.log('Connection unsuccessful!');
    }
}

database();

app.listen(3000, ()=>{
    console.log('server is running at port 3000');
})

// n2894NyvuauvUxJC