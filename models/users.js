const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
    password: {
        type: String,
        required: true,
      },
    level:{
        type: String,
        required: true,
        enum: [1, 2, 3],
      },
})

module.exports = mongoose.model('users', usersSchema);