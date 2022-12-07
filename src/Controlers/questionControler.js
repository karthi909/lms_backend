const questionModel = require('../Models/questionModel')


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

module.exports = {createQn}