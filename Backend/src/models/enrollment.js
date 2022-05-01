const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema({
  epfDoc: {
    type: String,
    required: false,
  },
  panDoc: {
    type: String,
    required: false,
  },
  annualTurnOver: {
    type: String,
    required: false,
  },
  boq: {
    type: String,
    required: false,
  },
  bidAmount: {
    type: String,
    required: true,
  },
});

const Enroll = new mongoose.model("Enroll", enrollSchema);

module.exports = Enroll;
