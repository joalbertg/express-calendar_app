const express = require('express');
const path = require('path');

const { PORT } = require('./config');

const app = express();

// public dir
app.use(express.static(path.resolve(__dirname + '/public')));
console.log(path.resolve(__dirname + '/public'))

//app.get('/', (req, res) => {
//  res.json({
//    ok: true
//  });
//});

app.listen(PORT, () => {
  console.log(`Run server in PORT ${PORT}`);
});

