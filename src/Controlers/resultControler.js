const resultModel = require("../Models/resultModel")

const userResult = async (req, res)=>{
    try{
        let data = req.body;

        let {level_Id, user_Id, score,  } = data
    } catch(err){
        res.send({Error: err})
    }
}