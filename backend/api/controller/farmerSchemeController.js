const farmerData = require('../../farmerSchemeData')

exports.farmerScheme = (req,res) => {
    console.log(farmerData)
    res.status(200).send({status:200,message:farmerData})
}