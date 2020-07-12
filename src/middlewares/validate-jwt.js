const { response } = require('express');
const jwt = require('jsonwebtoken');

const {
  unauthorizedRequest,
  badRequest
} = require('../helpers/http-errors');
const { SECRET_SEED_TOKEN } = require('../config');

const validateJWT = (req, res = response, next) => {
  // x-token headers
  const token = req.header('x-token');

  if(!token) return unauthorizedRequest(null, res, 'Token not found');

  try {
    const { uid, name } = jwt.verify(token, SECRET_SEED_TOKEN);

    req.uid = uid;
    req.name = name;
  } catch(error) {
    console.log(error);
    return badRequest(null, res, 'Invalid token');
  }

  next();
}

module.exports = validateJWT;

