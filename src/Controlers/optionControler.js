const optModel = require('../Models/optionModel')


let copt = async (req, res)=>{
    try{
    let data = req.body;

    let {question_id, answer}=data;

    let nData = await optModel.create(data);

    res.send({data: nData})
    } catch(err){
        console.log(err)
        //res.send({ err})
    }
};

module.exports = {copt}