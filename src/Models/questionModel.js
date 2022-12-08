const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const questionSchema = new mongoose.Schema({
   
    level_id:{ type: ObjectId, ref:"levels", required: true},

    question_title:{type:String, required: true},

    question_desc:{ type:String},

    question_img:{  type:String },

    question_points:{ type: Number, required: true},

    isDeleted:{ type: Boolean, default: false},

    isDeletedAt:{ type: Date, default: null},

    options:{
            "1":{type: String},// required: true, unique: true},
            "2":{type: String},// required: true, unique: true},
            "3":{type: String},//, required: true, unique: true},
            "4":{type: String}, //, required: true, unique: true}
        }


},{timestamps: true});

module.exports = mongoose.model('questions', questionSchema)