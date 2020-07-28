const { Schema } = require("mongoose")

module.exports = ({mongoose}) => {
    const todoschema = new mongoose.Schema({
        "text": String,
        "iscompleted": Boolean
      });
    return mongoose.model('Todos', todoschema);
}