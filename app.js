const express = require('express');

const app = express();
app.post('/post', (req, res, next) => {
    res.send('success');
});

const port = process.env.PORT || 5000;
app.listen(port);
