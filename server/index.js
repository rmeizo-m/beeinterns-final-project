const express = require('express');
const path = require('path');


const app = express();
const port = 5000;

app.get('/auth', (req, res) => {
  res.sendFile(path.resolve(__dirname, './bd.json'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
