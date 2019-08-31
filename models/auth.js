const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
  name: {
    type: String
  },
  login: {
    type: Boolean,
    default: false
  },
  translations: {
    type: Array
  }
});

module.exports = Auth = mongoose.model('auth', AuthSchema);
