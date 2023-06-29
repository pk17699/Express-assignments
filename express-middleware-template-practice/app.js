const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const { body, validationResult, check } = require('express-validator');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine','pug');
app.set('views','./views');
app.get("/",(req,res)=>{
    res.render('form');
})

app.post("/",[
    check('Email').isEmail(),
    check('password').isLength({min:6})
],(req,res)=>{
   const errors=validationResult(req)
   if(!errors.isEmpty()){
    res.send(`<h1>Validation not successful!!! Try again</h1>`)
}
else{
    res.send(`<h1>Validation successful !</h1>`);       
}
const Email=req.body.Email
const password=req.body.password
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log("Something went wrong"+err);
    }
    else{
        console.log("running on port 3000")
    }
})