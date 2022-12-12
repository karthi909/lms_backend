const questionModel = require('../Models/questionModel');
//const ansModel = require('../Models/optionModel');
const ansModel = require('../Models/answerModel');


const createQuestions = async (req, res)=>{
    try{
        let data = req.body;

        let {level_id, question_title, question_disc, question_points, options}= data;
        
        let nData = await questionModel.create(data)

        res.status(201).send({data: nData});


    } catch(err){
        console.log(err)
        res.status(501).send({Error: err})
    }
}

const createQuestinsWithAnswer = async (req, res) =>{
    try{
        let data = req.body;

        let {level_id, question_title, question_desc, question_img, question_points, options, answer} = data;
        
        //console.log(data)

        let qData = await questionModel.create({
            level_id: data.level_id,
            question_title: data.question_title,
            question_desc: data.question_desc,
            question_img: data.question_img,
            question_points: data.question_points,
            options: data.options
        });

        //console.log(qData);

        let aData = await ansModel.create({
            question_id: qData._id,
            answer: data.answer
        });

        //console.log(aData)

        res.status(201).send({qnData: qData, ansData: aData})


    } catch(err){
        console.log(err)
        res.status(501).send({Error: err})
    }
}


const getQuestions_by_levelID = async (req, res)=>{
    try{
        let lvl_ID = req.params.levelId
        let allData = await questionModel.find({level_id:lvl_ID})

        res.status(200).send({data: allData})
    } catch(err){
        console.log(err)
        res.status(501).send({error: err})
    }
}

const getQuestion_by_levelId_limit = async (req, res)=>{
    try{
        let lvl_ID = req.params.levelId
        //let lmt_nbr = req.query.limitNbr
        //console.log(lmt_nbr)
        let allData = await questionModel.find({level_id:lvl_ID}).limit(req.query.limit)

        res.status(200).send({data: allData})
    } catch(err){
        console.log(err)
        res.status(501).send({error: err})
    }
}

module.exports = {createQuestions, createQuestinsWithAnswer, getQuestions, getQuestionWithId, getQuestions_by_levelID, getQuestion_by_levelId_limit}