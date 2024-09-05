const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRouter);  
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000);
