const maketodomethos = require('./todo.methods');
const maketodomodels = require('./todo.model');

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database");
});

const todomodel = maketodomodels({mongoose});
module.exports = Object.freeze({
  todo : maketodomethos({todomodel})
})