// se importa express para no perder la ayuda de IDE
const { response } = require('express');
const { validationResult } = require('express-validator');

const {
  badRequest,
  serverError,
  forbiddenRequest
} = require('../helpers/http-errors');

const validateRequest = req => {
  // handle errors
  const { errors } = validationResult(req);

  return errors;
}

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  // hanlde errors
  const errors = validateRequest(req);
  if(errors.length !== 0) return badRequest(errors, res);

  res.status(201).json({
    ok: true,
    user: {
      name,
      email,
      password
    }
  });
}

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  // hanlde errors
  const errors = validateRequest(req);
  if(errors.length !== 0) return badRequest(errors, res);

  res.json({
    ok: true,
    user: {
      email,
      password
    }
  });
}

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    message: 'renew'
  });
}

module.exports = {
  createUser,
  loginUser,
  revalidateToken
};

