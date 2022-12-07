const express = require('express')
const router = express.Router();

const levelControler = require("../Controlers/levleController")
const qnControler = require("../Controlers/questionControler")
const optControler = require('../Controlers/optionControler')
const userController = require('../Controlers/userControler')


router.post('/api/user', userController.creatUser)

router.post('/api/level', levelControler.createLevel);

router.post('/api/qn', qnControler.createQn);

//router.post('/api/opt', optControler);
router.post('/api/opt', optControler.copt)

module.exports = router