const express=require('express');
const bodyParse=require("body-parser");
const mongoose = require('mongoose');
const connectDB = require('./configurations/db');
var cors = require('cors')
connectDB();

const app=express();

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded())
app.use(cors())

/* add comments to files*/ 
app.use('/comment',require('./routes/comment'))
/* add files to folders */
app.use('/add',require('./routes/add'))

app.listen(PORT,console.log(`server running in ${PORT}`))
