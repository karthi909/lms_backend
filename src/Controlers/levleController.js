

const levelModel = require("../Models/levlModel");

const createLevel = async (req, res)=>{
    try{
    let data = req.body;
    let {level_num, level_disc} = data;

    let nData = await levelModel.create(data);
        //console.log(nData)
    return res.status(201).send({data: nData})

    } catch(err){
        console.log(err)
        res.status(501).send({Error: err})
    }
}


const getLevel = async (req, res)=>{
    try{
        let nData = await levelModel.find()

        res.status(200).send({data: nData})
    } catch(err){
        res.status(501).send({Error: err})
    }
}

module.exports = {createLevel, getLevel}