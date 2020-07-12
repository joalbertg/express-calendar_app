const { response } = require('express');

const { Event } = require('../models/Event');

const index = (req, res = response) => {
  res.json({
    ok: true,
    message: 'index'
  });
}

const show = (req, res = response) => {
  res.json({
    ok: true,
    message: 'show'
  });
}

const create = (req, res = response) => {
  const { title, notes, start, end } = req.body;

  console.log(title, notes, start, end);

  res.json({
    ok: true,
    message: 'create'
  });
}

const update = (req, res = response) => {
  res.json({
    ok: true,
    message: 'update'
  });
}

const _delete = (req, res = response) => {
  res.json({
    ok: true,
    message: 'delete'
  });
}

module.exports = {
  index,
  show,
  create,
  update,
  _delete
};

