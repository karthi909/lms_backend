const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const answerSchema = new mongoose.Schema({
   
    question_id:{ type: ObjectId, ref:"questions", required: true},

    answer:{type: Number, required: true},

    isDeleted:{ type:Boolean, default: false},

    isDeletedAt:{ type: Date, default: null},

    //isDeletedBy_id:{type:ObjectId, ref:""}

     

},{timestamps: true});

module.exports = mongoose.model('answer', answerSchema)