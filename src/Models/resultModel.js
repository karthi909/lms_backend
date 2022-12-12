const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const resultSchema = mongoose.Schema({
    user_id:{type:ObjectId, ref:"users", required:true},

    level_id:{type:ObjectId, ref:"levels", required: true},

    score:{type:Number, required: true, default:0},

    certificate_URl:{type:String,required: true},

    modifiedBy_id:{type:ObjectId, ref:""},

},{timestamps: true});

module.exports = mongoose.model('results', resultSchema)


//test atempt Date