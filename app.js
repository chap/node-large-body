const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({limit: '5mb'}));
// app.use(bodyParser({limit: '5mb'}));

app.post('/post', (req, res) => {
    res.send('success');
});

const port = process.env.PORT || 5000;
app.listen(port);
