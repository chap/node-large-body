const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<html><body><form action='/post' method='post'><textarea name='form-text'></textarea><button>submit</button></form>");
});

app.post('/post-original', (req, res) => {
    res.send('success');
});

app.post('/post-end', (req, res) => {
    res.end('success');
});


app.post('/post', (req, res) => {
  let postBody = '';
  req.on('data', chunk => {
      postBody += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
      console.log(postBody);
      res.end('success');
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
