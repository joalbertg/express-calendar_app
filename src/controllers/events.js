const { response } = require('express');

const Event = require('../models/Event');
const { serverError } = require('../helpers/http-errors');

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

const create = async (req, res = response) => {
  try {
    const { title, notes, start, end } = req.body;
    const event = new Event({ title, notes, start, end, user: { _id: req.uid } });
    const eventSave = await event.save();

    res.json({
      ok: true,
      eventSave
    });
  } catch(error) {
    console.log(error);
    return serverError(null, res, 'Server error')
  }
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

