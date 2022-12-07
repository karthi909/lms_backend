const userModel = require('../Models/userModel');

const creatUser = async (req, res)=>{
try {
    let data = req.body;
    let {uid, first_Name, last_Name, mobile_Number, email_id, linkedIN_url} = data;

    let nData = await userModel.create(data)

    res.send({data: nData})
} catch (err) {
    res.send({error: err})
}
};

module.exports = {creatUser}