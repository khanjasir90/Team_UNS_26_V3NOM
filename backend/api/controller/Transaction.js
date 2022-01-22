const Razorpay = require("razorpay");
require("dotenv").config();
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
            callback_url: success_url,
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