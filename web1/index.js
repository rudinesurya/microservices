const express = require('express');
const dotEnv = require("dotenv");

const app = express();
dotEnv.config();

app.get('/', (req, res) => {
  res.send('/');
});

app.get('/ping', (req, res) => {
  res.send('Successful response from web1.');
});

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT}.`));