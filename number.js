const { List } = require('actions-on-google')
const mongoose = require('mongoose')

const numberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  ticketNo: {
    type: String,
  },
  complaintStatus: {
    type: String
  },
  issue: {
    type: String
  }
})

module.exports = mongoose.model('number', numberSchema)