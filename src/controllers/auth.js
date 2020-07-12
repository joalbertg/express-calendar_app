// se importa express para no perder la ayuda de IDE
const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const {
  badRequest,
  serverError,
  unauthorizedRequest
} = require('../helpers/http-errors');
const { generateJWT } = require('../helpers/jwt');

const createUser = async (req, res = response) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({name, email, password});
    const userExists = await User.findOne({ email });

    if(userExists) return badRequest(null, res, 'User already exists');

    // encrypt password
    const salt = bcrypt.genSaltSync();

    user.password = bcrypt.hashSync(password, salt);
    await user.save();

    const token = await generateJWT(user.id, user.name);

    res.status(201).json({
      ok: true,
      token,
      user: {
        uid: user.id,
        name: user.name
      }
    });
  } catch(error) {
    console.error(error);
    return serverError(null, res, 'Call the administrator, please.');
  }
}

const loginUser = async (req, res = response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user) return badRequest(null, res, 'User not found.');

    // vefy password
    const validatePassword = bcrypt.compareSync(password, user.password);

    const token = await generateJWT(user.id, user.name);

    if(validatePassword) {
      res.json({
        ok: true,
        token,
        user: {
          uid: user.id,
          name: user.name
        }
      });
    } else {
      unauthorizedRequest(null, res, 'Unauthorized.');
    }
  } catch(error) {
    console.error(error);
    return serverError(null, res, 'Call the administrator, please.');
  }
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

