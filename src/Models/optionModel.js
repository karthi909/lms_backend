const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const optionSchema = new mongoose.Schema({
   
    question_id:{ type: ObjectId, ref:"questions", required: true},

    answer:{type: Number, required: true}

     

},{timestamps: true});

module.exports = mongoose.model('options', optionSchema)