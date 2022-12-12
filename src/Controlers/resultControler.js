const resultModel = require("../Models/resultModel")

const userResult = async (req, res)=>{
    try{
        let data = req.body;

        let {level_Id, user_Id, score, certificate_URl  } = data;

        let nData = await resultModel.create(data)

        res.send({data: nData})
    } catch(err){
        res.send({Error: err})
    }
}

module.exports = { userResult};