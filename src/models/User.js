const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

UserSchema.plugin(uniqueValidator);

module.exports = model('User', UserSchema);

