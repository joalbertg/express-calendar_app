const jwt = require('jsonwebtoken');

const { SECRET_SEED_TOKEN } = require('../config');

const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(payload, SECRET_SEED_TOKEN, {
      expiresIn: '2h'
    }, (error, token) => {
      if(error) {
        console.log(error);
        reject('Could not generate token');
      }
      resolve(token);
    });
  });
}

module.exports = {
  generateJWT
};

