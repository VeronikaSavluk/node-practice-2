const { model, Schema } = require('mongoose');

const noteSchema = Schema({
    title: {
        type: String
    },
    text: {
        type: String
    },
    contact: {
        type: Schema.Types.ObjectId,
        ref: 'contact'
    }
});

const Note = model('note', noteSchema);

module.exports = Note;