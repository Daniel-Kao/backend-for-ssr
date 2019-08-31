const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
  name: {
    type: String
  },
  todos: {
    type: Array
  }
});

module.exports = Todos = mongoose.model('todos', TodosSchema);
