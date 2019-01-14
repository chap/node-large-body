const express = require('express');
const app = express();
var heapdump = require('heapdump');

app.get('/', (req, res) => {
    res.send("<html><body><form action='/post' method='post'><textarea name='form-text'></textarea><button>submit</button></form>");
});

app.post('/post-original', (req, res) => {
    res.send('success');
});

app.post('/post-end', (req, res) => {
    res.end('success');
});

app.get('/heapdump', (req, res) => {
  heapdump.writeSnapshot('/tmp/' + Date.now() + '.heapsnapshot');
  res.send('success');
});


app.post('/post', (req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // at this point, `body` has the entire request body stored in it as a string
    console.log("POST body="+body);
    res.end('success');
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
