const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const {
  PORT,
  DB_URI,
  APPLICATION_NAME,
  MONGO_OPTS
} = require('./config');

const app = express();

// CORS
app.use(cors());

// public dir
app.use(express.static(path.resolve(__dirname + '/public')));

// body parse
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

mongoose
  .connect(DB_URI, MONGO_OPTS)
  .then(() => {
    console.info('DB Online!!!');
    app.listen(PORT, () => {
      console.log(`App: ${APPLICATION_NAME}`);
      console.log(`Listening in PORT ${PORT}`);
    });
  })
  .catch(console.error);

