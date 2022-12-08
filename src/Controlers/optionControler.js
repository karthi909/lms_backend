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

let check = async (req, res)=>{
    try{

        let data = req.body;

        let {qn_id, ans } = data;

        let ansData = await optModel.find({question_id: qn_id})

        



    } catch(err){
        console.log(err)
    }
}

module.exports = {copt}