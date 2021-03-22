const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
const users = ["karim","rahim","jodu"];

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
    const id = req.params.id;

    const name =  users[id];
    res.send({id,name})
})

app.listen(3001,() => console.log('Listening to port 3001'));