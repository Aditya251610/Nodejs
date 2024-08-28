const express = require('express');

const app = express();

// app.use((req, rs, next) =>{
//     console.log('Middleware1');
//     next();
// })

// app.use((req, res) =>{
//     res.send('<h1>Middleware2</h2>');
// })

app.use('/users', (req, res) =>{
    res.send('<h1>Users Middleware</h1>');
});

app.use('/', (req, res, next) =>{
    res.send('<h1>Middleware 1</h1>');
});

app.listen(3000, (req, res) =>{
    console.log('App is running at port 3000');
})