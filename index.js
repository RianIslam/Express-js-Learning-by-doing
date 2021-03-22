const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    const fruit ={
        products:"apple",
        price:200
    }
    res.send(fruit);
})

app.listen(3001,() => console.log('Listening to port 3001'));