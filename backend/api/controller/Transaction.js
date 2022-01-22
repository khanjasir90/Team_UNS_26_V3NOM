const Razorpay = require("razorpay");
require("dotenv").config();
let Farmer = require('../model/Farmer');
exports.createPaymentLink = async (req, res, next) => {
    try {
        let {
            amount,
            currency,
            desc,
            customer_name,
            customer_email,
            customer_contact,
            notesObj,
            success_url
        } = req.body;
        var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET });
    
        let paymentLink = await instance.paymentLink.create({
            amount: amount,
            currency: currency,
            accept_partial: true,
            first_min_partial_amount: 100,
            description: desc,
            customer: {
                name: customer_name,
                email: customer_email,
                contact: customer_contact
            },
            notify: {
                sms: true,
                email: true
            },
            reminder_enable: true,
            notes: {
                ...notesObj
            },
            callback_url: "http://localhost:5000/success-transaction",
            callback_method: "get"
        })
        return res.status(200).json({
            message : "transaction link created successfully",
            paymentLink
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message : error.message
            }
        )
    }

}
exports.successTransaction = async (req,res,next) => {
    try {
        let { paymentLinkId } = req.body;
        var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET });
        let transactionData = await instance.paymentLink.fetch(paymentLinkId);
        let farmerData = await Farmer.findById(transactionData.farmerId);
        farmerData.moneyEarned += transactionData.amount;
        farmerData.totalCropSelled ++;
        await farmerData.save();
        res.redirect("http://localhost:3000");
    } catch (error) {
        console.log(error);
        res.redirect("https://localhost:3000?status=Failed");
    }
}