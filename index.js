const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    const fruit ={
        products:"apple",
        price:200
    }
    res.send(fruit);
})

app.get('/fruit',(req,res)=>{
    res.send({fruit:'banana',quantity:2999,price:20000});
})

app.get('/users/:id',(req,res)=>{
    console.log(req.params);
})

app.listen(3001,() => console.log('Listening to port 3001'));