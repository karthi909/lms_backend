const optModel = require('../Models/optionModel');

const qnModel = require('../Models/questionModel');


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

        let ansData = await optModel.findOne({question_id:data.qn_id});

        console.log(data.ans)
        console.log(ansData.answer)

        let qnData = await qnModel.findById({_id: data.qn_id})

        console.log(qnData)
        console.log(ansData)

        if(data.ans == ansData.answer){
            res.send({status: true, reward_points: qnData.question_points})
        } else {
            //console.log("not matched the ans")
            res.send({status: false, reward_points:0});
        }

       

        //res.send({data:"done"})
            

    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}

module.exports = {copt, check}