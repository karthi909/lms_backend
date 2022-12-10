const answerModel = require('../Models/answerModel');
const ansModel = require('../Models/answerModel');

const qnModel = require('../Models/questionModel');


let copt = async (req, res)=>{
    try{
    let data = req.body;

    let {question_id, answer}=data;

    let nData = await ansModel.create(data);

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

        let ansData = await ansModel.findOne({question_id:data.qn_id});

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


const multiCheck = async (req, res)=>{
    try {
        let data = req.body;

        let {test_submit} = data

        let correct_qns = [];
        let qn_ids = [];

        for(let i=0;i<test_submit.length;i++){
            qn_ids.push(test_submit[i].qn_id)
        }
        //console.log(qn_ids)

        let ansData = await answerModel.find({question_id: { $in : [...qn_ids]}})

        

        //console.log(ansData)
        //console.log("-->",qnData)
       
        // if(ansData[i].question_id.equals( qnData[i]._id )){
                
        // }

        for(let i=0; i<test_submit.length;i++){
           for(let j=0;j<ansData.length; j++){
            if(ansData[j].question_id.equals(test_submit[i].qn_id)){
                if(ansData[j].answer == test_submit[i].ans){
                    correct_qns.push(test_submit[i].qn_id)
                }
            }
           }
        }

        let qnData = await qnModel.find({_id: { $in: [...correct_qns]}})
        
        //console.log(qnData);

        /// two DB calls only and we are good to goo



        res.send({Crct_qns_data: qnData})
    } catch (err) {
        console.log(err)
        res.send({error: err})
    }
}

module.exports = {copt, check, multiCheck}