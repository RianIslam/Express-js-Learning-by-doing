const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
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

////////////////////////////////post
app.post('/addUser', (req,res)=>{
    
    const user = req.body;
    user.id = 44;
    res.send(user);
})


app.listen(3001,() => console.log('Listening to port 3001'));