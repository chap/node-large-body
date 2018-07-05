const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<form action='/post' method='post'><textarea name='form-text'></textarea><button>submit</button></form>");
});

app.post('/post', (req, res) => {
  let body = '';
  req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
      console.log(body);
      res.end('success');
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
