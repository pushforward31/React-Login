const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  userID: {
    type: Number,
    default: -1
  },
   timestamp: {
    type: Date,
    default: Date.now()
  },
   count: {
    type: Boolean,
    default: false
  }

});

module.exports = mongoose.model('UserSession', UserSessionSchema);
