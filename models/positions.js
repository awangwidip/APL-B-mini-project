const mongoose = require('mongoose');

const positionSchema = mongoose.Schema({
    
    longitude: {
        type: String,
        required: true,
      },
    latitude: {
        type: String,
        required: true,
      },
})

module.exports = mongoose.model('position', positionSchema);