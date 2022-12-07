const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const resultModel= mongoose.Schema({
    user_id:{type:ObjectId, ref:"users", required:true},
    level_id:{type:ObjectId, ref:"levels", required: true}
})
