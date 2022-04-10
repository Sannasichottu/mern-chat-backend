const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@clusters.k8lwf.mongodb.net/chatAppMern?retryWrites=true&w=majority`,()=>{
    console.log('connect to mongodb')
})