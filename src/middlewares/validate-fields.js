const { response } = require('express');
const { validationResult } = require('express-validator');

const {
  badRequest
} = require('../helpers/http-errors');

const validateRequest = req => {
  // handle errors
  const { errors } = validationResult(req);

  return errors;
}

const validateFields = (req, res = response, next) => {
  // hanlde errors
  const errors = validateRequest(req);
  if(errors.length !== 0) return badRequest(errors, res);

  next();
}

module.exports = validateFields;

