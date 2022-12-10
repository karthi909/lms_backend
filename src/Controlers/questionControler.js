const questionModel = require('../Models/questionModel');
//const ansModel = require('../Models/optionModel');
const ansModel = require('../Models/answerModel');


const createQn = async (req, res)=>{
    try{
        let data = req.body;

        let {level_id, question_title, question_disc, question_points, options}= data;
        
        let nData = await questionModel.create(data)

        res.send({data: nData});


    } catch(err){
        console.log(err)
        res.send({error: err});
    }
}

const createQnWithAns = async (req, res) =>{
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

        res.send({qnData: qData, ansData: aData})


    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}

const getQns = async (req, res)=>{
    try{

    let allData = await questionModel.find()

    res.send({data: allData})
    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}


const getQn_ByID = async (req, res)=>{
    try{
        //let lmt_nbr = req.query.lmt_nbr
        let qID =  req.params.qnId
        //console.log(levelId)
        let allData = await questionModel.find({_id:qID})
        console.log(allData)

        res.send({data: allData});


    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}

const getQns_by_levelID = async (req, res)=>{
    try{
        let lvl_ID = req.params.level_id
        let allData = await questionModel.find({level_id:lvl_ID})

        res.send({data: allData})
    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}

const getlevel_qns_limit = async (req, res)=>{
    try{
        let lvl_ID = req.params.level_id
        //let lmt_nbr = req.query.limitNbr
        //console.log(lmt_nbr)
        let allData = await questionModel.find({level_id:lvl_ID}).limit(req.query.limit)

        res.send({data: allData})
    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}

module.exports = {createQn, createQnWithAns, getQns, getQn_ByID, getQns_by_levelID, getlevel_qns_limit}