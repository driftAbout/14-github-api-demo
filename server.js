const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent')

app.use(express.static('./public'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.get('/github/*', (req, res) => {
  const url = `https://api.github.com/${req.params[0]}`
  superagent.get(url)
  .set(`Authorization`, `token ${process.env.TOKEN}`)
  .then{(repos) => res.send(repos), (err) => res.send(err)}
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
