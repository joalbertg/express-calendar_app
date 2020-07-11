// se importa express para no perder la ayuda de IDE
const { response } = require('express');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

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

