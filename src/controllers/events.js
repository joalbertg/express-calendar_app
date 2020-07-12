const { response } = require('express');

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

