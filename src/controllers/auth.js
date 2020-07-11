// se importa express para no perder la ayuda de IDE
const { response } = require('express');

const User = require('../models/User');
const {
  badRequest,
  serverError
} = require('../helpers/http-errors');

const createUser = async (req, res = response) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({name, email, password});
    const userExists = await User.findOne({ email });

    if(userExists) return badRequest(null, res, 'User already exists');

    await user.save();

    res.status(201).json({
      ok: true,
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

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

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

