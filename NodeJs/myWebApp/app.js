const express=require('express');

var app=express();
app.get('/',(req,res)=>{
    res.send('Welcome to my web page');
});

app.get('/about',(req,res)=>{
    res.send('Welcome to about page')
});

app.listen(3000);
console.log('Server running on http://localhost:3000');