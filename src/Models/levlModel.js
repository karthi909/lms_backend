const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId

const levelSchema = new mongoose.Schema({
   
    level_num:{ type: Number, required: true, unique: true},

    level_disc:{ type:  String, required: true},

    isDeleted:{type: Boolean, default: false},

    isDeleted_At:{ type: Date, default: null}

},{timestamps: true});

module.exports = mongoose.model('levels', levelSchema)