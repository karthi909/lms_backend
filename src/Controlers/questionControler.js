const questionModel = require('../Models/questionModel');
//const ansModel = require('../Models/optionModel');
const optionModel = require('../Models/optionModel');


const createQn = async (req, res)=>{
    try{
        let data = req.body;

        let {level_id, question_title, question_disc, question_points, options}= data;
        
        let nData = await questionModel.create(data)

        res.send({data: nData});


    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}

const createQnWithAns = async (req, res) =>{
    try{
        let data = req.body;

        let {level_id, question_title, question_disc, question_points, options, answer} = data;
        //console.log(data)

        let qData = await questionModel.create({
            level_id: data.level_id,
            question_title: data.question_title,
            question_disc: data.question_disc,
            question_points: data.question_points,
            options: data.options
        });

        //console.log(qData);

        let aData = await optionModel.create({
            question_id: qData._id,
            answer: data.answer
        });

        res.send({qnData: qData, ansData: aData})


    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}

module.exports = {createQn, createQnWithAns}