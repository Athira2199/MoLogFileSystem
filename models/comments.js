const mongoose=require('mongoose');

const CommentSchema=mongoose.Schema({
    fileId:{
        type:Object,
        required:true
    },
    comments:[{
        empId:{
            type:String,
            required:true
        },
        comments:{
            type:String,
            required:true
        },
        time:{
            type:Date,
            required:true
        }
    }]
})

const User=module.exports=mongoose.model('Comments',CommentSchema)