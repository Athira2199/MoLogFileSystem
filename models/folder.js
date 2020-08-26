const mongoose=require('mongoose');

const FolderSchema=mongoose.Schema({
    folderId:{
        type:Object,
        required:true
    },
    files:[{
        type:Object,
        required:true
    }]
})

const User=module.exports=mongoose.model('Folder',FolderSchema)