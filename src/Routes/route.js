const express = require('express')
const router = express.Router();

const levelControler = require("../Controlers/levleController")
const qnControler = require("../Controlers/questionControler")
const ansControler = require('../Controlers/answerControler')
const userController = require('../Controlers/userControler')


router.post('/api/user', userController.creatUser)

router.post('/api/level', levelControler.createLevel);



//........................................{ questions routes }.............................

//route to create qn only
router.post('/api/qn', qnControler.createQn);

//route to create with qn and ans, means we wil give both qn with answer but will create seperartly in its own models.
router.post("/api/qn_ans", qnControler.createQnWithAns);

//router.post('/api/opt', optControler);

//rotue to create the answer 
router.post('/api/ans', ansControler.copt)

//rotue to get all questions from the database
router.get('/api/get_qns', qnControler.getQns)

//route to get only one qn from data base
router.get('/api/:qnId', qnControler.getQn_ByID)


//route to get level specifc questiouns from the data base.
router.get('/api/levl_qn/:level_id', qnControler.getQns_by_levelID)

//route to get level specific limited number of questions from database.
router.get("/api/lvl/:level_id", qnControler.getlevel_qns_limit)


router.get("/api/qn/ans", ansControler.check);


//router to check multi qn ans
router.get("/api/qn/ans-check", ansControler.multiCheck)


module.exports = router