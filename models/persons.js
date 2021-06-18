const mongoose = require('mongoose');

const personsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    gender: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["male", "female"],
      },
    age:{
        type: Number,
        required: true,
      },
    condition:{
        type: String,
        required: true,
        lowercase: true,
        enum:["terjangkit", "sehat"],
    }
})

module.exports = mongoose.model('persons', personsSchema);