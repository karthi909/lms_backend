
const ansModel = require('../Models/answerModel');


let check = async (req, res)=>{
    try{

        let data = req.body;

        let {qn_id } = data;

        let ansData = await ansModel.findOne({question_id:data.qn_id});

        let rp = {answer: ansData.answer }

        res.status(200).send({data:rp})
            

    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}


module.exports = {copt, check}//, multiCheck}