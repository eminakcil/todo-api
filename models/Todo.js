var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: String,
  date: String,
  complated: String
});

module.exports = mongoose.model("todo", todoSchema);