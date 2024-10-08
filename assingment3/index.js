const express = require('express');
const path = require('path')
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');

app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRouter);
app.use(usersRouter);

app.listen(3000, (req, res) =>{
    console.log('server is running at http://localhost:3000')
});