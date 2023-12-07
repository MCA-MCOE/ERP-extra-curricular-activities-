const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    fname:{
        type:String,
        required:true
    },
    mname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    prn_no:{
        type:Number,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    div:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    activityOrganizer:{
        type:String,
        required:true
    },
    activityName:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    
})

module.exports = mongoose.model('StudentDetails',studentSchema)

