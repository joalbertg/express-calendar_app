if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/.env' });
}

module.exports = {
  PORT: process.env.PORT,
};

