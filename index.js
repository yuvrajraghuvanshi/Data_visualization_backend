const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors');
const { mongoDb } = require('./database');
const router = require('./routes/dataRoute');
dotenv.config()

const app=express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoDb() 
app.use('/api/data',router)

const PORT=process.env.PORT
app.listen(PORT || 5000,()=>{
    console.log("Server is running at Port",PORT)
})