const { application } = require("express")
const express = require("express")
require('dotenv').config()
require('./config')
var cors = require('cors')



const app = express()

const corsOptions ={
    origin:'*',            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRouterAPI = require('./api/routes/UserAPIRouter')
const cropRouterAPI = require('./api/routes/CropApiRouter')
const farmerRouterAPI = require('./api/routes/FarmerApiRouter')
const TransactionRouter = require("./api/routes/Transaction");
const settingRouter = require("./api/routes/settingApiRouter");
const farmerSchemeRouterAPI = require('./api/routes/farmerSchemeAPIRouter')

app.use('/api/user/',userRouterAPI)
app.use('/api/crop',cropRouterAPI)
app.use('/api/farmer/',farmerRouterAPI)
app.use("/api/transaction",TransactionRouter);
app.use("/api/settingApi",settingRouter);
app.use('/api/farmer',farmerSchemeRouterAPI)

app.listen(process.env.PORT,()=>console.log('server running on port 3000'))