const express = require('express');

const { PORT } = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.json({
    ok: true
  });
});

app.listen(PORT, () => {
  console.log(`Run server in PORT ${PORT}`);
});

