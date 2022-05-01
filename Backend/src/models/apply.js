const mongoose = require("mongoose");

const apply = new mongoose.Schema({
  companyname: {
    type: String,
    required: true,
  },
  registrationnumber: {
    type: String,
    required: true,
  },
  eYear: {
    type: Date,
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
});

const Apply = new mongoose.model("Apply", apply);

module.exports = Apply;
