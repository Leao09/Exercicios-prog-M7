const express = require('express');
const app = express();

app.use(express.json());
app.get('/hello', (req,res)=>{
    return res.json("hello world");
})
app.listen(1234)