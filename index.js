const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("thank you for calling me");
})

app.listen(3001,() => console.log('Listening to port 3001'));