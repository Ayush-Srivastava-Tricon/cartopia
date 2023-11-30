const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

app.post('/api/login',(req,res)=>{
    console.log(req);
    res.redirect("http://localhost:4200/profile");
})

app.listen(port,()=>{
    console.log("connected");
})