const mongoose = require("mongoose");

const doctorModel = new mongoose.Schema({
  name: { type: String},
  description:{type: String},
  //comment:{type: String },
  img: { type: String},
  userId:{type: mongoose.Schema.Types.ObjectId, ref: "userModel"}
});

module.exports = mongoose.model("doctorModel", doctorModel);