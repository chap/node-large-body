const express = require('express');

const app = express();
app.post('/', (req, res, next) => {
    res.send('Hi');
});

const port = process.env.PORT || 5000;
app.listen(port);
