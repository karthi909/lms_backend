const express = require('express')
const router = express.Router();

const levelControler = require("../Controlers/levleController")
const qnControler = require("../Controlers/questionControler")
const ansControler = require('../Controlers/answerControler')
const userController = require('../Controlers/userControler')
const resultController = require("../Controlers/resultControler")


router.post('/api/user', userController.creatUser);

router.post('/api/level', levelControler.createLevel);



//........................................{ questions routes }.............................//
//route to create question only
router.post('/api/questions/create-question', qnControler.createQuestions);

//route to create with qn and ans, means we wil give both qn with answer but will create seperartly in its own models.
router.post("/api/questions/create-question-with-answer", qnControler.createQuestinsWithAnswer);



//rotue to get all questions from the database
router.get('/api/questions/get-all-questions', qnControler.getQuestions);

//route to get only one qn from data base
router.get('/api/questions/get-question-by-id/:questionId', qnControler.getQuestionWithId)

//route to get level specifc questiouns from the data base.
router.get('/api/questions/get-questions-by-levelId/:levelId', qnControler.getQuestions_by_levelID)

//route to get level specific limited number of questions from database.
router.get("/api/questions/get-questions-by-levelId-with-limit/:levelId", qnControler.getQuestion_by_levelId_limit)




//...............................{answers routes}............//

router.get("/api/answer/get-answer", ansControler.check);

//rotue to create the answer 
router.post('/api/answer/create-answer', ansControler.copt);


//router to check multi qn ans
//router.get("/api/qn/ans-check", ansControler.multiCheck)


//.................{result routes}.................//
router.post('/api/result', resultController.userResult);


module.exports = router