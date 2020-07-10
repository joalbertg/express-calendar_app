const express = require('express');
const path = require('path');

const { PORT } = require('./config');

const app = express();

// public dir
app.use(express.static(path.resolve(__dirname + '/public')));

// routes
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Run server in PORT ${PORT}`);
});

