require('dotenv').config();
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Keshav Agarwal")
});

app.get('/login',(req,res)=>{
    res.send("Hello Login Karlo")
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>Hello Youtube</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port ${process.env.PORT}`)
})