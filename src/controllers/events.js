const { response } = require('express');

const Event = require('../models/Event');
const {
  notFoundRequest,
  unauthorizedRequest,
  serverError
} = require('../helpers/http-errors');

const index = async (req, res = response) => {
  try {
    const events = await Event
      .find()
      .populate();

    res.json({
      ok: true,
      events
    });
  } catch(error) {
    console.log(error);
    return serverError(null, res, 'Server error')
  }
}

const show = async (req, res = response) => {
  try {
    const { id } = req.params;
    const event = await Event
      .findOne({ _id: id })
      //.populate('user', 'name password');
      .populate('user', 'name');

    res.json({
      ok: true,
      event
    });
  } catch(error) {
    console.log(error);
    return serverError(null, res, 'Server error')
  }
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

const update = async (req, res = response) => {
  try {
    const { uid } = req;
    const { id } = req.params;
    const event = await Event
      .findById(id);

    if(!event) return notFoundRequest(null, res, 'Event not found');
    if(event.user.toString() !== uid) return unauthorizedRequest(null, res, 'Unauthorized');

    const newEvent = {
      ...req.body,
      user: uid
    };

    const updatedEvent = await Event.findByIdAndUpdate(id, newEvent, { new: true });

    res.json({
      ok: true,
      updatedEvent
    });
  } catch(error) {
    console.log(error);
    return serverError(null, res, 'Server error')
  }
}

const _delete = async (req, res = response) => {
  try {
    const { uid } = req;
    const { id } = req.params;
    const event = await Event
      .findById(id);

    if(!event) return notFoundRequest(null, res, 'Event not found');
    if(event.user.toString() !== uid) return unauthorizedRequest(null, res, 'Unauthorized');

    await Event.findByIdAndDelete(id);
    res.json({
      ok: true
    });
  } catch(error) {
    console.log(error);
    return serverError(null, res, 'Server error');
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  _delete
};

