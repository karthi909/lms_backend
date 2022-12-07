const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId

const levelSchema = new mongoose.Schema({
   
    level_num:{ type: Number, required: true, unique: true},

    level_disc:{ type:  String, required: true}

},{timestamps: true});

module.exports = mongoose.model('levels', levelSchema)