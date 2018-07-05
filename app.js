const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<html><body><form action='/post' method='post'><textarea name='form-text'></textarea><button>submit</button></form>");
});

app.post('/post', (req, res) => {
    res.send('success');
});

const port = process.env.PORT || 5000;
app.listen(port);
