const express = require('express')
const router = express.Router();

const levelControler = require("../Controlers/levleController")
const qnControler = require("../Controlers/questionControler")
const ansControler = require('../Controlers/answerControler')
const userController = require('../Controlers/userControler')
const resultController = require("../Controlers/resultControler")


router.post('/api/user', userController.creatUser);

router.post('/api/level', levelControler.createLevel);

router.get('/api/level/get-all', levelControler.getLevel);



//........................................{ questions routes }.............................//


//route to create with qn and ans, means we wil give both qn with answer but will create seperartly in its own models.
router.post("/api/questions/create-question-with-answer", qnControler.createQuestinsWithAnswer);



//route to get level specifc questiouns from the data base.
router.get('/api/questions/get-questions-by-levelId/:levelId', qnControler.getQuestions_by_levelID)

//route to get level specific limited number of questions from database.
router.get("/api/questions/get-questions-by-levelId-with-limit/:levelId", qnControler.getQuestion_by_levelId_limit)




//...............................{answers routes}............//

router.get("/api/answer/get-answer", ansControler.check);


//.................{result routes}.................//
router.post('/api/result', resultController.userResult);


module.exports = router