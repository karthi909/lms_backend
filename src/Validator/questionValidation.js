const joi = require('joi');

const validation = joi.object({
    level_id: joi.required(),
    question_title: joi.string().trim(true),
    question_desc: joi.string().trim(true),
    question_img: joi.string().trim(true),
    question_points: joi.number().required(),
    options:{
        "1": joi.string().trim(),
        "2": joi.string().trim(),
        "3": joi.string().trim(),
        "4": joi.string().trim()
    }
})