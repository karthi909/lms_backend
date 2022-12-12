
const levelModel = require("../Models/levlModel");

const createLevel = async (req, res)=>{
    try{
    let data = req.body;
    let {level_num, level_disc} = data;

    let nData = await levelModel.create(data);
        //console.log(nData)
    return res.send({data: nData})

    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}

module.exports = {createLevel}