const { Schema, model } = require('mongoose');

const EventSchema = Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// para modificar el objeto a la hora de verlo,
// quitamos la version (__v) y reemplazamos (_id)
// por id.
// Esto se puede hacer porque mongoose usa ToJSON
// para serializar
EventSchema.method('toJSON', function() {
  const { _id, __v, ...object } = this.toObject();
  object.id = _id;

  return object;
});

module.exports = model('Event', EventSchema);

