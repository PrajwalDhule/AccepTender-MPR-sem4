const mongoose = require("mongoose");

const tenderCreation = new mongoose.Schema({
  orgChain: {
    type: String,
    required: true,
  },
  tenderClass: {
    type: String,
    required: true,
  },
  tenderCategory: {
    type: String,
    required: true,
  },
  tenderTitle: {
    type: String,
    required: true,
  },
  tenderDescription: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  maxValue: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  documentTitle: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: false,
  },
});

const tc = new mongoose.model("TenderCreation", tenderCreation);
module.exports = tc;
